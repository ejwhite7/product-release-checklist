# Product Release Checklist by GrowthCast

A Claude Code plugin that runs product launches as a tiered system, from kickoff to the T+90 adoption readout. It comes
with a local studio where you work through each launch and ask Claude to do the heavy lifting.

## Install
```
/plugin marketplace add ~/product-release-checklist     # or the GitHub repo once pushed
/plugin install product-release-checklist@growthcast
/product-release-checklist:open
```
The studio runs at http://127.0.0.1:4730. It needs Node 20+ and has no dependencies.

## The studio
| Tab | What it's for |
|---|---|
| **Overview** | Tier, countdown, % done, overdue items, go/no-go verdict, and a T-30 → T+30 timeline of every item |
| **Brief & tier** | What ships, who it's for, the job, eligibility, pricing, rollout, and the 5-factor tier scorer (T1/T2/T3, with override + reason) |
| **Checklist** | ~73 items in 7 phases, filtered to the tier, with due dates counting back from T-0. Owner, evidence link, waive with a reason. *Done needs evidence.* |
| **Messaging** | Message house: one-liner, pillars + proof, objections, limits, CTAs per audience. Approve it to unlock assets. |
| **Assets** | 19 launch assets (founder post → support pack), each with a spec, status, owner and a Markdown draft |
| **Measure** | Activation definition, funnel targets vs actuals, events (verified staging/prod), guardrails, channel cost per activation, T+7/30/90 readouts |
| **Readiness** | Hard gates, open items, red-team findings → GO / GO WITH WAIVERS / NO-GO |
| **Retro** | Outcome, what worked, what didn't, process gaps, benchmarks for the next launch |
| **Portfolio** | Every launch on one calendar, with T1/T2 collisions flagged |

**Ask Claude** (left panel) queues a request: *Fill brief from note*, *Score tier*, *Write message house*, *Draft
assets*, *Red-team review*, *Plan measurement*, *Write readout*, *Run retro*. Send any message in Claude Code and the
request goes with it (via a `UserPromptSubmit` hook). Claude edits the launch file, and the studio reloads live.

**Share** opens a one-page report, exports a Markdown pack (brief, checklist, message house, tracking plan, readiness,
assets) to your export folder, or asks Claude to publish a private share link.

## Data
- Launches: `~/.product-release-checklist/launches/<id>.json`
- Settings (company context file, export folder): `~/.product-release-checklist/settings.json`
- The checklist, tier rubric, asset specs and gates are defined once in `studio/model.mjs`

## CLI
```
node tools/studio.mjs [--port 4730] [--open]
node tools/studio.mjs list | new "<name>" --t0 yyyy-mm-dd | validate <id> | export <id> [--out dir]
npm test
```

## Also included
- Skills: `product-release-checklist` (studio + schema), `launch-kickoff`, `launch-messaging`, `launch-assets`, `launch-readiness`, `launch-measure`, `launch-retro`, `changelog-automation` (repo releases → curated marketing-site changelog)
- Agent: `launch-red-team`
- Commands: `/product-release-checklist:open`, `/product-release-checklist:share`
