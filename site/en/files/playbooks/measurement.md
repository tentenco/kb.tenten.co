# Launch measurement: GA4, GSC, Google Ads and Meta

Decide what to measure, then connect traffic, behavior and transaction data.

## What it is

Measurement turns website behavior into evidence. GA4, GSC and ad platforms answer different questions.

When to use it: Use this at launch, before campaigns or to investigate traffic and conversion.

## Why it matters

- Reliable measurement shows whether traffic and campaigns produce results.
- Duplicate purchases, wrong currencies and consent errors distort bidding and decisions.

## Which tool answers the question?

 | Concept | Description |
 | --- | --- |
 | GSC | Are people finding and clicking search results? |
 | GA4 | What happens after arrival? |
 | Google Ads | What do Google campaigns produce? |
 | Meta | What do Facebook and Instagram campaigns produce? |

Choose events from the questions you need answered. Attribution differs across platforms.

## Main points

- **Know each tool’s purpose**: GA4 covers behavior, GSC covers Google search and indexing, and Ads/Meta cover campaigns and conversions. Attribution differs.
- **Distinguish tags and tracking**: SEO titles/descriptions, Open Graph tags and Meta Pixel serve different purposes. GTM is an optional deployment tool.
- **Use consistent event definitions**: Define ecommerce triggers, transaction_id, items, value and currency. Do not send personal data indiscriminately to analytics.

### Glossary

- **GA4**: Google Analytics 4 measures onsite behavior and conversions.
- **GSC**: Google Search Console covers search impressions, clicks and indexing.
- **GTM**: Google Tag Manager manages tracking tags.

## An example

- Situation: GSC shows more search clicks while GA4 shows visitors leaving product pages.
- Takeaway: One describes discovery; the other helps locate problems after arrival.

## Start here

List three business questions before choosing events.

## Before you start

- Existing analytics, search, tag-manager and ad-account IDs with authorized connections
- Events, purchase definition, data sources, test orders and market privacy requirements

## Steps

1. Inventory native apps, theme code, GTM and server implementations; assign event ownership.
2. Include GA4, GSC, Ads and Meta in the baseline review. Connect planned channels and document why others do not apply.
3. Test consent acceptance/rejection, purchase, refund and reloads. Match Meta event_name and event_id across Pixel/CAPI.
4. Compare DebugView/platform test events to orders. Keep payload, timing and deduplication evidence; explain attribution differences.

## Completion checks

- One test order creates one valid purchase with matching value and currency.
- Consent behavior follows approved rules; reports expose no personal data.

## Common pitfalls

- Checking only that a tag loads.
- Creating a new property and breaking historical continuity.

## Decisions to make

Agree on outcome events, data collection and consent rules.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- Erik’s knowledge-base and XTERRA requirements (2026-10-21): Short AI-native guidance, Tenten services, XTERRA US Magento-to-Shopify migration, launch standards and Shopify/Klaviyo knowledge for Sherry. Erik’s full private notes were not supplied.
- [Google Analytics: ecommerce events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce) (2026-10-21): Ecommerce events, items, currency, transaction_id, purchases and refunds. Check current Meta/Ads documents when implementing those platforms.
- [Shopify: customer privacy settings](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings) (2026-10-21): Privacy settings, consent, opt-outs and data purposes. Does not provide a legal determination.
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify) (2026-10-21): Shopify delivery across products, markets, integrations and measurement. Does not verify a particular store.
- [Meta: deduplicate Pixel and CAPI events](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events) (2026-10-21): Matching event names and eventID/event_id for deduplication. No customer account was verified.
- [Shopify: Meta data sharing](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing) (2026-10-21): Pixel/CAPI, sharing levels, standard events and data use. Custom storefront coverage needs separate tests.

## Related knowledge

- ga4-commerce
- meta-tracking
- google-commerce
- ecommerce-launch
