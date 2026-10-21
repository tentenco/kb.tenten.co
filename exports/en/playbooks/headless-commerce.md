# Headless commerce: integration boundaries

Verify the custom storefront, Shopify checkout and external tools separately.

## What it is

Headless commerce separates the storefront from transactions. The frontend handles browsing; Shopify handles products, cart and checkout.

When to use it: Use this for a custom frontend such as Astro or an app that does not appear after installation.

## Why it matters

- A flexible storefront may need its own app, tracking and consent integrations.
- Clear data and route ownership prevents configuration in the wrong system.

## XTERRA system responsibilities

 | Concept | Description |
 | --- | --- |
 | Astro | Browsing, shopping and interactions |
 | Sanity | Marketing copy and images |
 | Shopify | Products, cart, checkout and orders |

Based on the repository snapshot. Check which parts each app, event and form covers.

## Main points

- **Understand XTERRA’s architecture**: The XTERRA snapshot uses Astro for the storefront, Sanity for marketing content, and Shopify for products, cart and hosted checkout.
- **Test each stage**: Verify checkout/order integrations, custom browsing/form events and email flows separately.
- **Redirect at the receiving route**: Implement SEO and redirects at the domain and routing layer receiving old URLs. Shopify redirect imports alone may not affect Astro.
- **Connect consent across systems**: Custom consent choices may not reach Shopify, analytics or marketing. Test cross-domain behavior, withdrawal and rejection.
- **Check actual account permissions**: Shopify Dev MCP provides documentation and validation; it does not grant store read/write access. Check each account and API scope.

### Glossary

- **Storefront**: The site customers browse and use.
- **Hosted checkout**: Checkout provided and managed by Shopify.
- **API / scope**: An API exposes operations; scopes limit what a connection can access.

## An example

- Situation: Shopify tracking is configured, but custom product pages send no view or cart events.
- Takeaway: Check storefront, checkout and external tools separately.

## Start here

Map the storefront, CMS, Shopify and external-tool responsibilities.

## Before you start

- Repository/commit, storefront/checkout domains and deployment environments
- Data sources, event and integration owners, app support and secure connections

## Steps

1. Map data, events, domains and owners. Check each app’s headless APIs, webhooks and limits.
2. Test product updates, cart/discounts, checkout return, order events, form-to-CRM and retries separately.
3. Test old URLs at the real routing layer. Verify production canonicals, indexing controls and feed URLs.
4. Resolve the XTERRA README/Klaviyo-document discrepancy using code and account evidence before changing anything. Do not reinstall integrations or activate drafts by assumption.

## Completion checks

- Data and events are traceable without duplicates; unknown hosted settings are explicit gaps.
- Handoff covers domains, ownership and failures. A successful Git push does not prove customer availability.

## Common pitfalls

- Applying theme instructions to a custom frontend.
- Treating repository descriptions as proof of live flows or orders.

## Decisions to make

Agree on system responsibilities and cutover scope to avoid duplicate implementations.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.
- [Shopify: Web Pixels API](https://shopify.dev/docs/api/web-pixels-api) (2026-10-21): App/custom pixel sandboxes, customer events and privacy APIs. Does not guarantee automatic coverage of Astro storefronts.
- [Shopify: search, filters and headless](https://help.shopify.com/en/manual/online-store/storefront-search) (2026-10-21): Search & Discovery for search, filters and recommendations, including custom storefronts using the Storefront API.
- [Shopify: URL redirect limits](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) (2026-10-21): Native redirect routes and limitations. Custom storefronts need checks at the receiving routing layer.

## Related knowledge

- ecommerce-launch
- migration
- measurement
- klaviyo
