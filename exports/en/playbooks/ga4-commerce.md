# GA4 ecommerce events and conversion rates

Connect product views, carts, checkouts and purchases into a funnel you can reconcile.

## What it is

GA4 records customer actions as events. Connecting views, carts, checkouts and purchases reveals the shopping funnel.

When to use it: Use this to inspect drop-offs, calculate conversion rates or verify purchase tracking.

## Why it matters

- Funnel losses show whether to improve the product page, cart or checkout.
- Inconsistent denominators, amounts and events lead to conflicting conclusions.

## Connect the shopping journey

 | Concept | Description |
 | --- | --- |
 | View product | view_item |
 | Add to cart | add_to_cart |
 | Start checkout | begin_checkout |
 | Complete purchase | purchase |

These are the main events. Failed payments do not count as purchases.

## Main points

- **Record shopping actions**: Core events include view_item_list/select_item, view_item, add_to_cart, begin_checkout, purchase and refund. Add shipping and payment events as needed.
- **Include reconciliation fields**: Define triggers, item_id, items, value and currency. Use a stable transaction_id to match purchases and refunds to orders.
- **Define the denominator**: Purchase session conversion rate is sessions with a purchase divided by all sessions in the same scope. Orders per session and all-key-event rate differ.
- **Compare the same scope**: If 100 of 10,000 sessions include a purchase, the rate is 1%. Align time zone, device, market, period and consent coverage.
- **Account for platform differences**: GA4, Shopify and Ads have different attribution and tracking limits. Order accounting is the transaction baseline; reports need not match exactly.

### Glossary

- **Event**: A recorded action, such as adding to cart.
- **Session**: A group of interactions during one visit; a user can have several.
- **transaction_id**: An order identifier used to recognize the same transaction.

## An example

- Situation: If 100 of 10,000 sessions contain a purchase, purchase session conversion is 1%.
- Takeaway: State the denominator before comparing rates.

## Start here

Agree on what counts as a purchase and conversion before checking events.

## Before you start

- Property, data stream, event sources and test environment
- Product/variant ID mappings, tax and shipping value rules, de-identified test orders

## Steps

1. Define one sender per event and parameter. Check native integrations and gaps between custom storefront and hosted checkout.
2. Verify cross-domain source continuity; avoid self or payment-provider referrals. Do not send personal data such as email to analytics.
3. Check event order, values and currencies in DebugView, requests and reports. Test reloads, failed payments, refunds and consent.
4. Deliver a funnel and metric dictionary with numerators, denominators, test exclusions and reasons for discrepancies.

## Completion checks

- Reloads do not duplicate purchases; refunds match the original transaction.
- Reports show funnels by channel/device and reproduce the agreed conversion rate.

## Common pitfalls

- Sending purchase on a checkout-button click or failed payment.
- Calling orders divided by users a session conversion rate.

## Decisions to make

Agree on purchase, revenue and conversion definitions.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Google Analytics: ecommerce events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce) (2026-10-21): Ecommerce events, items, currency, transaction_id, purchases and refunds. Check current Meta/Ads documents when implementing those platforms.
- [Shopify: Web Pixels API](https://shopify.dev/docs/api/web-pixels-api) (2026-10-21): App/custom pixel sandboxes, customer events and privacy APIs. Does not guarantee automatic coverage of Astro storefronts.
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.

## Related knowledge

- measurement
- meta-tracking
- google-commerce
- ecommerce-growth
