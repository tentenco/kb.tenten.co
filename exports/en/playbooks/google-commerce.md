# Google Ads and product feeds

Connect conversions, product data and landing pages before spending.

## What it is

Google Ads runs campaigns; Merchant Center supplies product data. Accurate products and purchase reports provide the foundation.

When to use it: Use this for Shopping setup, disapproved products or duplicate conversions.

## Why it matters

- Missing conversions weaken bidding signals; incorrect feeds can cause disapproval or price mismatches.
- Separate integration acceptance from campaign activation so spending has measurable outcomes.

## Main points

- **Assign each platform a job**: Ads handles campaigns and conversions; Merchant Center handles products and eligibility; GA4 analyzes behavior; GSC covers search indexing.
- **Avoid duplicate bidding signals**: Avoid using both native Ads and imported GA4 purchases as primary bidding conversions for the same purchase. Check how observation actions enter campaign goals.
- **Match the feed to the site**: Keep stable IDs, applicable brand/GTIN identifiers, price, currency, stock, images, live URLs and shipping/return policies consistent.
- **Use first-party data appropriately**: Enhanced conversions use approved first-party data for matching. Hashing does not remove consent or data responsibilities.
- **Test official integrations**: Consider Shopify’s official Google & YouTube integration first. Test headless checkout, domains and product links end to end.

### Glossary

- **Feed**: A structured product catalog supplied to a platform.
- **GTIN**: A global trade item number, supplied when applicable.
- **Primary conversion**: An outcome used for bidding, such as a purchase.

## An example

- Situation: The feed says “in stock” while the landing page says “sold out.”
- Takeaway: Keep catalog, page and checkout information consistent.

## Start here

Identify the existing Ads, Merchant Center and GA4 accounts and connections.

## Before you start

- Existing Ads, Merchant Center and GA4 accounts; target markets
- Product identifiers, shipping/return policies, conversion definitions and authorization

## Steps

1. Inspect links and conversion actions. Define one primary purchase source with value, currency and transaction_id.
2. Sync products through supported integrations/APIs and inspect diagnostics. Do not invent GTINs or submit development URLs.
3. Test order reconciliation, reload deduplication, cross-domain attribution and consent. Verify current enhanced-conversion support.
4. Deliver eligibility and disapproval findings with fixes. Activate budgets, assets and campaigns only within advertising authorization.

## Completion checks

- Sample prices, stock and URLs match landing pages; disapprovals have a reason and action.
- One purchase creates the intended bidding signal. Integration completion does not establish campaign results.

## Common pitfalls

- Counting one order in multiple primary conversion actions.
- Pointing feeds to a Shopify theme when customers should use the custom storefront.

## Decisions to make

Agree on ad goals, conversion values and budget before authorized activation.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Google Merchant Center: product data specification](https://support.google.com/merchants/answer/7052112?hl=en) (2026-10-21): Product identity, price, currency, stock, links and consistency. Does not guarantee approval.
- [Google Ads: enhanced conversions](https://support.google.com/google-ads/answer/9888656?hl=en) (2026-10-21): First-party matching, hashing and enhanced conversions. Data-use and consent obligations still apply.
- [Shopify: Google & YouTube channel](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/google) (2026-10-21): Official channel setup and product-sync documentation. Does not verify a store’s eligibility or conversions.
- [Google Analytics: ecommerce events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce) (2026-10-21): Ecommerce events, items, currency, transaction_id, purchases and refunds. Check current Meta/Ads documents when implementing those platforms.

## Related knowledge

- ga4-commerce
- paid-media
- headless-commerce
- ecommerce-launch
