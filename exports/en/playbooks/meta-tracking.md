# Meta Pixel, CAPI and deduplication

Report real purchases without counting browser and server copies twice.

## What it is

Meta tracking reports purchases to Facebook and Instagram advertising. Pixel sends from the browser; CAPI sends from the server.

When to use it: Use this before Meta campaigns or when purchase totals look wrong.

## Why it matters

- Valid purchase events support ad learning and evaluation.
- Browser and server tracking complement each other, but duplicate purchases inflate ROAS.

## Two reports, one purchase

 | Concept | Description |
 | --- | --- |
 | Browser Pixel | Event name and eventID |
 | Server CAPI | Same name and event_id |
 | Meta | Recognizes one purchase |

Use the same identifier and verify actual deduplication in the platform.

## Main points

- **Understand both senders**: Pixel sends browser events; CAPI sends server events. Neither is an SEO meta or Open Graph tag.
- **Connect shopping actions**: The core path includes ViewContent, AddToCart, InitiateCheckout and Purchase. Keep value, currency and product IDs consistent.
- **Match event identity**: For the same event, match event_name and use the browser eventID as the server event_id. Reuse a stable ID for that action.
- **Check custom storefronts**: Shopify’s official Meta channel covers some events. Verify custom headless storefront coverage separately.
- **Respect consent**: CAPI still requires appropriate consent. Sharing levels, customer data and purposes must follow approved rules.

### Glossary

- **Pixel**: Browser code that records and sends events.
- **CAPI**: Conversions API for sending server events.
- **Deduplication**: Recognizing multiple reports of one action.

## An example

- Situation: Pixel and CAPI report one purchase without a shared identifier.
- Takeaway: Match the reports to prevent counting it twice.

## Start here

Inventory Pixel, CAPI and official integrations; identify each sender.

## Before you start

- Existing business/ad accounts, Pixel/dataset, catalog and access
- Event ownership, product ID mappings, consent rules and test orders

## Steps

1. Inspect official channels, GTM, code and server senders. Assign clear event ownership.
2. Configure supported APIs/native integrations within authorization. Match content_ids to the catalog.
3. Use Test Events and diagnostics for purchases, rejected consent, reloads and retries. Inspect browser/server pairing.
4. Deliver de-identified payloads, timestamps, matched IDs and order-value reconciliation; list uncovered paths.

## Completion checks

- One test purchase becomes one valid conversion, with evidence of browser/server pairing.
- Rejected sharing follows approved rules; events reveal no extra customer data.

## Common pitfalls

- Duplicating sends from the official app and manual Pixel.
- Generating a new event_id on each retry or relying only on Pixel Helper.

## Decisions to make

Agree on data sharing and channel use. Tracking setup and ad activation are separate decisions.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Shopify: Meta data sharing](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing) (2026-10-21): Pixel/CAPI, sharing levels, standard events and data use. Custom storefront coverage needs separate tests.
- [Meta: deduplicate Pixel and CAPI events](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events) (2026-10-21): Matching event names and eventID/event_id for deduplication. No customer account was verified.
- [Shopify: customer privacy settings](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings) (2026-10-21): Privacy settings, consent, opt-outs and data purposes. Does not provide a legal determination.

## Related knowledge

- measurement
- ga4-commerce
- headless-commerce
- paid-media
