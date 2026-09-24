# Technical SEO audit

Generated offline: 2026-09-24T16:52:46.974Z

## Counts

- Generated HTML pages: 48 (47 indexable, 1 noindex)
- Sitemap URLs: 47; internal link edges: 972
- Broken internal references: 0; orphan routes: 1; unreachable from home: 1; maximum linked depth: 2
- Images: 176; missing alt attributes: 0; missing declared dimensions: 0; local file data verified: 176
- Invalid JSON-LD blocks: 0; visible placeholder markers: 26
- Issue groups by severity: CRITICAL 0, HIGH 2, MEDIUM 1, LOW 0

## Prioritized findings

- **P1 · HIGH · VERIFIED — Contact form has no configured submission endpoint** (unconfigured_enquiry_form; impact HIGH; effort MEDIUM). The rendered contact form has data-endpoint=""; public/assets/js/site.js shows an error rather than sending when this is empty. Affected pages: 1; see JSON for routes.
- **P1 · HIGH · VERIFIED — Unresolved business placeholders appear in rendered HTML** (visible_placeholder; impact HIGH; effort MEDIUM). Contact and legal fields include unresolved placeholders; see per-page counts in the CSV. These need verified business details before publication. Affected pages: 8; see JSON for routes.
- **P2 · MEDIUM · VERIFIED — Large logo asset used on every page** (oversized_logo; impact MEDIUM; effort LOW). logo-mark.png is 1024×1024 and 678,150 bytes but is declared 42×42 in the shared header; potential payload/LCP impact requires measurement. Affected pages: 48; see JSON for routes.

## Sitemap and robots

- Sitemap: 47 URLs (urlset); pages missing: 0; noindex listed: 0; sitemap routes with no HTML: 0.
- site/robots.txt: present; sitemap directive: https://avesdelsur.com/sitemap.xml. public/robots.txt: present; sitemap directive: https://avesdelsur.com/sitemap.xml.

## Limits

- This is a repeatable local static audit. It makes no web calls and does not report measured rankings, search volume, HTTP behavior, or live Core Web Vitals.
- Regex parsing targets HTML emitted by the repository's static templates; it does not implement browser HTML5 parsing, inspect runtime DOM changes, or validate schema.org eligibility.
- Relative canonical/schema URLs are explicitly marked unknown when SITE_URL is unset. Filesystem absence of image assets is also reported as unknown because serving/copying may occur elsewhere in the build/deploy pipeline.
- See page-level details in `page-seo-report.csv`, `technical-seo-report.json`, and graph/schema data in their separate JSON reports.
