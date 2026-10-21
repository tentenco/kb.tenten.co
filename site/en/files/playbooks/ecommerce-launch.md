# Ecommerce launch checklist

Verify transactions, search, measurement and operations before opening the store.

## What it is

An ecommerce launch spans correct transactions, discoverability, measurement, fulfillment and after-sales responsibility.

When to use it: Use this for a new store, migration cutover or a shared acceptance standard.

## Why it matters

- A working checkout can still lose revenue through broken tracking, delivery or notifications.
- A shared baseline saves each project from rebuilding its launch checklist.

## Four parts of an ecommerce launch

 | Concept | Description |
 | --- | --- |
 | Transactions | Products, payment, delivery and refunds |
 | Search | URLs, indexing and redirects |
 | Measurement | Shopping events and ad reporting |
 | Operations | Notifications, support and maintenance |

Each part needs a status and evidence for the launch decision.

## Main points

- **Complete transactions correctly**: Transactions: products, stock, successful and failed payments, refunds, discounts, shipping, tax, policies and order notifications.
- **Preserve search access**: Search: old URLs and redirects, canonical URLs, titles, descriptions, Open Graph, structured data, robots, sitemap and GSC.
- **Record reliable outcomes**: Measurement: GA4 funnel, Google Ads conversions, Meta Pixel/CAPI, feeds, consent and deduplication.
- **Assign operational ownership**: Operations: email lists and flows, support and warranty routes, DNS/TLS, performance, accessibility, alerts and recovery.
- **Give every item a status**: Mark each item complete, blocked or not applicable with a reason. Plan unused ad channels without spending automatically.

## An example

- Situation: The store accepts orders, but ads miss purchase events and support receives no inquiries.
- Takeaway: Check evidence for each part of the journey before deciding to launch.

## Start here

Create four checklist columns: transactions, search, measurement and operations.

## Before you start

- Production and test domains, version, store connections and authorization
- Markets, transaction rules, channel plans, test orders and launch decision owner

## Steps

1. Create a delivery matrix with applicability, owner, status, evidence, gaps and next steps.
2. Reuse integrations. Assign event responsibility across the custom storefront, Shopify checkout and server.
3. Test products and addresses with accepted and rejected consent, payment success and failure, refunds and retries. Reconcile orders and events.
4. Switch over within existing launch authorization. Check the domain, redirects, indexing, notifications and monitoring.

## Completion checks

- Each area has evidence; blockers have an explicit go/no-go decision.
- Each eligible real order maps to one purchase event. Isolate test data, notifications and ad audiences.

## Common pitfalls

- Equating installed apps or a polished storefront with readiness.
- Installing Klaviyo, GTM or paid apps without checking their purpose and existing systems.

## Decisions to make

Confirm markets, policies, ad channels and whether unfinished work blocks launch.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- Erik’s knowledge-base and XTERRA requirements (2026-10-21): Short AI-native guidance, Tenten services, XTERRA US Magento-to-Shopify migration, launch standards and Shopify/Klaviyo knowledge for Sherry. Erik’s full private notes were not supplied.
- [Shopify: migration guide](https://help.shopify.com/en/manual/migrating-to-shopify) (2026-10-21): Migration, import order, product checks, shipping, tax, payments and test orders. Verify current API and plan capabilities.
- [Google Analytics: ecommerce events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce) (2026-10-21): Ecommerce events, items, currency, transaction_id, purchases and refunds. Check current Meta/Ads documents when implementing those platforms.
- [Shopify: Meta data sharing](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing) (2026-10-21): Pixel/CAPI, sharing levels, standard events and data use. Custom storefront coverage needs separate tests.
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.

## Related knowledge

- shopify-foundation
- ga4-commerce
- headless-commerce
- launch
