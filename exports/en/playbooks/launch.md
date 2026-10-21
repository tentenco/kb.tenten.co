# Website launch: readiness and cutover

Check SEO, transactions, tracking, DNS and recovery before launch.

## What it is

Launch moves an accepted version into production and verifies continuity for users, search engines and operations.

When to use it: Use this for a new site, redesign cutover or launch decision.

## Why it matters

- A launch is a system change; one missing dependency can interrupt traffic, transactions or data.
- Clear go/no-go and recovery conditions help the team decide quickly.

## Main points

- **Check the whole system**: Cover functionality, content, SEO, measurement, privacy, DNS/TLS, performance, backups and ownership.
- **Keep search and measurement connected**: Inventory existing GA4/GSC first. Activate Ads/Meta for planned channels; check titles, descriptions and Open Graph separately.
- **Verify production again**: Production needs its own checks for indexing, forms, payments and tracking even if preview worked.

## An example

- Situation: A preview form works, but production lacks its receiving configuration.
- Takeaway: Recheck at the production URL after switching.

## Start here

Mark required items passed, failed or awaiting a decision.

## Before you start

- Approved version, domain, release window, decision owner and operations contacts
- Acceptance, redirects, events, DNS, backup and recovery plans

## Steps

1. Build the go/no-go checklist; verify staging paths, SEO, tracking and required policies.
2. Inspect production DNS/TLS/email, sync, environment variables and monitoring; prepare a recoverable version.
3. Cut over within existing authorization. Remove production noindex or password restrictions only where appropriate.
4. Check representative URLs, orders/forms, events and GSC. Deliver a dated, versioned release record and monitoring plan.

## Completion checks

- Production tasks work, old URLs map correctly and analytics events deduplicate.
- No unintended staging restrictions remain; ownership is handed over and failed items have decisions.

## Common pitfalls

- Removing protection from admin or preview content with the public site.
- Testing only the homepage.

## Decisions to make

Use acceptance results to decide whether to launch and who can pause or recover.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- Erik’s knowledge-base and XTERRA requirements (2026-10-21): Short AI-native guidance, Tenten services, XTERRA US Magento-to-Shopify migration, launch standards and Shopify/Klaviyo knowledge for Sherry. Erik’s full private notes were not supplied.
- [Google Search Central: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) (2026-10-21): URL inventories, permanent redirects, canonicals, cutover, GSC and keeping redirects for at least a year.
- [Managed WordPress Hosting Controls and Ownership | Tenten](https://tenten.co/solutions/hosting) (2026-10-21): Hosting ownership, backups, recovery, monitoring and handoff. Does not establish a project SLA.
- [Google Analytics: ecommerce events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce) (2026-10-21): Ecommerce events, items, currency, transaction_id, purchases and refunds. Check current Meta/Ads documents when implementing those platforms.

## Related knowledge

- technical-seo
- measurement
- operations-security
