# Technical SEO and permanent redirects

Help search engines reach the right pages and preserve existing search entry points.

## What it is

Technical SEO helps search engines find and index the right pages. Permanent redirects connect old URLs to new locations.

When to use it: Use this for launches, URL changes, traffic drops or missing indexed pages.

## Why it matters

- Unreachable pages or ambiguous URLs limit organic visibility.
- Migration mapping and monitoring reduce omissions and diagnosis effort; rankings may still fluctuate.

## Main points

- **Distinguish crawling and indexing**: Robots rules control crawling. Noindex controls indexing and must be readable by the crawler. Canonical suggests the main version.
- **Clarify site and language structure**: Sitemaps should contain canonical, indexable URLs. Check hreflang, self-canonicals and reciprocal language links.
- **Keep relevant redirects**: Use 301/308 for permanent moves with the closest relevant mapping. Google recommends keeping redirects for at least a year, and longer when possible.

### Glossary

- **Index**: Page information a search engine stores for search results.
- **Canonical**: The suggested main URL among similar pages.
- **301 redirect**: A permanent move from an old URL to a new one.

## An example

- Situation: Production inherits staging’s noindex directive.
- Takeaway: Remove indexing restrictions only in the intended environment.

## Start here

Check whether the homepage and one important product page can be crawled and indexed.

## Before you start

- Production/old URLs, GSC, traffic and internal-link inventories
- Indexing scope, markets/languages, platform and DNS/CDN limits

## Steps

1. Crawl status codes, indexing directives, canonicals, internal links, sitemaps and structured data.
2. Map old to new URLs. Verify one-hop permanent redirects, 200 destinations and no loops.
3. Fix internal links, metadata and sitemaps. Submit to the authorized GSC property and inspect sample URLs.
4. Consider Change of Address for domain moves. Monitor indexing, traffic and 404s before and after.

## Completion checks

- Important pages are crawlable and indexable. Staging has access protection beyond robots.
- Redirects, canonicals, hreflang and sitemaps agree; monitoring has dates.

## Common pitfalls

- Redirecting every 404 to the homepage, creating soft 404s.
- Assuming sitemap submission guarantees indexing or ranking.

## Decisions to make

Decide which content to keep, merge or retire before assigning URLs and redirects.

## Sources and scope

- Suggested guidance; adapt to the project. Reviewed: 2026-10-21
- [Google Search Central: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) (2026-10-21): URL inventories, permanent redirects, canonicals, cutover, GSC and keeping redirects for at least a year.
- [Google Search Central: AI features](https://developers.google.com/search/docs/appearance/ai-features) (2026-10-21): Google AI search eligibility and SEO foundations; no required special schema or AI text file. Does not establish rules for other platforms.

## Related knowledge

- migration
- content-seo
- geo
