# Klaviyo: newsletters and automated journeys

Use subscription and shopping behavior for welcome emails, checkout reminders and product guidance.

## What it is

Klaviyo automates ecommerce email and SMS based on subscriptions and shopping activity.

When to use it: Use this for welcome emails, checkout reminders, product guidance or more relevant newsletters.

## Why it matters

- Behavior-based flows send relevant messages without rebuilding every campaign.
- Exit rules stop abandoned-checkout reminders after purchase and marketing after unsubscribe.

## A subscriber’s journey

 | Concept | Description |
 | --- | --- |
 | Subscribe | Enter the welcome flow |
 | Explore products | Receive relevant content |
 | Purchase | Leave that checkout reminder flow |
 | Use the product | Receive setup and care guidance |

An example journey. Every marketing message must respect subscription status.

## Main points

- **Learn the objects**: Klaviyo handles email, SMS and journeys. Profiles represent people, lists hold members, segments use dynamic rules, flows react to triggers and campaigns are one-off sends.
- **Check marketing consent**: An email address or profile is not marketing consent. Email and SMS consent are separate; order and service messages serve different purposes.
- **Start with useful journeys**: Start with welcome, checkout abandonment and post-purchase guidance. Consider browse reminders and winback later. Durable goods often need care advice and accessories.
- **Distinguish order states**: Separate native Checkout Started/Placed Order events from custom form events. Placed Order does not prove payment; check payment, cancellation and refund states.
- **Handle unsubscribes across systems**: Do not assume two-way unsubscribe sync. Official guidance says a Shopify unsubscribe does not automatically unsubscribe the person in Klaviyo; handle suppression explicitly.

### Glossary

- **Profile / list**: A person’s record / a collection of members.
- **Segment**: A group that changes as people meet its rules.
- **Flow / campaign**: A triggered journey / a one-off scheduled activity.

## An example

- Situation: A subscriber receives a welcome email, then product guidance after buying.
- Takeaway: Purchase should stop abandonment reminders for that checkout.

## Start here

Choose one journey and write its trigger, message and stopping condition.

## Before you start

- Existing sender and Shopify integration; list sources, consent and unsubscribe records
- Sending domain, assets, flow goals and internal test recipients

## Steps

1. Inventory platforms and live/draft flows. Map native order and custom form data to prevent duplicate integrations or sends.
2. Define field/event mappings, sender authentication, segments, triggers, waits, exclusions and exits. Keep new flows in Draft.
3. Test consent, purchase exits, unsubscribe suppression and retry deduplication. Isolate historical imports from welcome triggers.
4. Use supported APIs/integrations. Deliver test-email receipts, drafts and capability gaps; send only within task authorization.

## Completion checks

- Profiles, events and subscription states are independently verified; test messages and links are correct.
- Purchases stop the relevant reminders; unsubscribes stop marketing. Document sync gaps.
- Assess clicks, valid orders and unsubscribes. Attributed revenue does not establish incremental revenue.

## Common pitfalls

- Running Shopify and Klaviyo abandonment flows at once.
- Treating all historical customers as subscribed or using opens as the only metric.

## Decisions to make

Agree on audience use, offers, copy and activation timing; follow existing sending authorization.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Klaviyo: Shopify integration](https://help.klaviyo.com/hc/en-us/articles/115005080407) (2026-10-21): Profiles, order data, subscription choices, sync and onsite tracking boundaries.
- [Klaviyo: getting started with flows](https://help.klaviyo.com/hc/en-us/articles/115002774932) (2026-10-21): Flow triggers, Draft/Live states, welcome, abandonment, post-purchase and winback. Specific exclusions and acceptance checks here are suggestions.
- [Klaviyo: Shopify event data](https://help.klaviyo.com/hc/en-us/articles/115005080447) (2026-10-21): Checkout Started, Placed Order, cancellation/refund events and differences from Shopify revenue. Placed Order does not prove payment.
- [Klaviyo: Shopify subscription sync limits](https://help.klaviyo.com/hc/en-us/articles/115005080667) (2026-10-21): Profiles versus subscriptions, Shopify unsubscribes that do not automatically unsubscribe in Klaviyo, and resubscription/deletion sync limits.
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.

## Related knowledge

- lifecycle-crm
- commerce-service
- headless-commerce
- ecommerce-growth
