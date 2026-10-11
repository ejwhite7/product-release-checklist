# Launch Checklist — {{LAUNCH_NAME}}

**Tier:** {{TIER}} · **Launch DRI:** {{DRI}} · **Launch date (T-0):** {{DATE}} · **Status:** Planning

Tags: `[T1]` flagship, `[T2]` notable, `[T3]` minor. Kickoff removes items that don't apply to this tier.
Owner roles: DRI · PMM (product marketing) · PM · ENG · DESIGN · CONTENT · SOCIAL · PAID · LIFECYCLE · SUPPORT · CS · DATA · LEGAL · FOUNDER

Each item has three parts: owner, due date, and the evidence that it's done (a link). An item without a link isn't done.

---

## Phase 0 — Decide (T-30 → T-21)

- [ ] `[T1][T2][T3]` Tier assigned using the tiering rubric, with the reasoning written down — DRI
- [ ] `[T1][T2][T3]` One accountable launch DRI named. Owners named for every workstream below — DRI
- [ ] `[T1][T2]` Launch date checked against the launch calendar: no other T1/T2 within ±7 days, no holiday, no planned billing or pricing changes — DRI
- [ ] `[T1][T2][T3]` Eligibility defined: which plans, platforms (web/iOS/Android), regions and languages get it, and whether it ships behind a flag — PM
- [ ] `[T1][T2]` Packaging and pricing decided: included, add-on, or upgrade trigger? What does a user on an ineligible plan see? — PM + PMM
- [ ] `[T1][T2]` Rollout plan agreed: % rollout schedule, and when it hits 100% compared with T-0. **Don't announce to users who can't access the feature yet** — PM + ENG
- [ ] `[T1][T2][T3]` Success metric (one primary), activation definition, guardrail metrics and target set **before** launch → `tracking-plan.md` — DATA + PM
- [ ] `[T1][T2]` Baseline captured: current behavior on the job this feature replaces, for 4 weeks before launch — DATA
- [ ] `[T1]` Holdout design agreed: global lifecycle holdout (5–10%) and a paid geo or audience holdout, if incrementality matters — DATA + LIFECYCLE + PAID

## Phase 1 — Narrative (T-21 → T-14)

- [ ] `[T1][T2][T3]` Message house approved: one-liner, the job it does, who it's for, 3 pillars, proof, objections → `message-house.md` — PMM
- [ ] `[T1][T2]` Customer evidence: beta users, quotes, before/after numbers, and permission to use them — PMM + CS
- [ ] `[T1][T2]` Feature name checked: plain-language, searchable, not internal jargon, trademark-safe, translatable — PMM + LEGAL
- [ ] `[T1]` Founder narrative angle agreed with the founder: why we built it, what it says about where the company is going — FOUNDER + PMM
- [ ] `[T1][T2]` Claims review: performance numbers, AI claims, comparisons with competitors, "free" or "unlimited" language — LEGAL
- [ ] `[T1][T2]` Users who requested the feature identified (feature-request board, support tags, CS notes) so they can be told first — PMM + SUPPORT

## Phase 2 — Build assets (T-14 → T-5)

**Founder and owned narrative**
- [ ] `[T1][T2]` Founder product announcement post (blog or newsletter), written in product-marketing terms: benefit first, then show-don't-tell visuals, then CTA — PMM + FOUNDER
- [ ] `[T1]` Announcement video (60–90s hero cut, plus 9:16, 1:1 and 16:9 cutdowns, burned-in captions, no music that blocks reuse in ads) — CONTENT
- [ ] `[T1][T2]` Dedicated feature landing page on the marketing site (indexable, with a target keyword, FAQ schema, and copy that LLMs can cite) — not just a banner — PMM + WEB
- [ ] `[T1][T2]` Marketing-site banner with an expiry date set — WEB
- [ ] `[T1][T2][T3]` Changelog entry: curated and written for users, not raw release notes (see the changelog-automation skill) — PM + PMM

**Social and advocacy**
- [ ] `[T1][T2]` Founder social posts (one per platform, written natively for each) — FOUNDER + SOCIAL
- [ ] `[T1][T2]` Company profile posts and a content calendar for T-0 → T+14 — SOCIAL
- [ ] `[T1]` Employee advocacy kit: 3 pre-written post variants per platform, the video file, a link with per-employee UTMs, and a Slack reminder at T-0 — SOCIAL
- [ ] `[T1]` Influencer and creator briefs: an organic (seeding) track and a performance UGC track (hooks, must-say, must-not-say, FTC #ad disclosure, usage rights for paid whitelisting) — SOCIAL + LEGAL
- [ ] `[T1][T2]` Community seeding plan (Reddit, Facebook groups, Product Hunt, Slack/Discord communities) that follows each community's rules — SOCIAL

**In-product**
- [ ] `[T1][T2][T3]` In-app announcement (modal for T1, banner or tooltip for T2/T3), shown only to eligible users, with a frequency cap and a deep link to the feature — PM + LIFECYCLE
- [ ] `[T1][T2]` Empty state and first-run experience inside the feature itself (adoption fails here more often than in marketing) — DESIGN
- [ ] `[T1][T2]` Mobile: app store "What's New" text, updated screenshots if the UI changed, and a push notification plan — PM + LIFECYCLE

**Education**
- [ ] `[T1][T2][T3]` Knowledge base article(s), live at T-0 with screenshots that match the production UI — SUPPORT
- [ ] `[T1][T2]` KB content fed into the AI support bot or help widget, then tested with 10 real questions — SUPPORT
- [ ] `[T1][T2]` YouTube tutorial (search-titled, chaptered, linked from the KB and from in-app) — CONTENT
- [ ] `[T1]` Webinar or live deep-dive scheduled; registration open at T-0; recording reused as an evergreen asset — PMM
- [ ] `[T1]` Localization of in-app copy, KB, and lifecycle emails for supported languages — PMM

**Paid**
- [ ] `[T1][T2]` Audiences built: prospects (lookalikes and interest), customers (non-adopters of this feature), and past users (churned), checked against consent and suppression lists — PAID + DATA
- [ ] `[T1]` Creative: announcement video boost, product-marketing ad variants per audience (an acquisition hook for prospects, an adoption hook for customers, a winback hook for churned users) — PAID + CONTENT
- [ ] `[T1]` Budget, flight dates, kill criteria, and UTM taxonomy agreed — PAID
- [ ] `[T1]` Search: brand plus feature keywords, competitor-gap keywords, and sitelinks updated — PAID

**Lifecycle**
- [ ] `[T1][T2]` Announcement email to the eligible base, segmented by persona or plan, with the holdout excluded — LIFECYCLE
- [ ] `[T1][T2]` Behavior-triggered follow-ups: D+3 / D+10 / D+21 for eligible users who haven't triggered the activation event; exit on activation — LIFECYCLE
- [ ] `[T1][T2]` Upgrade path for ineligible-plan users who show intent (they clicked, or they hit the paywall) — LIFECYCLE
- [ ] `[T1]` Winback email to churned users whose churn reason this feature addresses — LIFECYCLE
- [ ] `[T1][T2]` Collision check: frequency caps, and no other campaign sent to the same segment within 48h — LIFECYCLE

**Go-to-market enablement**
- [ ] `[T1][T2][T3]` Support pack: positioning in 2 sentences, top 10 FAQ, known limitations, macros, escalation path, ticket tag `feature:{{slug}}` — PMM + SUPPORT
- [ ] `[T1][T2]` CS pack: talk track per segment, a list of key accounts to tell personally (before public launch for T1), and a demo script — PMM + CS
- [ ] `[T1]` Partner, affiliate and agency enablement: a one-pager and co-marketing assets — PMM
- [ ] `[T1]` Press or analyst outreach (embargoed briefing if newsworthy) — PMM
- [ ] `[T1][T2]` Internal launch: all-hands demo, Slack announcement, internal FAQ — DRI

**Instrumentation**
- [ ] `[T1][T2][T3]` Events implemented exactly as in `tracking-plan.md` and verified in staging **and** production (fire a test event, then see it in the dashboard) — ENG + DATA
- [ ] `[T1][T2]` Launch dashboard built: exposure → discovery → first use → activation → repeat use, by segment and by channel — DATA
- [ ] `[T1][T2]` UTMs and deep links tested from every channel asset — DATA

## Phase 3 — Go/No-Go (T-3)

- [ ] `[T1][T2][T3]` Readiness review run (`/product-release-checklist:launch-readiness`); every blocker is resolved or explicitly waived by the DRI — DRI
- [ ] `[T1][T2]` Feature at the agreed rollout %, error rates normal, kill switch tested — ENG
- [ ] `[T1][T2]` Rollback comms drafted (status page and in-app copy if we have to pull it) — PMM + SUPPORT
- [ ] `[T1]` Day-of run-of-show: minute-by-minute schedule with owners, and a war-room channel — DRI

## Phase 4 — Launch (T-0)

- [ ] `[T1][T2][T3]` Feature flag or rollout confirmed live for the announced audience **before** anything public goes out — ENG
- [ ] `[T1]` Key accounts and feature requesters told personally (1h before public) — CS + PMM
- [ ] `[T1][T2]` Founder post, then company post, then employee advocacy (in that order, within 60 minutes) — SOCIAL
- [ ] `[T1][T2]` Announcement post or newsletter published; in-app and site banner on; email sent — PMM + LIFECYCLE
- [ ] `[T1][T2][T3]` Changelog published; KB live; support pack posted in the support channel — PM + SUPPORT
- [ ] `[T1]` Paid flights live, with the announcement video boosted to warm audiences first — PAID
- [ ] `[T1][T2]` War room monitors errors, support volume, social replies, and the dashboard every 2h — DRI

## Phase 5 — Amplify and adopt (T+1 → T+30)

- [ ] `[T1][T2]` Reply to every comment on founder and company posts for the first 48h — SOCIAL + FOUNDER
- [ ] `[T1]` Creator and UGC content goes live in waves (not all on day 1); best performers moved into paid — SOCIAL + PAID
- [ ] `[T1]` Webinar held; recording cut into clips — PMM + CONTENT
- [ ] `[T1][T2]` Second wave at T+14: customer story or use case, a "you asked, we answered" FAQ post — PMM
- [ ] `[T1][T2]` Lifecycle non-adopter sequence running; check deliverability and unsubscribes — LIFECYCLE
- [ ] `[T1][T2]` Weekly support-ticket review for this feature: confusion goes to docs or UX fixes, bugs go to the backlog — SUPPORT + PM
- [ ] `[T1][T2]` In-product feedback prompt (1 question, shown after the 2nd use) — PM
- [ ] `[T1][T2]` Banner expired; in-app announcement retired — WEB + PM

## Phase 6 — Measure and learn (T+7 / T+30 / T+90)

- [ ] `[T1][T2][T3]` T+7 pulse: exposure and first-use against target; diagnose drop-off by stage — DATA
- [ ] `[T1][T2]` T+30 readout: activation vs target, holdout lift, channel contribution, guardrails, support load (`/product-release-checklist:launch-measure`) — DATA + DRI
- [ ] `[T1]` T+90 readout: retention or revenue impact of adopters vs matched non-adopters; decide whether to double down, iterate, or sunset — DATA + PM
- [ ] `[T1][T2]` Retro held within 2 weeks of T-0; changes to this checklist merged (`/product-release-checklist:launch-retro`) — DRI
