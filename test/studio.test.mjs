// Model, CLI, server and hook tests. Run with: node --test test/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { request } from "node:http";
import { join, resolve } from "node:path";
import { ITEMS, ASSETS, addDays, checks, itemsFor, newLaunch, normalize, progress, readiness, tierOf, weekday } from "../studio/model.mjs";

const root = resolve(import.meta.dirname, "..");
const studio = join(root, "tools/studio.mjs");
const run = (home, ...a) => JSON.parse(execFileSync("node", [studio, ...a, "--home", home], { encoding: "utf8" }));

test("tier is computed from the five scores and filters the checklist", () => {
	const l = newLaunch("X", "2026-11-17");
	assert.equal(tierOf(l), null);
	assert.equal(itemsFor(l).length, ITEMS.length, "unscored shows the T1 superset");
	Object.assign(l.tier.scores, { reach: 1, acquisition: 1, revenue: 1, behavior: 1, narrative: 1 });
	assert.equal(tierOf(l), 3);
	assert.ok(itemsFor(l).every((i) => i.tiers.includes(3)));
	l.tier.scores.reach = 3; l.tier.scores.narrative = 3;
	assert.equal(tierOf(l), 2);
	l.tier.override = 1;
	assert.equal(tierOf(l), 1);
});

test("due dates count back from T-0 and avoid weekends", () => {
	const l = newLaunch("X", "2026-11-17");
	for (const i of itemsFor(l)) assert.ok(![0, 6].includes(new Date(`${i.due}T00:00:00Z`).getUTCDay()), `${i.id} lands on a weekend`);
	assert.equal(weekday("2026-11-14", false), "2026-11-13");
	assert.equal(weekday("2026-11-14", true), "2026-11-16");
	assert.equal(itemsFor(l).find((i) => i.id === "readiness").due, "2026-11-13");
});

test("done without evidence doesn't count", () => {
	const l = newLaunch("X", "2026-11-17");
	l.items.tier = { status: "done", evidence: "" };
	const before = progress(l).done;
	assert.ok(checks(l).some((c) => c.item === "tier"));
	l.items.tier.evidence = "https://x";
	assert.equal(progress(l).done, before + 1);
});

test("readiness gates: NO-GO until gates, items and red-team blockers clear", () => {
	const { launch: l } = normalize({ id: "l_test", name: "X", t0: "2026-11-17", tier: { override: 3 }, rollout: { full: true } });
	assert.equal(readiness(l).verdict, "no-go");
	for (const i of itemsFor(l)) l.items[i.id] = { status: "done", evidence: "x" };
	l.message.status = "approved";
	l.measure.events.forEach((e) => (e.prod = true));
	assert.equal(readiness(l).verdict, "go");
	l.feedback.items.push({ severity: "blocker", text: "x" });
	assert.equal(normalize(l).launch && readiness(normalize(l).launch).verdict, "no-go");
});

test("checks flag vanity metrics, missing DRI and unconfirmed rollout", () => {
	const l = newLaunch("X", addDays(new Date().toISOString().slice(0, 10), 30));
	l.measure.primary = "Video views";
	const c = checks(l).map((x) => x.text).join("\n");
	assert.match(c, /vanity/);
	assert.match(c, /No launch DRI/);
	assert.match(c, /100%/);
});

test("normalize keeps unknown item ids out and fills defaults", () => {
	const { launch } = normalize({ id: "l_x", name: "A", items: { bogus: { status: "done" }, tier: { status: "weird" } }, assets: { nope: {} } });
	assert.equal(launch.items.bogus, undefined);
	assert.equal(launch.items.tier.status, "todo");
	assert.deepEqual(launch.assets, {});
	assert.ok(launch.measure.events.some((e) => e.props.includes("entry_point")));
	assert.equal(ASSETS.every((a) => !a.item || ITEMS.some((i) => i.id === a.item)), true, "every asset links to a real item");
});

test("CLI: new, list, validate, export", () => {
	const home = mkdtempSync(join(tmpdir(), "prc-"));
	const { id } = run(home, "new", "Smart invoices", "--t0", "2026-12-01");
	assert.equal(run(home, "list")[0].name, "Smart invoices");
	assert.equal(run(home, "validate", id).ok, true);
	const { files } = run(home, "export", id, "--out", join(home, "out"));
	assert.ok(files.some((f) => f.endsWith("report.html")));
	assert.match(readFileSync(join(home, "out", "checklist.md"), "utf8"), /Decide/);
});

test("server: save with version check, request queue, and hook delivers once", async () => {
	const home = mkdtempSync(join(tmpdir(), "prc-"));
	const { id } = run(home, "new", "Srv", "--t0", "2026-12-01");
	const port = 4790 + Math.floor(Math.random() * 100);
	const srv = spawn("node", [studio, "--port", String(port), "--home", home], { stdio: "pipe" });
	await new Promise((r) => srv.stdout.once("data", r));
	const base = `http://127.0.0.1:${port}`;
	try {
		const got = await (await fetch(`${base}/api/launches/${id}`)).json();
		got.launch.dri = "Sam";
		const put = await fetch(`${base}/api/launches/${id}`, { method: "PUT", headers: { "x-base-version": got.version }, body: JSON.stringify(got.launch) });
		assert.equal(put.status, 200);
		const stale = await fetch(`${base}/api/launches/${id}`, { method: "PUT", headers: { "x-base-version": got.version }, body: JSON.stringify(got.launch) });
		assert.equal(stale.status, 409, "stale version is rejected");
		const q = await fetch(`${base}/api/request`, { method: "POST", body: JSON.stringify({ kind: "review", launchId: id, note: "hi" }) });
		assert.equal(q.status, 201);
		const hook = (s) => execFileSync("node", [join(root, "tools/studio-context.mjs"), "--home", home], { input: JSON.stringify({ session_id: s }), encoding: "utf8" });
		assert.match(JSON.parse(hook("a")).hookSpecificOutput.additionalContext, /Red-team review/);
		assert.equal(hook("b"), "", "delivered only once");
		const foreign = await new Promise((ok) => request({ port, path: "/api/launches", headers: { host: "evil.com" } }, (r) => ok(r.statusCode)).end());
		assert.equal(foreign, 403, "requests addressed to another host are refused");
	} finally {
		srv.kill();
	}
});
