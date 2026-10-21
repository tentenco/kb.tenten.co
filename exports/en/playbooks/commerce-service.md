# After the order: support, returns and warranties

Connect delivery and service to the rest of the customer journey.

## What it is

After-sales service connects orders, shipping, support, returns and warranties. Requests need a visible status and someone responsible for handling them.

When to use it: Use this for launches, support forms or recurring delivery and return problems.

## Why it matters

- Missing order, delivery or warranty information increases support work and refunds.
- A success screen does not prove a request reached its owner or the customer received a reply.

## Main points

- **Assign each system a role**: Shopify owns the order and fulfillment baseline. Define the roles of logistics, ERP/3PL, helpdesk and marketing systems separately.
- **Give each notification an owner**: Order, shipping, cancellation, refund and support notifications have different triggers. Avoid duplicate sends.
- **Check bulky-item exceptions**: For bulky equipment, confirm remote delivery, stairs, handling, assembly, damage reports and return costs with the merchant.
- **Separate service and marketing consent**: Warranty registration needs model, serial and purchase details. Service consent does not grant marketing consent.
- **Add tools for a clear need**: Start with native notifications. Add helpdesks or returns tools when volume or workflow warrants them; check headless APIs.

### Glossary

- **ERP**: A system for business data such as inventory and finance.
- **3PL**: A third-party logistics provider.

## An example

- Situation: A warranty form says “success,” but no service team receives it.
- Takeaway: Test the complete path from submission to receipt and ownership.

## Start here

Trace one request from submission to a recorded case and response.

## Before you start

- Approved delivery, returns and warranty policies; logistics and service owners
- Order, form, ticket and notification flows; internal test recipients

## Steps

1. Map order, shipping, exception and refund states to notification owners and unique record keys.
2. Test addresses, products, rates, excluded destinations, refunds and restocking. Reconcile finance and logistics separately.
3. Connect inquiry, registration and warranty forms to storage, routing, retries and alerts. Protect attachments and personal data.
4. Test normal requests, duplicates, provider failures and no marketing consent. Retain delivery, ticket and retry evidence.

## Completion checks

- Each test request has a receipt, status and owner; failures remain traceable.
- Order amounts, refunds and stock reconcile. Notifications do not duplicate or create unwanted subscriptions.

## Common pitfalls

- Treating HTTP 202 or a saved form as proof of email delivery.
- Assuming a CRM profile routes a support ticket or completes warranty service.

## Decisions to make

The merchant approves returns, warranty terms, costs and service commitments before implementation.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Shopify: migration guide](https://help.shopify.com/en/manual/migrating-to-shopify) (2026-10-21): Migration, import order, product checks, shipping, tax, payments and test orders. Verify current API and plan capabilities.
- [XTERRA code and integration snapshot](https://github.com/tentenco/xterra-website/tree/e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba) (2026-10-21): Astro/Sanity/Shopify boundaries, custom forms, Klaviyo adapter/Draft scripts, Judge.me and development launch restrictions. Does not establish live configuration, sending or production availability.
- [Klaviyo: Shopify subscription sync limits](https://help.klaviyo.com/hc/en-us/articles/115005080667) (2026-10-21): Profiles versus subscriptions, Shopify unsubscribes that do not automatically unsubscribe in Klaviyo, and resubscription/deletion sync limits.

## Related knowledge

- shopify-foundation
- klaviyo
- automation-integration
- operations-security
