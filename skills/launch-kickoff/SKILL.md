---
name: launch-kickoff
description: Start a new product launch with the GrowthCast Product Release Checklist. Runs intake, scores the launch tier (T1/T2/T3), and creates a launch workspace containing a brief, a checklist filtered to the tier and given dates, a tracking plan, and a message-house stub. Use when someone says "we're launching X", "new feature launch", "plan a product announcement", or "kick off a launch".
argument-hint: "[feature name] [target launch date]"
---

# Launch Kickoff

Templates live in the plugin's `templates/` directory, two levels up from this skill's base directory (`${CLAUDE_PLUGIN_ROOT}/templates/`).

## 1. Load context
- Look for `launches/launch-context.md` in the current project. If it's missing, copy `templates/launch-context.md` there and ask the user to fill it in. Offer to pre-fill it by reading the company's website, but don't block on it.
- Read `launches/calendar.md` if it exists. You'll use it to check for date collisions.

## 2. Intake
Ask only for what you can't infer. Use AskUserQuestion with a maximum of 4 questions per round. You need:
1. Feature name and a one-paragraph description (or a PRD/Linear/Notion link to read).
2. Target T-0 date, and whether rollout will be at 100% for the announced audience on that date.
3. Eligibility: plans, platforms, regions, languages. Pricing or packaging impact.
4. The customer evidence behind it (requests, churn reasons, beta results).

## 3. Tier it
Score the launch with `templates/tiering-rubric.md`. Show the score for each factor, with a one-line reason for each, then the total and the tier. The user can override, but record the override and the reason.

## 4. Create the workspace
Create `launches/<YYYY-MM>-<slug>/` with:
- `brief.md` from `launch-brief.md`, filled with what you know
- `checklist.md` from `checklist.md`, with `launches/checklist-overrides.md` applied on top if it exists. You must also:
  - delete every item whose tags don't include this tier
  - turn T-minus phases into real calendar dates counted back from T-0, skipping weekends
  - add `Owner: ___ · Due: <date> · Evidence: ___` under each item
  - leave the owner roles in place for the user to swap for names
- `tracking-plan.md` from `tracking-plan.md`, with `{{slug}}` replaced
- `message-house.md` from `message-house.md` (stub)
- `assets/` (empty, filled by launch-assets)

Append the launch to `launches/calendar.md` (`| T-0 | Launch | Tier | DRI | Status |`). Flag any other T1/T2 within ±7 days.

## 5. Pressure-test before handing off
Before finishing, check the intake for these failure modes and raise any that apply. Don't silently fix them:
- The announcement date is earlier than the 100% rollout date for the announced audience.
- There's no single DRI, or the DRI is the founder (founders approve; someone else runs the launch).
- The success metric is a vanity metric (views, clicks, "awareness") rather than activation.
- No baseline is possible because the events don't exist yet. Instrumentation then becomes the critical path.
- A T1 with no customer evidence or proof point.
- Pricing or packaging is undecided less than 14 days out.
- The feature name is internal jargon.

## 6. Output
End with: tier and reasoning, the workspace path, the next 5 checklist items due (with dates), and the suggested next command (`/product-release-checklist:launch-messaging`).
