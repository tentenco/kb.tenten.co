# AI consulting: from use case to working system

Find work worth improving, then test whether AI is a good fit.

## What it is

AI consulting identifies work to improve, checks the data and tools, then uses a small pilot to test quality and benefit.

When to use it: Use this when the team wants AI but has no clear starting point or evidence of value.

## Why it matters

- A problem and baseline help avoid demos nobody uses.
- Representative samples reveal reliability, cost and the impact of errors.

## Main points

- **Choose work you can evaluate**: Start with frequent work that has accessible inputs, assessable outputs and a clear owner.
- **Match the method to the problem**: Use code for explicit rules, models for language judgment, and retrieval with citations when answers need sources.
- **Govern the sources**: RAG needs source ownership, updates, versions, access control and refusal behavior. Prompts cannot enforce data permissions.

### Glossary

- **Use case**: A specific situation and job to complete.
- **RAG**: Retrieve relevant sources before asking a model to answer.

## An example

- Situation: Support staff answer recurring questions from scattered, undated sources.
- Takeaway: Organize sources and acceptance criteria before testing the answers.

## Start here

Choose a frequent task and collect samples plus a baseline.

## Before you start

- Current workflow, time or quality baseline, representative and failure samples
- Data scope, connections, budget and decision owner

## Steps

1. List use cases and propose a small pilot based on value, feasibility and risk.
2. Choose rules, search, RAG or an agent; document costs, data boundaries and alternatives.
3. Set an evaluation set, acceptance thresholds and exception paths. Measure quality, latency and cost per task.

## Completion checks

- Test on held-out samples; record successes, errors and refusals.
- Trace answers to sources and retain evidence of permission checks and human handoff.

## Common pitfalls

- Treating a demo as production acceptance.
- Promising to replace a job without measuring its scope.

## Decisions to make

Agree on usable data, acceptable errors and what to expand if the pilot succeeds.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Tenten AI: Turn a stuck workflow into a working AI system](https://tentenai.com/) (2026-10-21): AI pilots, agent workflows, knowledge systems and integration services.
- [Digital Transformation Consulting | Audit to Build | Tenten](https://tenten.co/services/transformation-consulting) (2026-10-21): Digital consulting, current-state review, decision records and acceptance.
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) (2026-10-21): Prompt injection, input trust and least privilege. Does not claim prompts can eliminate every attack.

## Related knowledge

- fde
- automation-integration
- project-brief
