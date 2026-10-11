# Tracking Plan — {{LAUNCH_NAME}}

## Funnel definitions
| Stage | Definition | Event / source | Baseline (pre-launch) | T+7 target | T+30 target |
|---|---|---|---|---|---|
| Eligible | Active user on an eligible plan/platform in the window | user properties | | | |
| Exposed | Saw any launch touchpoint (in-app, email open, ad impression) | `launch_touchpoint_viewed` | n/a | | |
| Discovered | Opened the feature surface | `{{slug}}_opened` | | | |
| First use | Completed the core action once | `{{slug}}_{{core_action}}` | | | |
| **Activated** | Core action that delivers value (e.g. ≥N times, or outcome reached) within X days | derived | | | |
| Retained use | Used again in week 2–4 | derived | | | |

Use **Activated**, not "clicked", as the primary metric. Clicks measure the announcement. Activation measures the feature.

## Events
| Event | Trigger | Properties | Owner | Verified staging | Verified prod |
|---|---|---|---|---|---|
| `launch_touchpoint_viewed` | Any launch surface rendered | `launch_id`, `channel`, `variant` | ENG | ☐ | ☐ |
| `launch_touchpoint_clicked` | CTA clicked | `launch_id`, `channel`, `variant` | ENG | ☐ | ☐ |
| `{{slug}}_opened` | Feature surface opened | `entry_point` (in_app_modal, email, kb, nav, …) | ENG | ☐ | ☐ |
| `{{slug}}_{{core_action}}` | Core value action completed | domain-specific | ENG | ☐ | ☐ |
| `{{slug}}_paywall_viewed` | Ineligible user hit the gate | `plan` | ENG | ☐ | ☐ |

`entry_point` is the property that tells you which channel drove adoption. Don't ship without it.

## UTM taxonomy
`utm_source={platform}&utm_medium={owned|paid|social|email|inapp|employee|creator}&utm_campaign=launch_{{slug}}&utm_content={asset_variant}`
Employee and creator links also add `utm_term={person_handle}`.

## Guardrails
| Metric | Baseline | Threshold that triggers review |
|---|---|---|
| Support tickets tagged `feature:{{slug}}` per 1k exposed | | |
| Error rate on the feature surface | | |
| Unsubscribe rate on launch emails | | |
| Overall product engagement (are we cannibalizing?) | | |

## Experiment design
- Lifecycle holdout: __% of eligible users get no launch emails or in-app messages (they can still find the feature organically).
- Paid: geo or audience holdout, or platform conversion-lift study (T1 only).
- Readout compares activation rate, holdout vs treated, at T+30.
