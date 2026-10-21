# Tenten Knowledge Base execution plan

- Scope: build a compact Traditional Chinese knowledge base for humans and Agents in this folder. Local implementation and verification are authorized. The latest user addition also authorizes pushing the completed project to https://github.com/tentenco/kb.tenten.co. Hosted deployment and client-account changes remain outside scope.
- Reference: reuse Neteon Learning's canonical-content → portable static-site → searchable/Agent-export architecture. Its customer-specific content, authentication and project rules do not transfer.
- Ownership: one sequential agent; no concurrent article production.
- Completion: useful coverage of all requested service domains, searchable scenario-first UI, copy/download task packets with actual knowledge, readable Markdown, reproducible build and content/link/runtime verification.

## Steps and checks

1. Inspect reference architecture and research Tenten public service pages. Check: record actual URLs, observation dates, excerpts and limits in research/ and sources.
2. Author 24 concise playbooks, 8 categories, scenario packs and onboarding paths. Check: required why/impact, knowledge, Agent work, evidence, inputs and sources; no invented customer facts.
3. Build dependency-free static site and Markdown exports. Check: build succeeds; generated links and exports resolve; no secrets or copied Neteon content.
4. Run AgentHarness discover → verify → select → implement → validate cycles. Check: deterministic gate receipt plus separate qualitative review; fix verified defects.
5. Exercise search, categories, task packet copy/download, project context, deep links, refresh, mobile, no-JS and print. Check: runtime evidence and final handoff.

## Decisions

- Initially 24 canonical playbooks, expanded to 32 by the explicit ecommerce follow-up; classifications are navigation metadata, not extra articles.
- API/CLI/MCP first. UI steps are not the operating instructions. Lack of supported access becomes a named blocker rather than an invented automation result.
- Website content establishes service context; general practices are proposed operating guidance, not a transcription of Erik's unwritten 20 years of experience.
- No duration provided and no existing harness/default in the new empty workspace: use completion-based, bounded cycles through the acceptance criteria.
- No separate AgentHarness executable found. Implement a local reproducible verification harness and carry out the improvement loop in this session.

## Resume handle

Completed: research, authoring, static build, improvement waves, browser verification and extracted-package rebuild. Queue: empty. Local preview remains running at http://localhost:8768/index.html. No commit, push, deploy or external account mutation.

## Initial milestone evidence

- 24 playbooks, 8 categories, 8 scenarios, 6 reading paths, 46 static HTML pages.
- Build: PASS. Deterministic AgentHarness gate: 131/131 PASS. JavaScript syntax: exit 0.
- Browser: 32/32 actual runtime checks PASS, including 390px matrix across all 46 routes, 1440 CSS-pixel article, question search, filters, history, packets, native clipboard/fallback, actual download, no-JS, print and file URL use. Browser zoom and automation setup corrections are preserved in evidence/browser-v1.json.
- Portable ZIP: extracted to a temporary folder; build, 131 gates and JavaScript syntax all passed without the original project folder.
- Qualitative review: docs/review.md; single-agent self-review, not independent certification. No customer system operation was claimed.
- Future inputs: actual founder lessons and project decisions; internal maintainers; hosted access-control design only if deployment is requested.

## Completed expansion: XTERRA ecommerce and Shopify ecosystem

- User-authorized follow-up: inspect tentenco/xterra-website read-only and prepare more concise local knowledge for Sally, Sherry and Agents. No changes to that repo or live accounts.
- Queue: empty. Sequential execution.
- Research: repository snapshot and selected implementation/docs; current official platform sources.
- Implement: compact additional ecommerce standards, tracking, lifecycle and ecosystem cards; scenario packets and reading paths; keep existing categories and avoid overlapping essays.
- Verify: rebuild, harness, affected browser search/packets and responsive pages, then package and hand off.

## Expansion handoff (historical)

- Complete: read-only XTERRA source review; 8 new cards and 5 existing-card updates; 3 new scenario packets and 1 reading path; dynamic counts and project-source visibility.
- Current totals: 32 cards, 8 categories, 11 scenarios, 7 paths, 57 pages.
- Build PASS; harness 164/164 PASS; extracted ZIP build/harness/JS syntax PASS with matching source/output fingerprints.
- Browser expansion receipt 13/13 PASS, including all 57 routes at 390 CSS pixels and actual downloaded packet equality. The subsequent interaction round stopped when the browser reported user control; no takeover, retry or substitute browser was used. Native clipboard/no-JS/file URL reruns are not claimed. Prior unchanged interaction coverage is preserved in browser-v1.json.
- Queue remains empty. No reference-repo edit, commit, push, deployment, customer-account setup, campaign activation or message delivery.
- Preview: http://localhost:8768/scenarios/ecommerce-launch.html; Sherry: http://localhost:8768/paths.html#commerce-operator.

## Human-first reading and official logo

- User asks to clarify document logic, hierarchy and navigation, add explanatory UI/diagrams, and use the official Tenten website logo.
- Keep the existing static architecture. Add plain-language concepts, examples and next steps to the canonical 32 cards, clarify category order and scenario stages, and move handoff mechanics after reading.
- Sequential execution, queue empty. Verify navigation, article comprehension structure, diagrams, responsive layouts, collapsed handoff and exports; package the result.

## Current redesign handoff

- Implemented: 32 human-first articles, 4 navigation groups over 8 categories, 11 staged work guides, 10 responsive concept diagrams, official Tenten logo/favicon, active contents and progressive disclosure.
- Verified: build PASS, 164/164 harness checks, JS syntax PASS, 27/27 actual browser checks with all 57 routes at 390px. Historical receipts preserved separately.
- Complete: ZIP extracted independently; build, 164/164 harness gates and JS syntax passed with matching source/output fingerprints. Browser task finished once, keeping only the final home page for review.
- Queue empty. No client-system changes, external publication or reference-repository edits.

## Completed: Cohere visual system and product experience

- User supplied DESIGN-cohere.md for color/type and COO-UI-BASELINE.md for product quality and maintenance. Apply locally; preserve the human-first content hierarchy.
- Build a shared token system, quiet 150–200 ms interaction states, light/dark/system appearance, keyboard-friendly quick search, session-scoped draft/reading restoration with clear/undo, and smaller page data loads.
- Preserve static HTML/file URL/no-JS reading. No framework migration, client-account changes, reference repo code copying or subagents. GitHub push is now explicitly authorized as an addition to this task.
- Check deterministic gates, real-content flows, search/IME, state retention, theme/contrast, reduced motion, mobile/tablet/desktop and measured local performance. Package after verification.
- Queue empty.

## Current resume handle

- Completed task: Cohere UI/UX, OS-default light/dark themes and GitHub push. Queue empty.
- Implemented and locally checked: shared tokens/type, theme selection/persistence, keyboard quick search, session draft and reading restoration, clear/undo, smaller search payload and page-local packet data.
- Runtime fixes: preserve the original restore snapshot until load completes; give the mobile search icon an explicit accessible name.
- Local verification complete: build PASS, 170/170 harness gates, both JavaScript syntax checks, 30/30 browser checks and all 57 mobile routes. Independent extracted rebuild passed with matching source/site fingerprints.
- GitHub: implementation commit 41750e816814dc6d79d072ac30a7a17ffd830fb7 pushed to tentenco/kb.tenten.co main and verified against remote refs. Repository is public; no hosted site deployment or client-account change ran.
- Browser task 70 finished once with only the final homepage kept. Historical sections above describe their own completed milestones. No remaining implementation work.

## Completed: Vercel deployment repair

- User requests inspection and repair of the existing tentenco/kb.tenten.co Vercel deployment using Ego Lite Browser. This authorizes the scoped configuration fix, GitHub push and production redeployment; prior no-deployment limits describe earlier tasks. Queue empty.
- Evidence: deployment 5BVvunDdBSjvGbY8tqcpM93DZ3QB is Ready at 0ece995, but production root returns 404. Framework Other, blank root/build/output settings; deploy log contains no Python build. Actual generated website lives in site/.
- Fix: version-controlled Vercel build command and output directory; include configuration in portable package. Keep existing domain and protection settings.
- Verify: build/harness, fresh Vercel deployment, homepage and nested reading/search/theme/download routes.

- Result: production deployment CtLv6kFN4WMD6BSzmsoJDUJzfvpP is Ready at fix commit 05b9fcb; actual cloud build and 170 checks passed. Root and all 57 pages work, search/themes/download pass, and repository-source paths return 404. Custom domain https://kb.tenten.co/ verified after user reported it online. Evidence: evidence/vercel-deployment.json.
- Queue: one authorized follow-up, send platform introduction email to the six colleagues explicitly supplied by the user. Process after deployment handoff; recipient details and message records stay outside this public repository.

## FDE terminology correction

- Replaced the former AI FTE role concept with FDE / Forward Deployed Engineering, based on Tenten AI's methodology page observed 2026-10-21.
- Updated category, guide, reading path, source scope and exports. Old article/download URLs redirect to the FDE equivalents on Vercel.
- Build and 170 harness checks passed; browser confirmed article, FDE quick search and guide packet.
- Next queued task: full English locale with Humanizer prose review, followed by bilingual runtime verification and deployment.
