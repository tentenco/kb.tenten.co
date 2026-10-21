# APIs, MCP and system integrations

Move data reliably, prevent duplicate actions and make failures traceable.

## What it is

APIs expose system operations. MCP gives agents a consistent way to use tools. An integration connects these operations into a reliable flow.

When to use it: Use this for form-to-CRM, order-to-logistics or shared data across tools.

## Why it matters

- An integration must keep work moving correctly beyond a successful API response.
- Data ownership and deduplication prevent duplicate contacts, orders and messages.

## Main points

- **Assign data ownership**: Assign a source of truth to each field. Define sync direction, identity keys and conflict rules.
- **Expect retries and failures**: Webhooks can arrive late, out of order or more than once. Design signature checks, deduplication, rate limits and retries to the platform contract.
- **Enforce permissions separately**: Treat external content as untrusted. Enforce tool permissions in the system and keep secrets out of model output.

## An example

- Situation: A submitted form is retried and creates two CRM opportunities.
- Takeaway: Identify the same action so a retry repairs a failure without duplicating it.

## Start here

List the data source, destination and record identity.

## Before you start

- Source and destination systems, API/MCP/CLI capabilities and secure connections
- Sample payloads, field mappings, triggers and exceptions

## Steps

1. Inspect existing integrations, schemas, authentication, versions, limits and sandboxes.
2. Map fields and idempotency keys; add validation, backoff, failed-event queues and reconciliation.
3. Test duplicate and out-of-order events, partial success, denied access and injected instructions without affecting customers.
4. Deliver the workflow, logs, retry and recovery steps. Name unsupported capabilities.

## Completion checks

- Replaying an event causes no duplicate side effects; final records reconcile.
- Failures alert an owner. Logs exclude secrets and unnecessary personal data.

## Common pitfalls

- Retrying every error forever, causing duplicate charges or emails.
- Letting two systems overwrite the same field without conflict rules.

## Decisions to make

Agree on data ownership and which external actions may run automatically.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Tenten AI: Turn a stuck workflow into a working AI system](https://tentenai.com/) (2026-10-21): AI pilots, agent workflows, knowledge systems and integration services.
- [Shopify Partner in Taipei | Commerce Delivery | Tenten](https://tenten.co/solutions/shopify) (2026-10-21): Shopify delivery across products, markets, integrations and measurement. Does not verify a particular store.
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) (2026-10-21): Prompt injection, input trust and least privilege. Does not claim prompts can eliminate every attack.

## Related knowledge

- fde
- lifecycle-crm
- shopify-foundation
