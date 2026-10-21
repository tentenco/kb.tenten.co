# CMS, content models and languages

Keep content consistent, reusable and safe to publish.

## What it is

A CMS stores and manages website content. A content model defines fields for articles, products and cases so the same data can be reused.

When to use it: Use this when updates are slow, pages disagree or the site needs more languages.

## Why it matters

- Structured content reduces duplicate entry and supports automated validation.
- Sources, versions and owners keep migrated content maintainable.

## Main points

- **Model the content first**: Define content types such as articles, services and products before fields, relationships and validation.
- **Plan language behavior**: Decide markets, URLs, fallbacks and translation status. Share facts; adapt copy to each market.
- **Separate editing and publishing**: Assign responsibility for preview, review, publication and media rights. API access is separate from what the page displays.

### Glossary

- **CMS**: A content management system for editing and publishing.
- **Fallback**: The version used when the requested content is missing.

## An example

- Situation: A product name is typed separately on the homepage, comparison table and blog.
- Takeaway: Store shared facts once so updates stay consistent.

## Start here

Pick frequently updated content and list its fields, sources and uses.

## Before you start

- Content and URL inventory, fields and assets
- Markets, languages, editing workflow, existing CMS and integrations

## Steps

1. Create schemas, sample records, source mappings and required-field validation.
2. Use repeatable transformations for content, media and relationships; start with a dry run.
3. Check counts, content, URLs, previews and permissions. Document the editing process.

## Completion checks

- Important records map from old to new, with a list of missing items.
- Public APIs and search cannot expose unpublished material.

## Common pitfalls

- Using a page-sized HTML blob as the only content model.
- Checking record counts without checking images and relationships.

## Decisions to make

Agree on content owners, publishing permissions and changes that need review.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Headless CMS Development Agency | Jamstack, React | Tenten](https://tenten.co/solutions/headless-cms) (2026-10-21): CMS selection, modeling, migration and ownership, including headless systems.

## Related knowledge

- platform-choice
- migration
- technical-seo
