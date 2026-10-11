---
name: launch-assets
description: Generate launch asset drafts from an approved message house. Covers the founder product announcement, social posts (founder, company, employee kit), in-app and banner copy, the KB article, YouTube tutorial script, webinar outline, paid ad variants by audience, creator/UGC briefs, lifecycle email sequences, app store notes, and support and CS enablement packs. Use when someone asks to write launch copy, announcement posts, launch emails, ads, or enablement material.
argument-hint: "[launch folder] [asset types | all]"
---

# Launch Assets

Requires `launches/<launch>/message-house.md` with `Status: Approved`. If it isn't approved, stop and run launch-messaging first. Only generate the assets the launch's tier calls for (check `checklist.md`). Write each one to `launches/<launch>/assets/<asset>.md` with a header listing: audience, channel, owner, due date, and the message-house version it came from.

If they're installed, use these skills for voice and craft: `human-first-writing` (all copy), `engaging-writing` (founder post), `website-and-ad-copywriter` (ads and landing page), `ugc-video-script-writing` (creator briefs), `customerio-in-app-components` (in-app markup, when the client uses Customer.io).

## Asset specs

**founder-announcement.md**: product announcement in the founder's voice. The beehiiv product-update format:
- Headline built around the outcome, plus up to 2 secondary features
- A short personal opening: why we built it, what we heard from customers
- For each feature: a benefit-led subhead, 2–4 sentences, a `[VISUAL: …]` placeholder describing the GIF or screenshot, who it's for, and a CTA deep link
- A "What's next" teaser, then sign-off
- Product-marketing language: the outcome before the mechanism, no internal names, proof inline

**social-founder.md / social-company.md**: one native version per platform (X thread, LinkedIn post, TikTok/IG caption, YouTube Community). The video is the hero. Hook in the first line. No link in the LinkedIn body; put it in the first comment.

**employee-kit.md**: 3 voice variants (builder: "I worked on this", customer-facing: "customers asked for this", simple share), a per-employee UTM template, and a Slack message for T-0.

**in-app.md**: modal (title of 6 words or fewer, 1 sentence, primary CTA deep-linking into the feature, secondary "Learn more" to the KB), a banner variant, a tooltip variant, an ineligible-plan upsell variant. Note the targeting rules and frequency cap.

**site-banner.md + landing-page.md**: banner (12 words or fewer, plus CTA, plus expiry date). Landing page: H1, sub, 3 pillar sections with proof, a demo video slot, FAQ (written to work as FAQ schema), a CTA for each audience, and the target keyword.

**kb-article.md**: task-oriented title ("How to…"). Prerequisites and eligibility first, numbered steps with `[SCREENSHOT]` markers, troubleshooting, limitations, related articles. Write it so an AI support bot can answer from it: one task per article, explicit plan eligibility.

**youtube-tutorial.md**: a search-intent title, chapters, a script with on-screen actions, a description with links, and a pinned comment.

**webinar.md**: title, 45-minute agenda (10 min story, 20 min live demo, 15 min Q&A), the registration-page copy, and 3 reminder emails.

**paid-ads.md**: for each audience (prospects / non-adopting customers / churned):
- 3 hooks, 2 primary-text variants, a headline and description, and the CTA
- the creative concept
- the platform format
- the exclusions (for example, exclude activated users from adoption ads)
- what to boost: the announcement video goes to warm audiences first

**creator-brief.md**: separate organic-seeding and performance-UGC briefs:
- context and the one message
- 3 hook options
- must-show demo moments
- do / don't
- FTC disclosure requirement
- usage rights and whitelisting terms
- deliverables and timeline

**lifecycle.md**:
- Announcement email to eligible users (subject lines ×3, preheader, body, CTA)
- Non-adopter triggered sequence at D+3, D+10, and D+21. Each email takes a different angle: use case, proof, then removing friction. Each one has an exit condition (the activation event).
- Upgrade nudge for ineligible users who showed intent
- Winback email to churned users

**app-store.md**: "What's New" (170 characters or fewer for the first line), plus push notification copy (40 characters or fewer for the title).

**support-pack.md**: the positioning in 2 sentences, who's eligible, top 10 FAQ with answers, known limitations, workarounds, 3 macros, the escalation path, and the ticket tag.

**cs-pack.md**: a talk track for each segment, the "why this matters for your account" angle, a demo script, objection handling, and the outreach email to key accounts and feature requesters (sent before public launch for T1).

**internal-announcement.md**: Slack post, all-hands demo outline, internal FAQ.

## Consistency check (run after generating)
Compare every asset with the message house. Report any asset that:
- introduces a claim that isn't in the proof table
- uses a word on the avoid list
- gets eligibility wrong
- or points to a CTA URL without UTMs

Fix them before reporting done.
