# CRM, email and customer journeys

Connect leads, purchases and follow-up so handoffs do not lose work.

## What it is

A CRM records customer and opportunity status. A customer journey defines when to provide information or service.

When to use it: Use this for incoming leads, scattered lists or follow-up email planning.

## Why it matters

- A form must route the lead to an owner and track the result.
- Consent, segmentation and exit rules keep communication relevant.

## Main points

- **Define customer data**: Define contacts, companies, deals, sources and lifecycle stages; assign field ownership and deduplication keys.
- **Separate marketing and service**: Separate order messages from marketing. Define cross-system ownership for consent, unsubscribes, bounces and deletion; do not assume two-way sync.
- **Authenticate the sending domain**: Verify sending domains and SPF/DKIM/DMARC. Preserve existing mail services when changing DNS.

## An example

- Situation: An inquiry exists in a form and spreadsheet, but nobody knows who replied.
- Takeaway: Connect the source, owner and status.

## Start here

Trace one inquiry from arrival to sale and mark each handoff.

## Before you start

- Contact fields, sources, consent records, CRM and sending platform
- Journey, owners, response times, messages and exit rules

## Steps

1. Define field mappings, segments, assignment and deduplication.
2. Draft welcome, inquiry, abandonment or retention flows and messages.
3. Use test contacts to verify triggers, exclusions, unsubscribes, deduplication and CRM updates.

## Completion checks

- Each valid form reaches the right system and owner; retries create no duplicate records.
- Unsubscribed contacts leave inapplicable marketing flows; tests do not reach customers.

## Common pitfalls

- Treating all historical customers as consenting to marketing.
- Triggering bulk email during imports.

## Decisions to make

Agree on list usage, messages and recipients before activating verified flows.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Tenten | Clear, Useful Digital Products](https://tenten.co/) (2026-10-21): Service mix, shared briefs, review and delivery. Does not establish project contracts, SLAs or guaranteed results.
- [Digital Transformation Consulting | Audit to Build | Tenten](https://tenten.co/services/transformation-consulting) (2026-10-21): Digital consulting, current-state review, decision records and acceptance.
- [Klaviyo: Shopify subscription sync limits](https://help.klaviyo.com/hc/en-us/articles/115005080667) (2026-10-21): Profiles versus subscriptions, Shopify unsubscribes that do not automatically unsubscribe in Klaviyo, and resubscription/deletion sync limits.

## Related knowledge

- klaviyo
- commerce-service
- automation-integration
