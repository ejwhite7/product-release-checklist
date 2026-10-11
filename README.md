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
| **Staffing** | Team roster (name, email, title, capacity), a role → person matrix for the roles this tier needs, per-person workload with peak week, and Linear sync status. Items inherit their owner from the role. |
| **Checklist** | ~73 items in 7 phases, filtered to the tier, with due dates counting back from T-0. Owner, evidence link, waive with a reason. *Done needs evidence.* |
| **Video** | The launch video as a workstream: brief → script → UI freeze → production → review → master → cutdowns → hand-off → launch → performance. Concept (format, hook, talent, music, tools), script, review rounds with timestamped notes, PMM/Founder/Legal sign-off, rights, deliverables (hero, vertical, square, in-app loop, paid cuts, captions) and a hand-off packet per team. The approved hero cut is a go/no-go gate for T1/T2. |
| **Messaging** | Message house: one-liner, pillars + proof, objections, limits, CTAs per audience. Approve it to unlock assets. |
| **Assets** | 19 launch assets (founder post → support pack), each with a spec, status, owner and a Markdown draft |
| **Measure** | Activation definition, funnel targets vs actuals, events (verified staging/prod), guardrails, channel cost per activation, T+7/30/90 readouts |
| **Readiness** | Hard gates, open items, red-team findings → GO / GO WITH WAIVERS / NO-GO |
| **Retro** | Outcome, what worked, what didn't, process gaps, benchmarks for the next launch |
| **Portfolio** | Every launch on one calendar, with T1/T2 collisions flagged |

**Ask Claude** (left panel) queues a request: *Write video script*, *Plan or make the video* (uses the video-gen plugin for AI/hybrid cuts), *Turn notes into revisions*, *Sync to Linear*, *Publish team plan*, *Fill brief from note*, *Score tier*, *Write message house*, *Draft
assets*, *Red-team review*, *Plan measurement*, *Write readout*, *Run retro*. Send any message in Claude Code and the
request goes with it (via a `UserPromptSubmit` hook). Claude edits the launch file, and the studio reloads live.

**Team launch plan** (Share → Open the team launch plan) is the page to present: goals, milestones per phase, team and
roles, and a "who does what" section per person with due dates and checkboxes. **Tasks CSV** has the same rows for sheets.

**Sync to Linear** (Staffing tab, or Share) asks Claude to use Composio's Linear tools. It creates a project for the
launch, a milestone per phase, and one issue per open task, assigned by email with its due date. Issue ids are written back
(`studio.mjs link`), so re-syncs update instead of duplicating, and issues closed in Linear tick off the checklist with the
issue as evidence. The studio holds no API keys.

**Share** also opens a one-page report, exports a Markdown pack (brief, checklist, message house, tracking plan, readiness,
assets) to your export folder, or asks Claude to publish a private share link.

## Data
- Launches: `~/.product-release-checklist/launches/<id>.json`
- Settings (company context file, export folder): `~/.product-release-checklist/settings.json`
- The checklist, tier rubric, asset specs and gates are defined once in `studio/model.mjs`

## CLI
```
node tools/studio.mjs [--port 4730] [--open]
node tools/studio.mjs list | new "<name>" --t0 yyyy-mm-dd | validate <id> | export <id> [--out dir]
node tools/studio.mjs sync-plan <id> | link <id> <result.json>
npm test
```

## Also included
- Skills: `product-release-checklist` (studio + schema), `launch-kickoff`, `launch-messaging`, `launch-assets`, `launch-readiness`, `launch-measure`, `launch-retro`, `launch-video`, `launch-linear-sync` (Composio → Linear), `changelog-automation` (repo releases → curated marketing-site changelog)
- Agent: `launch-red-team`
- Commands: `/product-release-checklist:open`, `/product-release-checklist:share`
