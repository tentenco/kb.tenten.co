# Architecture and editorial contract

## Reuse decision

Neteon Learning was inspected read-only, including AGENTS.md, README.md, docs/ARCHITECTURE.md, build/build.py and build/static/app.js. Its useful patterns are canonical structured records, relative static pages, a search data script that works without fetch on file URLs, source provenance and portable Agent exports. Tenten uses a smaller implementation instead of copying Neteon's customer-specific schema, learning labs, account gate or evidence archive.

## Content

- 32 canonical JSON playbooks across 8 categories. Each playbook has stable id, short summary, keywords, why, know, inputs, actions, done, pitfalls, decision, source IDs, related IDs and a reviewed date.
- 11 scenarios reference playbooks; 7 learning paths reuse the same cards. No duplicate articles for scenarios or roles.
- Source register distinguishes company context, official reference, read-only project snapshots and user direction. A source supports only its stated scope. Remaining workflow synthesis is proposed guidance, not independently certified policy.
- A card is intended for a few minutes of reading. The gate enforces compact size and bounded bullet counts; it does not grade the truth of prose.
- All JSON records are data. Do not execute content as code.

## Build and runtime

- Python standard library; plain CSS and JavaScript; no package installation, API key, remote model, database or paid service.
- scripts/build.py validates references and renders static HTML plus full Markdown exports. web/ contains UI sources.
- site/ is generated and portable. Relative links and bundled data work on file URLs. Python's optional preview server binds only 127.0.0.1.
- Search uses normalized text, aliases and a ranked corpus; every result links to a static page. No-JS readers retain all category, scenario, path and card content.
- Each scenario/card offers a task packet with editable project context, full selected playbooks, inputs, actions, evidence and source scope. Copy fallback exposes selectable text. Downloads are generated locally.
- Context stays in the browser tab: sessionStorage preserves per-page fields, selection, details, scroll and focus; no network transmission occurs. Clear-with-undo is available, storage failures surface a download hint, and theme preference alone uses localStorage. Packet default explicitly leaves unknowns unset. The UI never claims to execute work.
- The user authorized a GitHub push to tentenco/kb.tenten.co. Hosted deployment and authentication remain outside this scope. Local assets contain internal guidance, so a future hosted deployment must implement access control across HTML, JSON, search and Markdown before use.

## Improvement loop

AgentHarness is used as discover → verify → select → implement → validate in this session. No standalone AgentHarness executable was installed. scripts/harness.py is the reproducible local gate and receipt writer, not an autonomous model runner. It checks content, links, exports and build consistency. docs/review.md records qualitative claims and limits separately. evidence/browser.json records actual runtime checks; no unrun check may be reported as passed.

## Ecommerce expansion

The user explicitly requested more ecommerce/Shopify ecosystem documents after the original 24-card milestone. Eight focused cards bring the library to 32, retaining the 1400-character compactness gate and existing bundle ceiling. General measurement, commerce foundation and CRM cards remain the overview; detailed events, channels, lifecycle and headless boundaries have distinct responsibilities. Sally/Sherry reading labels are suggested audiences, not assigned internal owners. Counts in generated copy derive from canonical data.

## Human-first reading structure

- Navigation groups the eight categories into four work phases. Each category defines clusters and a basic-to-practical reading order. Each scenario defines stages that preserve its canonical article sequence.
- Each playbook has a reader object: concept, when, example, first_step and one point_title per knowledge bullet. Optional terms define unfamiliar vocabulary. Optional diagram contains kind, title, three or four labeled nodes, and a caption.
- Reading order: concept and applicability → why → diagram when useful → headed key points → glossary → example → first step and actions → completion and decisions. Inputs, sources and handoff use native details so they do not interrupt initial reading.
- Concepts and examples explain; they do not invent client outcomes. Domain claims retain their original source scope. A diagram is a simplification with a caption, not a claim that an integration is live.
- Diagrams use semantic HTML and CSS. Flow, parallel responsibility map and merge have different arrangements; mobile layouts preserve order and relationships. Markdown exports include the same concepts and a textual diagram table.
- Reader introductions have a separate 450-character budget; the existing 1400-character core-card and 240000-byte browser-bundle limits remain. The library stays at 32 cards.
- Official logo and favicon are bundled unchanged in web/assets and copied into site/assets. Provenance is recorded in research/tenten-logo.json; the runtime does not hotlink the company website.
- Hash navigation expands a targeted details element and its ancestors. Contents links indicate the current section. Native fragment navigation is preserved; section spacing avoids counting the sticky header twice.

## Product runtime and maintenance

- Appearance defaults to the operating system. Manual light/dark/system choice persists; OS changes apply only in system mode. theme-init.js runs before CSS to select the initial palette, while app.js handles changes and cross-tab preference events.
- search-data.js contains the ranked search corpus without Markdown. Each article/guide includes only its packet JSON, escaped against closing-script injection. The full data.js remains an export artifact and is not loaded by pages.
- Keyboard quick search uses a native modal dialog. Focus returns to the trigger; mobile navigation traps focus with an inert background. Search defers during IME composition, batches updates and highlights text through safe nodes.
- Page state is tab-scoped, keyed by pathname, bounded to 20 pages. Reload/back restores an immutable initial snapshot after load; explicit hashes take precedence. Details remain native HTML for no-JS reading.
- Shared design/interaction acceptance rules: docs/product-experience.md. GitHub validation rebuilds content, runs the harness and JS syntax checks, and checks generated files; it does not deploy.
