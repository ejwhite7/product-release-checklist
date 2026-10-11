---
name: launch-measure
description: Set up and run feature adoption measurement for a launch. Covers the pre-launch baseline, event tracking plan, goal setting, holdout design, and T+7/T+30/T+90 readouts with funnel, channel contribution, holdout lift, and guardrails. Use for "set goals for this launch", "tracking plan", "how is the launch doing", "launch readout", or "feature adoption".
argument-hint: "[launch folder] [plan | baseline | T+7 | T+30 | T+90]"
---

# Launch Measure

## plan (T-30 → T-14)
Complete `tracking-plan.md` with the PM and the data owner:
1. **Activation.** Define it as the smallest repeatable action that delivers the feature's value within a time window. Reject definitions like "opened the feature". Propose 2–3 options and explain the tradeoffs.
2. **Events.** List them with properties. The feature-open event must carry `entry_point`, because without it you can't attribute adoption to channels.
3. **Targets.** Set them from comparable past launches when that data exists. Otherwise use benchmarks and label them as such. A reasonable starting heuristic for a well-promoted T1: 20–40% of eligible actives discover the feature by T+30, and 30–50% of those activate. Replace it with the client's own history after the first launch.
4. **Guardrails and holdout.** Pick guardrails and size the holdout. Note that it needs an analyst to check whether the holdout is big enough for the effect size you expect.

## baseline (before T-0)
If an analytics MCP is connected (PostHog, Amplitude, Mixpanel, BigQuery, Supabase, and so on), query the current behavior for the job this feature replaces over the trailing 4 weeks. If not, write the exact queries or insight definitions for someone to run. Record the results in the Baseline column.

## Readouts (T+7, T+30, T+90)
Fill `templates/readout.md` into `launches/<launch>/readout-T+<n>.md`:
- **T+7 pulse.** Exposure and discovery against target. Find the biggest drop-off stage and propose one fix per stage (for example: low exposure means the in-app targeting is wrong; low discovery means the CTA is weak; low first use means a first-run UX problem).
- **T+30.** Activation against target, holdout lift (treated activation rate minus holdout activation rate, with a confidence interval), channel contribution by `entry_point` and UTM, cost per activation for paid, guardrails, and support themes.
- **T+90.** 4-week retention and revenue (conversion, expansion, churn) of adopters vs a matched set of non-adopters. State plainly that this is correlational unless it comes from the holdout. Recommend whether to double down, iterate, hold, or sunset.

Pull data through connected MCPs where possible. Never invent numbers. Leave a cell blank and list the query needed to fill it.
