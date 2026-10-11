# Product Release Checklist by GrowthCast

A Claude Code plugin that runs product launches as a tiered system rather than doing everything for every launch. It covers each launch from kickoff to the T+90 adoption readout.

## Install
```
/plugin marketplace add ~/product-release-checklist     # or the GitHub repo once pushed
/plugin install product-release-checklist@growthcast
```

## Workflow
| When | Command | Output |
|---|---|---|
| T-30 | `/product-release-checklist:launch-kickoff "Feature" 2026-11-18` | Tier score, `launches/<date-slug>/` with brief, dated checklist, tracking plan |
| T-21 | `/product-release-checklist:launch-messaging` | Approved message house: the single source of truth |
| T-30→T-14 | `/product-release-checklist:launch-measure plan` / `baseline` | Activation definition, events, targets, holdout |
| T-14 | `/product-release-checklist:launch-assets all` | Drafts for every channel the tier calls for, plus a consistency check |
| T-3 | `/product-release-checklist:launch-readiness` | GO / NO-GO with blockers (calls the `launch-red-team` agent) |
| Anytime | `/product-release-checklist:launch-readiness all` | Status across every active launch |
| T+7/30/90 | `/product-release-checklist:launch-measure T+30` | Readout: funnel, holdout lift, channel contribution |
| T+14 | `/product-release-checklist:launch-retro` | Retro, saved benchmarks, checklist overrides |
| Once | `/product-release-checklist:changelog-automation` | Repo releases → curated changelog PR on the marketing site |

## Workspace layout (in the client's project)
```
launches/
  launch-context.md          # company-level facts, filled in once
  calendar.md                # every launch; collision checks
  benchmarks.md              # real rates from past launches, used for targets
  checklist-overrides.md     # retro-driven edits to the default checklist
  2026-11-smart-invoicing/
    brief.md  message-house.md  checklist.md  tracking-plan.md
    assets/  readiness-*.md  readout-T+*.md  retro.md
```

## Tiers
T1 flagship (full stack, founder-led, at most one per ~6 weeks) · T2 notable (owned and in-app, lifecycle, docs) · T3 minor (changelog, KB, tooltip, rolled into a monthly "What's new"). See `templates/tiering-rubric.md`.
