# Changelog

## 0.6.1
- The studio checks for changes as soon as its tab is back in view, so a sync or Claude's work that finished in the background shows up right away.

## 0.6.0
- In the client portal, the Staffing tab connects the project's Linear workspace through a Composio Connect link (the person picks the workspace on Composio's page) and syncs launches to it: a project, phase milestones and one issue per open task, assigned by email, with closed issues ticking off the checklist.
- Linear issue descriptions no longer ask for an evidence link.

## 0.5.4
- Delete a launch from the bottom of its Brief tab. In the client portal only owners and admins see it.

## 0.5.3
- In the client portal, a new launch records its project's name.

## 0.5.2
- Evidence on checklist items is optional. An item marked done counts as done, with or without a link.

## 0.5.1
- Inside the client portal, the studio drops its own product name from the top bar.

## 0.5.0
- The studio also runs hosted in the GrowthCast client portal ("web mode"): launches filed under portal projects, per-project company context, read-only access for clients, and Ask Claude run on the server. API paths are now relative. Local use is unchanged.

## 0.4.0
- Launch video workstream: Video tab, nine dated items (brief → performance), approved hero cut as a go/no-go gate, `launch-video` skill.

## 0.3.0
- Staffing tab (people, role → person matrix, workload), team launch plan page, tasks CSV, Linear sync via Composio (`launch-linear-sync`).

## 0.2.0
- Interactive local studio: brief and tier, dated checklist, message house, assets, measurement, readiness, retro, portfolio.

## 0.1.0
- Markdown skills, templates and the `launch-red-team` agent.
