# Product discovery, reviews and apps

Help customers find, understand and trust a product before choosing tools.

## What it is

Search, filters, comparisons, recommendations and reviews answer different questions during product selection.

When to use it: Use this when products are hard to compare or customers need more confidence to buy.

## Why it matters

- Filters, comparisons and credible reviews reduce buying effort, especially for complex or expensive products.
- Every app adds cost, scripts and data responsibilities. Check native features first.

## Main points

- **Make products findable**: Search & Discovery manages search, filters and recommendations. A headless storefront needs the corresponding Storefront API implementation.
- **Use credible reviews**: Review tools such as Judge.me collect, moderate and display reviews. XTERRA has an integration; that does not make it mandatory for every store.
- **Help customers compare**: Use verified specifications for comparisons and quizzes. Never invent compatibility or benefits.
- **Match tools to products**: Assess bundles, upsells and subscriptions against margin, stock and demand. Durable goods may not suit recurring subscriptions.
- **Include maintenance costs**: Record the purpose, native alternative, headless support, cost, permissions, export and removal options for each app.

## An example

- Situation: A shopper wants foldable equipment, but the only filter is brand.
- Takeaway: Build filters around real buying criteria.

## Start here

List three common buying questions and the functions that answer them.

## Before you start

- Product specifications, categories, search terms, zero-result queries, support questions and funnel data
- Installed apps, storefront architecture, budget and rights to review data

## Steps

1. Separate essentials from options. Fix product fields, prices and out-of-stock rules first.
2. Test filters, synonyms, comparisons and recommendations against product, accessory and variant relationships.
3. Preserve review provenance and status during migration; verify counts, averages and privacy. Do not manufacture reviews.
4. Test representative and empty searches, stockouts, mobile and keyboard use. Check APIs, webhooks and performance.

## Completion checks

- Customers can find purchasable products; recommended prices and stock match the cart.
- Reviews are traceable and deduplicated. App choices have reasons.

## Common pitfalls

- Expecting a theme widget to appear on an Astro frontend.
- Hard-coding review averages or recommendations that later become stale.

## Decisions to make

Agree on the buying journey, app costs and whether the improvement justifies maintenance.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Shopify: search, filters and headless](https://help.shopify.com/en/manual/online-store/storefront-search) (2026-10-21): Search & Discovery for search, filters and recommendations, including custom storefronts using the Storefront API.
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify) (2026-10-21): Shopify delivery across products, markets, integrations and measurement. Does not verify a particular store.

## Related knowledge

- ecommerce-growth
- shopify-foundation
- headless-commerce
- commerce-service
