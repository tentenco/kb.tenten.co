# Shopify setup: connect the operations

Define products, orders and market rules before themes and apps.

## What it is

Shopify manages commerce operations: products, orders, payments and inventory. Setup must establish how each transaction is handled.

When to use it: Use this for new stores, store handoffs, new markets or logistics integrations.

## Why it matters

- A finished storefront still needs correct payments, fulfillment and refunds.
- Consistent data definitions reduce inventory, pricing and order errors.

## Main points

- **Assign product and stock ownership**: SKUs/variants identify sellable units. Assign sources of truth for products, inventory and orders; prevent conflicting ERP/3PL writes.
- **Define market rules**: Markets determine language, currency, pricing, availability, tax, payment and shipping. The merchant’s specialists confirm tax and legal rules.
- **Check native features first**: Use native features first. Verify checkout, API and Markets capabilities for the current plan before adding apps.

### Glossary

- **SKU**: An internal code for a sellable item.
- **Variant**: A specific product option combination, such as size and color.

## An example

- Situation: A customer pays successfully, but shipping cost and inventory are wrong.
- Takeaway: Test product, pricing, payment, logistics and inventory rules together.

## Start here

Trace a representative product from listing through shipping and refund.

## Before you start

- Product samples, SKU/inventory sources, historical orders and customer needs
- Markets, payment/shipping, returns, tax and operating owners

## Steps

1. Define product fields and a market matrix with field-level sources of truth.
2. Propose the theme, apps and integrations with costs, permissions and removal options.
3. Test payment success/failure, shipping/tax, discounts, stockouts, partial refunds/returns, restocking and notifications. Include excluded delivery addresses for bulky goods.

## Completion checks

- Sample orders match approved amounts, currencies, shipping and tax rules.
- Inventory, orders and events agree; test data does not enter reported production revenue.

## Common pitfalls

- Treating successful tax configuration as legal compliance.
- Adding overlapping apps without data ownership.

## Decisions to make

The merchant approves markets, policies, taxes and costs; tests must match those rules.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify) (2026-10-21): Shopify delivery across products, markets, integrations and measurement. Does not verify a particular store.
- [Shopify: migration guide](https://help.shopify.com/en/manual/migrating-to-shopify) (2026-10-21): Migration, import order, product checks, shipping, tax, payments and test orders. Verify current API and plan capabilities.

## Related knowledge

- ecommerce-launch
- migration
- commerce-service
- commerce-merchandising
