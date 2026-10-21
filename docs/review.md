# AgentHarness review and improvement record

## Execution contract

- Authorized: local research, authoring, implementation and verification of the Tenten knowledge base.
- Sequential execution; no subagents, parallel article production or customer account changes. The later user instruction authorizes commit/push to tentenco/kb.tenten.co; hosted deployment is not included.
- Empty workspace: no pre-existing runtime, harness executable, default duration or dirty worktree. Used the requested skill's improvement loop with completion-based scope.

## Verified changes

| Finding | Evidence | Change | Verification |
| --- | --- | --- | --- |
| No Tenten-specific content or navigation | Empty target folder; Neteon reference used supplier-specific records | Authored 24 concise cards, 8 categories, 8 scenarios and 6 reading paths | Canonical schema, reference, compactness and coverage gates |
| A URL-only handoff would lack executable context | User needs to give knowledge to Agents | Include actual selected knowledge, inputs, actions, evidence, provenance and project context in each packet | Downloaded file matched runtime packet exactly |
| Chinese natural question returned no result | search-baseline.json: 網站上線要檢查什麼 → 0 | Remove common question prefixes/suffixes and use curated aliases | Final browser query returns the launch card first |
| Collapsed mobile navigation remained focusable | CSS used transform alone | Set inert according to viewport and open state; restore focus on close | Browser open, Escape, close-button and focus checks |
| Mobile header overflowed | Emulation: clientWidth 390, scrollWidth 413; search form exceeded viewport | Allow mobile search form to shrink inside the header | Every generated page checked against clientWidth at 390 px |
| Meta browser/server event wording omitted the matching event name | Reviewed measurement wording during content pass | Specify matching event_name and event_id | Export/corpus parity and packet evidence include revised text |
| Source dates could obscure Shopify retrieval path | Background fetch returned 403; public article readable in browser | Record browser review separately and retain the failed HTTP evidence | Source registry explicitly explains both methods |

## Qualitative review

This was a single-agent self-review. No independent reviewer or independent editorial certification is claimed. Deterministic gate counts remain separate from this review.

- Rejected assumption: a green build proves knowledge correctness. It proves only the stated machine checks; exact source scopes and this review remain necessary.
- Rejected assumption: all of Erik's experience is captured. Private notes and project decision history were not supplied; that limit appears in the product and README.
- Rejected assumption: public service copy defines every client's contract. Hosting commitments, prices, staffing and dates remain project-specific.
- Rejected assumption: AI-native grants access or publication permission. Packets preserve actual task authorization and missing capability boundaries without repeating existing approvals.
- Rejected assumption: migration rollback is just DNS. The migration card requires reconciliation after new orders and records a rollback boundary.
- Rejected assumption: Google AI search needs special AI markup. The GEO card follows the reviewed Search Central guidance and limits that claim to Google.
- Rejected assumption: Meta tags, Meta Pixel, GA4, GSC and Google Ads are equivalent. The measurement card explains their separate jobs and tests events rather than tag presence alone.
- Kept scope compact: scenario pages and reading paths reference the same 24 cards. No extra long-form department manuals, quizzes, database or paid AI backend.

## Verification limits and remaining owner input

- Runtime evidence lists actual checks; automation setup mistakes are recorded as test notes, not hidden or counted as application fixes.
- No Magento, Shopify, GA4, GSC, Ads, Meta, CRM, DNS or hosting account mutation ran. This task built knowledge and handoff tools.
- No production access-control test or deployment was requested or performed.
- Team can later confirm maintainers, actual project practices, private evidence, contractual boundaries and Erik's original lessons. These are content inputs for later refinement, not reasons to withhold this usable baseline.

## Initial milestone receipts

- python3 scripts/build.py: PASS, 24 cards / 8 scenarios / 46 pages.
- python3 scripts/harness.py: 131/131 PASS.
- node --check web/app.js: exit 0.
- evidence/browser-v1.json: 32/32 PASS. Native clipboard succeeded; denied-clipboard fallback was exercised separately. Download bytes matched the assembled task packet. All 46 routes passed the 390px overflow and initialization matrix.
- evidence/portable.json: extracted archive rebuilt and passed 131 gates plus JavaScript syntax independently of the original directory.
- Rendering tests used the installed browser's 0.8 page zoom. CDP layout metrics explained the initial pointer and viewport assertion mismatches; final pointer coordinates and the 1440 CSS-pixel desktop viewport compensated for that measured zoom. These setup errors did not result in speculative source changes.

## XTERRA / ecommerce expansion review

- Authorized addition: eight concise ecommerce cards, three scenario packets and one Sherry reading path. Existing foundation, migration, measurement, CRM and growth cards were updated instead of making duplicate essays.
- Reference: private tentenco/xterra-website, main at e1caa5ecdcdf47346c675c1bbc9c5c0f3684acba, read-only. Scope and file digests are in research/xterra-review.json. No reference code or private account data is distributed.

| Finding | Verified evidence | Applied change |
| --- | --- | --- |
| Generic theme instructions would miss the custom frontend | README, checkout route and architecture identify Astro/Sanity plus Shopify hosted services | Headless card covers event ownership, consent, redirects, API access and app compatibility |
| Klaviyo status is internally inconsistent in the repo | README says removed; targeted doc and current marketing code implement custom event/subscription/retry paths; setup script creates drafts | Record both statements and require live evidence before reinstalling, recreating or activating anything |
| Newsletter knowledge was only a keyword in the original CRM card | Canonical lifecycle-crm card lacked platform concepts | Dedicated Klaviyo card explains Profile/List/Segment/Flow/Campaign and meaningful stop/consent tests |
| Cross-system unsubscribe cannot be assumed | Official Klaviyo subscriber-sync article says Shopify unsubscribe does not automatically unsubscribe Klaviyo | Explicit suppression ownership and two-end testing in Klaviyo/CRM cards |
| Conversion rate and ad events lacked their own small execution contracts | User explicitly requests event and conversion-rate documents | GA4 card defines denominator; Meta card requires eventID/event_id matching; Google card separates primary conversion and Feed readiness |
| UI counts and source grouping would hide expanded scope | Build source hardcoded 24; sources UI omitted project-reference | Derive counts from canonical data and render the pinned repository source group |

Self-review rejected several tempting conclusions: source grep does not establish hosted tracking absence; retry receipt does not prove email delivery; a Placed Order event does not prove captured payment; draft setup source does not prove any account is Live; a Git deployment does not mean customer launch. These limits are expressed in the content and source registry.

The library remains bounded at 32 cards; each new card contains fewer than 850 characters across the core bullet/decision fields. Existing 1400-character/card and 240000-byte bundle ceilings remain unchanged. No extra department manuals, model service or database was added.

Current deterministic verification: build PASS (32 / 11 / 57); harness 164/164 PASS; JavaScript syntax exit 0. Current browser and extracted-package receipts are the canonical evidence for this expansion, not the earlier milestone counts.

Expansion runtime: 13/13 recorded checks PASS. All 57 routes fit at 390 CSS px; platform-name searches, the Sherry path, pinned repository provenance and dynamic counts passed. An actual downloaded retention packet matched the canonical four-card packet with all five edited context fields byte-for-byte. Desktop/mobile screenshots were visually inspected.

A subsequent browser round stopped with an explicit user-control hard stop. No control recovery or substitute browser was attempted. Native clipboard, no-JS and file URL reruns in that interrupted round are not claimed; initial unchanged interaction coverage is archived separately. Independent local packaging continued. The extracted package rebuilt and passed 164 gates and JS syntax with source/output fingerprints identical to this workspace.

## Human-first reading redesign

User direction: help people find and understand concepts, then continue to execution; use the official Tenten website logo. No new topic expansion was needed.

| Observed issue | Applied change | Current evidence |
| --- | --- | --- |
| Articles introduced execution fields before explaining unfamiliar concepts | Added concise concept, applicability, example and first step to all 32 cards; inputs and handoff follow reading | Canonical validation and article/guide browser path |
| Navigation exposed subjects without an obvious starting point | Four navigation groups, category clusters, recommended first reading, staged work guides and next reading | Home → guide → article → next article → category |
| Repeated role/authorization language obscured the business decision | Decision sections now state what the reader needs to decide; handoff contract retains task boundaries | Editorial review and export parity |
| Tool relationships required reading dense prose | Ten labeled diagrams with flow, responsibility-map and merge layouts | Desktop/mobile visual review and all-route 390px matrix |
| Text wordmark was not the official logo | Downloaded unchanged header logo and favicon from tenten.co | research/tenten-logo.json, rendered natural width 1088, visual check |
| “Klaviyo 是什麼” returned zero results | Normalize explanatory question suffixes and trailing punctuation | Klaviyo question now returns its article first; launch question regression passed |
| Handoff deep links now target a collapsed details section | Reveal target/ancestor details before navigation | Click, direct handoff hash and direct inputs hash passed |
| First active-contents test selected the preceding section | Reproduced double scroll padding/margin; reduced section margin to 18px | Shortcut and active contents retest passed |

Build PASS (32 / 11 / 57), harness 164/164 PASS, JS syntax exit 0. Fresh browser receipt: 27/27 PASS, including a 57-route mobile matrix and an actual 7,595-character retention download matching its assembled contents. This is a single-agent editorial and visual review, not independent certification or a user study.

Automation setup limits are kept separate from application findings: the browser's 1440px inner width excludes a 19px scrollbar from clientWidth; the test was corrected. With script execution disabled, article content rendered completely, but the helper's attempt to click native details timed out; no no-JS click pass is claimed. Native clipboard permission was not requested; the selectable-content fallback was tested. Prior expansion receipts remain archived.

## Cohere product experience and light/dark themes

Applied the two user-provided design references to the existing reading structure. Kept 32 cards and static delivery; no framework migration or additional knowledge essays.

| Finding | Change | Evidence |
| --- | --- | --- |
| Shared color/type rules were obscured by layered overrides | One token stylesheet, local Inter/Space Grotesk, OS-default and persistent manual themes | Settled desktop light/dark screenshots; primary text/control contrast passes both palettes |
| Full Markdown corpus loaded on every page | 57,946-byte search corpus and scoped inline packet data; full export remains available | Harness checks exact parity/scope and page script references; actual selected packet download equals preview |
| Refresh could discard project context and interrupt reading | Tab-local fields, selection, details, scroll and focus; clear with undo | Five fields, selection, 1452.5px scroll and focus/caret survived reload; blocked-storage recovery checked |
| A deferred restore could read a newer state written during load | Capture immutable initial restore snapshot | Source review and actual reload restoration |
| Mobile search icon lost its visible label | Explicit accessible name on trigger | Mobile snapshot reports 搜尋知識或問題 |
| Navigation/search need reliable keyboard behavior | Native search dialog and mobile focus containment/restoration | Shortcut, arrows, Enter, Escape, inert background and focus checks |

Performance evidence: observed homepage HTML plus resource decoded body bytes went from 248,714 to 217,965, including the new local fonts. The search payload itself fell from 173,924 to 57,946 bytes. Five local input-to-result observations were 61.1–62.1ms including a 60ms debounce. These are local observations, not production Core Web Vitals or a claim that every visit is faster.

Current browser receipt has 30 actual checks; all 57 routes passed the 390px overflow/init/packet matrix. Reduced-motion, print, blocked storage, file URL and no-JS content were checked. Native clipboard permissions, no-JS details clicks and cross-tab theme synchronization were not independently exercised. This remains a single-agent review; no Google certification or user-study result is implied.

Test setup defects were isolated from product defects: shorthand hex parsing caused null contrast values until the helper was corrected; mobile pointer coordinates needed correction for observed 0.8 browser zoom; first theme screenshot was captured during transition. Final evidence records corrected observations and actual viewport sizes.
