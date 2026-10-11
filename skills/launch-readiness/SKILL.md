---
name: launch-readiness
description: Run a go/no-go readiness review on a launch. Audits the checklist for incomplete items, missing evidence links, and overdue tasks, then red-teams the plan for rollout, measurement, audience, legal, and support gaps. Also gives a status summary across all active launches. Use at T-3, for "are we ready to launch", "launch status", or "what's blocking the launch".
argument-hint: "[launch folder | all]"
---

# Launch Readiness

## Status mode (`all` or no argument with several launches)
Read `launches/calendar.md` and each active launch's `checklist.md`. Output one table:
`Launch | Tier | T-0 | Days out | % complete | Overdue | Blockers`. Then flag date collisions.

## Readiness mode (one launch)
1. **Checklist audit.** Parse `checklist.md`. Sort items into done-with-evidence, done-without-evidence (treat these as not done), overdue, and not started. Any unchecked item in Phase 0–3 counts as a **blocker** unless the DRI has written `WAIVED: <reason>` on it.
2. **Red-team.** Delegate to the `launch-red-team` agent with the launch folder path, then merge what it finds.
3. **Hard gates.** Any one of these failing means NO-GO:
   - The feature isn't at the agreed rollout % for the announced audience
   - The primary metric's events haven't been verified in production
   - The KB article and support pack aren't live and shared with support
   - The message house isn't approved
   - (T1) Rollback comms aren't drafted
4. **Verdict.** `GO`, `GO WITH WAIVERS` (list them), or `NO-GO` (list the blockers, each with an owner and the fastest path to clear it).

Write the result to `launches/<launch>/readiness-<date>.md` and update the Status line in `brief.md`.
