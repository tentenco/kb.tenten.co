# Operations, security and recovery

Detect failures, prove backups can restore and assign incident decisions.

## What it is

Operations keeps services available. Incident preparation gives the team a way to detect, handle and recover from failures.

When to use it: Use this for hosting handoff, backups or recovery that currently depends on one person.

## Why it matters

- A backup needs a tested recovery process.
- Least privilege and separate environments limit the impact of mistakes and exposure.

## Main points

- **Set recovery targets**: RTO is the acceptable recovery time; RPO is the acceptable data-loss window. Set both from business needs.
- **Review access**: Use secure connections for accounts and secrets. Review and revoke staff, vendor and agent access.
- **Make monitoring actionable**: Monitor availability, critical tasks, errors and backups. Check update compatibility and retain a recovery path.

### Glossary

- **RTO**: The acceptable time to restore service.
- **RPO**: The acceptable data-loss window.

## An example

- Situation: Daily backups exist, but a failure reveals they cannot restore the data.
- Takeaway: Practice restoration before relying on a backup.

## Start here

Decide acceptable downtime and data loss, then inspect the backups.

## Before you start

- Systems, permissions, backup locations and recovery requirements
- Incident owners, contacts, change windows and contractual responsibilities

## Steps

1. Check least privilege, retention and update procedures; record fixable risks.
2. Restore in isolation and measure recovery time and missing data.
3. Set monitoring thresholds, recipients and escalation owners. Test actual alert delivery.
4. Stabilize service and preserve evidence during incidents. Record the timeline, impact, repair and follow-up.

## Completion checks

- Actual restore results exist; alerts reach the right on-call role.
- Incidents and changes have versions, owners and traceable records without exposed secrets.

## Common pitfalls

- Promising uncontracted 24/7 support or response SLAs.
- Deleting incident records or restoring old data without reconciliation.

## Decisions to make

Agree on incident authority, communication and acceptable downtime and data loss.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Managed WordPress Hosting Controls and Ownership | Tenten](https://tenten.co/solutions/hosting) (2026-10-21): Hosting ownership, backups, recovery, monitoring and handoff. Does not establish a project SLA.
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) (2026-10-21): Prompt injection, input trust and least privilege. Does not claim prompts can eliminate every attack.

## Related knowledge

- hosting-architecture
- launch
- fde
