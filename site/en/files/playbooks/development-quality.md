# Development delivery and quality

Deliver working software that others can test and maintain.

## What it is

Development is complete when users can finish their main tasks, understand failures and get help, and another maintainer can take over.

When to use it: Use this for website acceptance, code handoff or recurring defects.

## Why it matters

- Early workflow and integration checks reduce failures after launch.
- Reproducible builds and handoffs let someone besides the original developer maintain the product.

## Main points

- **Check the whole journey**: Acceptance covers main paths, errors, permissions, compatibility, SEO and performance.
- **Measure actual performance**: Use real-user data for Core Web Vitals. Lab scores help diagnose issues but do not establish field performance.
- **Separate test and production**: Separate development, staging and production. Keep secrets out of frontend code, repositories and test records.

## An example

- Situation: The homepage works, but a failed payment produces no message.
- Takeaway: Test failure paths as well as normal screens.

## Start here

List the three most important tasks and how each can fail.

## Before you start

- Approved requirements, prototypes, content, supported devices and browsers
- Repository, API contracts, test environment and acceptance criteria

## Steps

1. Read project rules and inspect the current implementation. Make the smallest suitable change.
2. Run checks appropriate to the risk. Verify data, permissions and main user paths.
3. Check mobile, keyboard use, performance and indexing; fix related failures.
4. Deliver a buildable version, running instructions, test evidence and known limits.

## Completion checks

- A clean environment can build the project; main paths have observed results.
- Changes are reviewable and recoverable. List checks that were not run.

## Common pitfalls

- Treating a passing build as functional verification.
- Mocking every dependency and claiming the integration works.

## Decisions to make

Agree on acceptance and remaining risks. Fix issues that block main tasks.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Web Design & Development on Webflow & Shopify | Tenten](https://tenten.co/services/design-development) (2026-10-21): Design, development, platform choice and delivery context. Specific technical checks are suggested practices.
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals) (2026-10-21): Field and lab measurement and the scope of Core Web Vitals. Does not promise a performance score.
- [W3C: WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) (2026-10-21): WCAG 2.2 guidance on perception, operation, labels, focus and adaptability. Does not claim site certification.

## Related knowledge

- launch
- operations-security
- ux-conversion
