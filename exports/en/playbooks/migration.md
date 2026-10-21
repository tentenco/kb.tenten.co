# Magento to Shopify migration

Preserve products, transactions, search and measurement through a tested cutover.

## What it is

Migration moves products, content, customer relationships and search entry points to a new system while preserving the jobs users need to do.

When to use it: Use this for Magento-to-Shopify or platform/URL-structure changes.

## Why it matters

- URLs, search traffic and transaction records are assets; omissions interrupt revenue and operations.
- Rehearsal and incremental sync expose risks while recovery remains manageable.

## Preserve an old search entry point

 | Concept | Description |
 | --- | --- |
 | Old product URL | Search result or existing link |
 | 301 redirect | At the receiving routing layer |
 | New product page | Relevant content that opens correctly |

Use a relevant replacement. Without one, return 404/410 as appropriate instead of redirecting everything home.

## Main points

- **Inventory the assets**: Inventory URLs, traffic pages, products/variants, customers, orders, media, discounts and integrations.
- **Preserve useful entry points**: Permanently redirect each old URL to its closest relevant page; return 404/410 when no replacement exists. For headless, test at the actual receiving route.
- **Verify accounts and history**: Do not assume passwords or logins transfer. Verify historical orders, gift cards and notification side effects separately.

## An example

- Situation: An old search result points to a product page missing from the new store.
- Takeaway: Map and redirect the old URL to the relevant replacement.

## Start here

Inventory the data and old URLs with the most traffic or revenue value.

## Before you start

- Old and target URLs, exports, traffic and URL inventory
- Included/excluded data, SKU/ID maps and system write ownership
- Cutover window, incremental data, decision owner and recovery conditions

## Steps

1. Create data mappings, URL/redirect lists, functional gaps and integration inventory.
2. Dry-run in a test environment. Reconcile SKUs, currencies, counts, relationships and media; isolate notification and tracking side effects.
3. Plan freezes/incremental sync, DNS, GSC, event deduplication and cutover.
4. Execute within authorization. Record last sync, cutover checks and recovery boundaries; monitor afterward.

## Completion checks

- High-value old URLs reach relevant indexable pages in one hop, without loops or chains.
- Product/order samples, shopping paths, analytics/ad events and consent have test evidence.
- Recovery after new orders includes reconciliation, not just a DNS reversal.

## Common pitfalls

- Changing positioning, URLs and platform together without a baseline.
- Moving products while forgetting GSC, tracking, support or account activation.

## Decisions to make

Agree on data scope, acceptable downtime and recovery triggers.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- Erik’s knowledge-base and XTERRA requirements (2026-10-21): Short AI-native guidance, Tenten services, XTERRA US Magento-to-Shopify migration, launch standards and Shopify/Klaviyo knowledge for Sherry. Erik’s full private notes were not supplied.
- [Google Search Central: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) (2026-10-21): URL inventories, permanent redirects, canonicals, cutover, GSC and keeping redirects for at least a year.
- [Shopify: migration guide](https://help.shopify.com/en/manual/migrating-to-shopify) (2026-10-21): Migration, import order, product checks, shipping, tax, payments and test orders. Verify current API and plan capabilities.
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify) (2026-10-21): Shopify delivery across products, markets, integrations and measurement. Does not verify a particular store.
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.
- [Shopify: URL redirect limits](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) (2026-10-21): Native redirect routes and limitations. Custom storefronts need checks at the receiving routing layer.

## Related knowledge

- headless-commerce
- ecommerce-launch
- technical-seo
- measurement
