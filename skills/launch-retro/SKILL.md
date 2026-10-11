---
name: launch-retro
description: Run a launch retrospective and feed the lessons back into the GrowthCast launch system (checklist, tiering rubric, benchmarks). Use 1–2 weeks after T-0, or when someone asks for a launch retro, post-mortem, or "what did we learn from this launch".
argument-hint: "[launch folder]"
---

# Launch Retro

1. Gather: `checklist.md` (which items slipped, were waived, or were skipped), `readiness-*.md`, `readout-T+*.md`, and any notes the user pastes in (Slack threads, meeting notes).
2. Write `launches/<launch>/retro.md`:
   - **Outcome vs goal** (one line, with numbers)
   - **What worked** (keep doing). Name the channels or assets that drove activation, with evidence.
   - **What didn't** (stop or fix). Be specific: "KB went live at T+1, and 40% of first-day tickets asked how to enable it."
   - **Process gaps.** Items that were missing from the checklist, or that sat in the wrong phase.
   - **Benchmarks to save**: actual exposure, discovery, and activation rates, cost per activation, and email CTR. Append them to `launches/benchmarks.md` so future target-setting uses real history.
3. **Improve the system.** Propose concrete diffs to the project's copy of the checklist and rubric. Override the plugin defaults by saving them to `launches/checklist-overrides.md`; launch-kickoff applies those overrides on top of the template. Ask the user before writing.
