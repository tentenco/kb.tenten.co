# Hosting, DNS, CDN and environments

Know who runs each service and how domains, applications, data and email connect.

## What it is

A website depends on its domain, DNS, hosting, content and network services. Knowing the layers helps with selection and troubleshooting.

When to use it: Use this for hosting plans, domain changes or website/email connection problems.

## Why it matters

- Hosting choices affect availability, cost, maintenance and recovery.
- Understanding DNS dependencies prevents a website move from breaking email.

## From a URL to a page

 | Concept | Description |
 | --- | --- |
 | Domain and DNS | Locate the service |
 | CDN and host | Receive and process the request |
 | Application and content | Produce the page |

A simplified request path. Platforms may combine layers; email has separate DNS records.

## Main points

- **Check the hosting contract**: Managed Shopify/Webflow hosting and self-managed VPS/cloud infrastructure have different responsibilities. Use the actual contract.
- **Separate the layers**: Separate registration, DNS, CDN, TLS, application and database layers when diagnosing problems.
- **Plan environments and recovery**: Plan development, staging, production, data region, RTO/RPO, backups and monitoring. State assumptions in traffic and cost estimates.

### Glossary

- **DNS**: Records that direct a domain to web, mail and other services.
- **CDN**: Distributed servers that deliver content closer to users.
- **TLS**: Encryption for connections between browser and website.

## An example

- Situation: A website migration overwrites mail records and incoming email stops.
- Takeaway: Website and email records share a domain but need separate checks.

## Start here

Map who manages the domain, DNS, website, data and email.

## Before you start

- Architecture, traffic, data types and current DNS zone
- Account owners, budget, SLA, backup and recovery needs

## Steps

1. Map architecture, DNS and dependencies; assign platform, Tenten and client responsibilities.
2. Compare managed and self-managed options, costs and scaling. Inspect CDN, TLS and persistence.
3. Deliver environment configuration, backup/recovery, monitoring and access handoff.

## Completion checks

- Production DNS and TLS work; email MX/TXT records remain intact.
- Restarting or rebuilding preserves persistent data; isolated restore evidence exists.

## Common pitfalls

- Treating DNS TTL as a guarantee of an instant switch.
- Backing up code without the database and media.

## Decisions to make

Agree on budget, availability, data location and maintenance ownership for each layer.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Managed WordPress Hosting Controls and Ownership | Tenten](https://tenten.co/solutions/hosting) (2026-10-21): Hosting ownership, backups, recovery, monitoring and handoff. Does not establish a project SLA.
- [Headless CMS Development Agency | Jamstack, React | Tenten](https://tenten.co/solutions/headless-cms) (2026-10-21): CMS selection, modeling, migration and ownership, including headless systems.

## Related knowledge

- launch
- operations-security
- platform-choice
