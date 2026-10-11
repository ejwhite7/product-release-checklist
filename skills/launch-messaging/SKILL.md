---
name: launch-messaging
description: Build the launch message house (one-liner, job-to-be-done, pillars, proof, objections, CTAs per audience). It's the single source of truth every launch asset is written from. Use after launch-kickoff, or when someone asks for positioning, messaging, or "how do we talk about this feature".
argument-hint: "[launch folder]"
---

# Launch Messaging

Fill `launches/<launch>/message-house.md`. Every downstream asset (founder post, ads, KB, support pack) is generated from this file, so make it sharp before anything else.

## Inputs to gather
- `brief.md` and `launches/launch-context.md`
- If present, the project's `.claude/product-marketing-context.md` (from the product-marketing-context skill)
- The PRD or spec, beta feedback, support tickets or feature requests (ask for exports or links)
- Competitor equivalents: how they name and pitch the same capability. Use web search if it's available.

## Method
1. **Job first.** Write the job-to-be-done in the customer's words, not the product's. "Get paid faster without chasing clients", not "Invoicing automation".
2. **Real competitor.** Name what users do today instead: a spreadsheet, a freelancer, a competitor, doing nothing. The before/after is written against that.
3. **One-liner.** Write 5 candidates of 12 words or fewer, outcome-first. Score each on clarity, specificity, and differentiation. Recommend one.
4. **Pillars.** No more than 3. Each pillar needs proof: a number, a quote, or a 5-second demo moment. If a pillar has no proof, cut it or mark it `NEEDS PROOF`.
5. **Objections.** List the top 5, including "is this just AI slop?", "does it cost more?", "will it break what I have?", and "why should I switch?".
6. **Name check.** Is the feature name plain-language, searchable, and translatable? If not, propose alternatives.
7. **Audience CTAs.** Write separate CTAs for prospects, eligible customers, ineligible-plan customers, and churned users.
8. **Honest limits.** List what it doesn't do yet. Support and CS need this more than marketing does.

## Review gate
Show the user the one-liner, pillars, and proof table and ask for approval. Mark the file `Status: Approved <date>`. After approval, any edit must say: "message house changed; run launch-assets to regenerate affected drafts".
