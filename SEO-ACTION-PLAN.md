# Aves del Sur — SEO audit and action plan

Audit date: 24 September 2026. **This is an audit, not an implementation authorization.** No site content, design, URLs, or indexation directives were changed. Run `bun run seo:audit` to regenerate the seven reports in [`seo-audit/`](seo-audit/); the per-page inventory is [`page-seo-report.csv`](seo-audit/page-seo-report.csv). The script analyzes generated HTML without network calls. Separately, the 48 generated routes were requested through the running **development** preview: all returned HTML with the expected H1 and HTTP 200. This does **not** establish production indexation or live search performance.

## 1. Executive summary

- **47 indexable pages, one noindex `/404/` page.** All 47 indexable generated pages are in the generated sitemap; no generated internal route references were broken. The static link graph has 972 distinct page-to-page edges, no indexable orphans and maximum depth two from home. There are no missing or duplicate page titles, descriptions or H1s in generated HTML.
- **Highest priority is business readiness:** the contact form cannot submit, and placeholders for email, phone, legal identity and hours appear throughout the site. The site itself warns those facts are pending. Do not replace them with invented details.
- **Canonicalization needs a verified production origin:** `SITE_URL` is empty. Generated canonical/OG/schema URLs are relative, while the development `/sitemap.xml` responds to an HTTPS request with `http://` URLs. The latter is observed on the preview proxy; production behavior remains unverified.
- The informational species pages are substantial and linked, but all 12 currently say “consultar” and have no price or individually available bird record. Do not turn those into “en venta” listings without inventory and lawful-sale details.

### Scope and architecture

| Area | Observed implementation |
|---|---|
| Framework/build | TanStack Start / React Router via Vite, Bun scripts (`package.json`, `src/routes/`). |
| Public rendering | `tools/build-site.mjs` emits full HTML in `site/**/index.html`; `src/lib/static-site.ts` bundles and serves these files from a catch-all GET route. This is server-returned HTML, not a JS-only SPA for public pages. |
| Routes | Home, `/aves/`, 12 species, 10 city guides, availability, purchase/transport/CITES/responsible ownership/about/contact/FAQ, blog index and 10 articles, four legal pages, `/404/`. No private/admin or API routes found in `src/routes/`. |
| Content/data | JS modules in `tools/site/data/`; no CMS or project database for these pages. |
| Metadata and structured data | Shared `tools/site/layout.mjs`; Organization/WebSite on every page, BreadcrumbList on pages with breadcrumbs, Article on species/blog, FAQPage where visible Q&A exists, ItemList on catalog. Generated JSON-LD parses; eligibility/semantic correctness is not proved by syntax alone. |
| Images | Local files under `public/assets/images/`; static `img` tags with declared dimensions, alt attributes and loading hints. No observed `srcset`/`sizes` in the generated content. Some imagery is digitally recreated, disclosed once in the footer. |
| Discovery | `site/sitemap.xml` and `site/robots.txt` are generated. A separate live route generates `/sitemap.xml`; the development preview serves `public/robots.txt`. No sitemap index is needed for 47 URLs. |
| Redirect/404 | Catch-all normalizes lookup internally without redirecting URL variants; unknown paths return 404, while direct `/404/` returns 200 with noindex. |
| Analytics/GSC | Code supports optional GA and verification meta, but `gaId` and `gscToken` are empty (`tools/site/config.mjs`). No Search Console, search queries, rankings or conversion dataset was available for this audit. |
| Language | Generated HTML uses `lang="es"` and `og:locale=es_ES`; no translated public routes, so missing hreflang is **not** an issue. The unused React fallback root has `lang="en"` and Lovable placeholder metadata (`src/routes/__root.tsx`); verify that it never appears on indexable public routes after deployment. |

### Evidence and limitations

The repeatable audit checks HTML metadata, headings, static links, image attributes/local file dimensions, JSON-LD syntax, sitemap inclusion, placeholders and the internal-link graph. The live development spot checks covered all 48 generated routes, `/robots.txt`, `/sitemap.xml`, a non-existent path, slash/no-slash variants and a catalog query URL. Production host canonicalization, Google indexing, external links, HTTP-to-HTTPS/www redirects, Search Console, actual Core Web Vitals, schema rich-result eligibility and real commercial demand **cannot** be inferred from this local audit. Check those against the production domain and field data before deciding on changes.

## 2. Prioritized findings and action order

Priority is assigned to **issue groups**, not multiplied by 48 shared-template pages: P0 blockers, P1 high impact, P2 medium, P3 low. All proposed work waits for approval and verified business facts.

| Order | Evidence class | Finding and evidence | Severity / impact / effort | Proposed action |
|---|---|---|---|---|
| 1 | **VERIFIED** | Form has `data-endpoint=""` (`tools/site/components.mjs:75-76`); JS shows an error and does not send (`public/assets/js/site.js:178-189`). Contact email/phone are placeholders. | HIGH / HIGH / MEDIUM | Connect a real, consent-aware enquiry endpoint and verify delivery; supply verified contact details and a non-JS fallback before accepting leads. |
| 2 | **VERIFIED** | All 48 pages show shared footer `[PENDIENTE]` contact fields; about and legal pages have more. 176 placeholder *occurrences*, not 176 distinct facts (`page-seo-report.csv`, `tools/site/config.mjs:6-18`). | HIGH / HIGH / MEDIUM | Obtain verified legal identity, contact details, trading/registration facts and policies from the business; then update centrally and review legal copy with its owner. |
| 3 | **VERIFIED in development; production unknown** | HTTPS preview `/sitemap.xml` returns 47 `<loc>` entries beginning with `http://` because route uses `new URL(request.url).origin` (`src/routes/sitemap[.]xml.ts:8-19`). | HIGH / HIGH / LOW | After confirming the production domain, build sitemap URLs from its verified HTTPS origin and test the published response. Do not use the `.replit.dev` preview domain as the production canonical. |
| 4 | **VERIFIED configuration; outcome uncertain** | `SITE_URL=""` (`tools/site/config.mjs:3-5`), so every generated canonical is a root-relative path and shared Organization/WebSite has empty `url` (`site/index.html` JSON-LD). Root-relative canonicals can resolve; the risk is ambiguity across hosts, not a demonstrated Google penalty. | MEDIUM / MEDIUM / LOW | Configure the verified public origin and make canonical, OG and identity URLs consistent. Check against the deployed sitemap. |
| 5 | **VERIFIED in development** | `/aves/amazona/` and `/aves/amazona` both return 200 with the same HTML; `src/lib/static-site.ts:22-35` normalizes lookup without a 301/308. `/aves/?familia=amazonas` also returns catalog HTML. | MEDIUM / MEDIUM / MEDIUM | Choose one trailing-slash convention, test query/filter behavior, then redirect variants at the serving layer without breaking filters. Audit host/protocol variants in production first. |
| 6 | **VERIFIED** | Direct `/404/` returns 200 (while an unknown path returns 404); `/404/` is noindex and absent from sitemap (`src/lib/static-site.ts:22-35`). | LOW / LOW / LOW | Keep unknown-path 404 and noindex. Consider making `/404/` itself 404 if exposed; low priority, not a confirmed soft-404 of unknown paths. |
| 7 | **VERIFIED** | Public `robots.txt` allows crawling but lacks the sitemap line that generated `site/robots.txt` has; preview serves the public variant. | LOW / LOW / LOW | Align the served robots file with the correct sitemap URL after production origin is known; a missing robots sitemap line is not a crawling block. |
| 8 | **VERIFIED content gap** | All 12 species have `status: "consultar"` and `price: null` (`tools/site/data/species.mjs`); availability explicitly requests individual confirmation. There are no verified individual-bird offer pages. | MEDIUM / HIGH / MEDIUM | Make availability useful with verified date, species-specific status and clear enquiry path; add listings only for actual birds, prices/conditions when supplied. Do not label guides “en venta” prematurely. |
| 9 | **VERIFIED asset fact; impact LIKELY** | Header logo is a 678,150-byte, 1024×1024 PNG declared at 42×42 on every page (`tools/site/layout.mjs:57`, local asset). No generated `srcset`/`sizes`; species hero photo also appears in its gallery (`tools/build-site.mjs:91,125-137`). | MEDIUM / MEDIUM / LOW | Measure mobile transfer/LCP first; then resize/encode logo and selectively introduce responsive variants without changing appearance. No measured CWV failure is claimed. |
| 10 | **VERIFIED content signal; ranking impact unknown** | Ten city guides share titles/CTA/template and receive only 4 distinct incoming page links each; they contain city-specific housing/climate/transport sections (roughly 280–400 main words) but no evidence of a physical business location in each city (`tools/build-site.mjs:350-380`, `internal-links.json`). | MEDIUM / MEDIUM / MEDIUM | Validate local intent and service coverage, strengthen only city pages with real differentiating evidence and relevant species links; avoid fabricated branches, addresses or city-token pages. |

**CRITICAL:** none demonstrated by generated HTML or development responses. **HIGH:** items 1–3 (item 3 only verified in development). **MEDIUM:** items 4, 5, 8–10. **LOW:** items 6–7. No measured redirect chains/loops, 5xx responses, accidental noindex, blocked resources, title/description duplication, broken generated page routes or indexable orphan pages were found. This does not certify their absence in production.

## 3. Page decisions and content audit

Decisions below are proposals, not applied changes. Main-text word counts are rough rendered HTML counts (navigation/footer excluded); short length alone is **not** a thin-content verdict.

| Pages | Decision | Why / what to check |
|---|---|---|
| `/` | **IMPROVE** | Good species/decision navigation; remove shared placeholders, verify breeder claims and direct users to a working contact channel. |
| `/aves/` | **KEEP + IMPROVE** | All 12 guides linked and catalog is crawlable without JS; distinguish species research from confirmed inventory, add contextual chooser links only if useful. |
| 12 species URLs (matrix below) | **KEEP + IMPROVE** | Each has unique H1/title, substantial husbandry sections, FAQ, documentation, availability and contact CTA. All status/price fields are non-committal; validate husbandry/legal statements and only add bird listings when real. No duplicate species URL was found. |
| 10 `/aves/{city}/` guides | **IMPROVE; MERGE only after data review** | Different location copy exists, but repeated transactional framing without verified local presence/fulfilment and only four inbound links each. Monitor impressions and differentiation before any merge/noindex; do **not** delete pages now. |
| `/disponibilidad/`, `/como-comprar/`, `/contacto/` | **IMPROVE first** | Commercial journey exists, but all inventory is consult-only and the enquiry form cannot submit; provide substantiated availability, pricing/process and a functioning contact channel. |
| `/transporte-de-aves/`, `/documentacion-cites/`, `/tenencia-responsable/`, `/preguntas-frecuentes/` | **KEEP + targeted review** | Helpful support content and internal paths; verify regulatory/welfare details and link to the specific transaction stage where relevant. |
| `/sobre-nosotros/` | **IMPROVE first** | Explicit business identity/registration/veterinary placeholders undermine trust; replace only with verified facts. |
| `/blog/` and all 10 `/blog/{post}/` articles | **KEEP + selective IMPROVE** | Unique titles and topics, Article markup, dates, contextual species links; some articles are ~370–500 main words, but not automatically thin. Editorial author is generic “Equipo editorial”; add accountable authors/reviewers/sources where real, especially health/CITES. |
| `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`, `/terminos-y-condiciones/` | **IMPROVE** | Legal text contains pending identifiers and/or operational terms. Legal/business owners must verify before publishing completed claims. |
| `/404/` | **KEEP noindex** | Intended error template only; status for direct route can be corrected later. Never add to sitemap. |
| **MERGE / REDIRECT / NOINDEX** | **None now** | No confirmed cannibalization, duplicate content requiring consolidation or unwanted indexation was demonstrated. A decision here needs production queries and page-level evidence. |
| **CREATE NEW PAGE** | **Conditional only** | Individual available-bird pages or a genuine breeder/location identity page are justified only when inventory, lawful provenance and operational facts are supplied. Do not mass-produce city/species “sale” doorway pages. |

### Species architecture matrix

Every species row has a self-canonical **path** `/aves/<slug>/`, `index, follow`, visible breadcrumbs + BreadcrumbList, Article (about Taxon), FAQPage and shared Organization/WebSite JSON-LD. Each points to `/contacto/`, `/como-comprar/` and `/disponibilidad/`; none links to an individual available-bird page because none exists. The `Title` column below includes the exact per-page title **before** the shared suffix ` | Aves del Sur`. `Links` is distinct incoming page links from the static graph (includes catalog/sitewide links). Content quality is based on page structure/length, **not** veterinarian review. Primary keyword and intent are proposed mappings, not ranking data.

| Species | URL | Title before brand suffix | H1 | Proposed primary keyword / intent | Content / links | SEO problem and recommended action |
|---|---|---|---|---|---|---|
| Yaco de cola roja | `/aves/yaco-cola-roja/` | Yaco de cola roja: carácter, cuidados y convivencia | Yaco de cola roja | yaco de cola roja; informational → commercial investigation | ~1160 words; 13 in | Strong guide; KEEP, validate legal guidance, surface genuine availability only when known. |
| Guacamayo azul y amarillo | `/aves/guacamayo-azul-amarillo/` | Guacamayo azul y amarillo: carácter, cuidados y convivencia | Guacamayo azul y amarillo | guacamayo azul y amarillo; informational → commercial | ~910; 8 | KEEP; clarify fit/space and offer status with verified facts. |
| Guacamayo rojo | `/aves/guacamayo-rojo/` | Guacamayo rojo: carácter, cuidados y convivencia | Guacamayo rojo | guacamayo rojo; informational → commercial | ~800; 4 | KEEP; add relevant contextual links if editorially justified. |
| Cacatúa Galah | `/aves/cacatua-galah/` | Cacatúa Galah: carácter, cuidados y convivencia | Cacatúa Galah | cacatúa galah; informational → commercial | ~730; 7 | KEEP; distinguish from other cockatoos, no invented stock. |
| Cacatúa de cresta amarilla | `/aves/cacatua-cresta-amarilla/` | Cacatúa de cresta amarilla: carácter, cuidados y convivencia | Cacatúa de cresta amarilla | cacatúa de cresta amarilla; informational → commercial | ~730; 8 | KEEP; connect noise/space guidance to buying decision. |
| Amazona | `/aves/amazona/` | Amazona: carácter, cuidados y convivencia | Amazona | loro amazona; informational → commercial | ~700; 9 | IMPROVE accuracy: “amazona” spans species; identify which taxa, if any, the business can actually discuss. |
| Eclectus | `/aves/eclectus/` | Eclectus: carácter, cuidados y convivencia | Eclectus | loro eclectus; informational → commercial | ~680; 9 | KEEP; verify nutrition claims and genuine offer state. |
| Caique | `/aves/caique/` | Caique: carácter, cuidados y convivencia | Caique | caique loro; informational → commercial | ~620; 9 | KEEP; compare suitability with other active species. |
| Conuro del sol | `/aves/conuro-del-sol/` | Conuro del sol: carácter, cuidados y convivencia | Conuro del sol | conuro del sol; informational → commercial | ~630; 8 | KEEP; surface noise and housing trade-offs. |
| Loro Senegal | `/aves/loro-senegal/` | Loro Senegal: carácter, cuidados y convivencia | Loro Senegal | loro senegal; informational → commercial | ~640; 9 | KEEP; link from relevant city/housing advice. |
| Ninfa (carolina) | `/aves/ninfa/` | Ninfa (carolina): carácter, cuidados y convivencia | Ninfa (carolina) | ninfa carolina; informational → commercial | ~640; 10 | KEEP; avoid suggesting stock without confirmed birds. |
| Agapornis | `/aves/agapornis/` | Agapornis: carácter, cuidados y convivencia | Agapornis | agapornis cuidados; informational → commercial | ~600; 5 | KEEP; strengthen appropriate internal links and distinguish species groups if known. |

**Cannibalization/missing species pages:** no exact duplicate title/H1/canonical among these 12. The broad family-level Amazona page should not be treated as an individual species offer. No verified inventory page lacks a matching species guide because no individual offer pages exist. Search-query overlap cannot be diagnosed without Search Console or SERP data.

## 4. Keyword, commercial and internal-link plans

Do not add every keyword to every page. These are intent-based candidate destinations, **not** search volume/ranking claims:

| Intent | Query families | Destination and conversion purpose |
|---|---|---|
| Informational | `cuidados de loros`, alimentación, longevidad, ruido, comportamiento, CITES | Existing blog/species/CITES guides; answer real questions and link to relevant species and responsible ownership. |
| Commercial investigation | `precio de un yaco`, `cómo elegir loro`, `criador de loros en España`, `dónde comprar loro` | Species guide and `/como-comprar/`/`/sobre-nosotros/`; only give prices, credentials, facility details and terms when verified. |
| Transactional | `loros disponibles`, `loros en venta`, `comprar loro` | `/disponibilidad/` and `/contacto/` after a working enquiry route and genuine updated availability. Avoid claiming guaranteed supply. |
| Species transaction | `yaco en venta`, `guacamayo en venta`, `cacatúa en venta`, `amazona en venta`, `eclectus en venta`, `conuro en venta` | Matching species guides as research paths, then verified stock records (if available) and a specific enquiry CTA. Do not turn a care guide into a fake listing. |
| City/regional | `aves exóticas en Madrid` and other covered cities | Existing city guide *for service/transport considerations*, not a false claim of premises or a local breeder branch. |

Current graph: 972 distinct edges, zero broken generated page routes, maximum depth two, zero indexable orphans; `/404/` is the only unreachable/orphan route and is intentional. Sitewide nav/footer inflate counts, so prioritize **contextual** links: care article → relevant species → `/disponibilidad/` → `/como-comprar/` → working `/contacto/`; CITES/transport/ownership support the decision. City guides should link to species genuinely relevant to their stated housing/climate advice and to actual service coverage. Avoid adding repetitive links just to increase counts. Catalog `?familia=` URLs are UI filters; their canonical remains `/aves/`, so monitor crawl of query variants rather than fabricating category landing pages.

## 5. Technical, local, schema, image, mobile and performance plans

1. **Technical/SEO safety:** verify production hostname, HTTPS and www rules; set a single public origin, fix sitemap scheme behind proxy, compare published robots/sitemap/canonical/OG, redirect slash variants as appropriate, and confirm `/404/` and arbitrary missing routes. No stage/admin/API URLs were found among generated routes, but review production deployment and logs. Keep private development domains out of published metadata. Re-run `bun run seo:audit` after every site generation and add the command to CI when ready.
2. **Local trust:** do not add LocalBusiness or a street address merely to qualify for local search. First confirm trading name, lawful registered business/aviary identity (where applicable), publicly appropriate area/address, phone, hours and coverage. Then use identical verified facts on contact/about/legal pages, and consider LocalBusiness schema only if the entity genuinely fits and facts are public. No Google Business Profile or Search Console status was available.
3. **Structured data:** 0 invalid JSON-LD blocks, but the shared Organization/WebSite URL is empty and many schema URLs are relative. After verifying the origin, use coherent absolute entity IDs/URLs and check visible-page correspondence with a structured data validator. Article/FAQ/Breadcrumb/ItemList types exist; do not add Product/Offer or image-license claims without actual offers/rights. FAQ markup is not a guarantee of rich results.
4. **Content/editorial:** review bird health, legal and transport claims with a named, qualified source; retain honest availability language and image disclosure. Replace generic author credit only with a real responsible author/reviewer. Do not rewrite all guides or duplicate city templates. Verify dates rather than inventing freshness.
5. **Image SEO and CWV:** 176 `img` occurrences across pages (40 distinct `src` values in the observed rendered HTML), none missing `alt` or declared dimensions; some gallery alts repeat numbered species labels rather than describing the image. Logo payload is disproportionately large; measure LCP, CLS, INP, TTFB and mobile transfer before optimizing image variants. Google Fonts are preconnected/asynchronously loaded and JS is deferred (`tools/site/layout.mjs`); no client hydration is needed for static page content. Actual field CWV and CSS/JS usage remain unknown.
6. **Mobile:** one responsive HTML version with viewport meta and CSS breakpoints; the menu and catalog filters use small client JS, while all catalog links/content remain in HTML. Check real devices for tap targets, overflow, nav, image crop and layout shift. Static inspection alone cannot certify mobile UX or content parity after JS interactions.
7. **International:** Spanish-only site, `lang="es"` and `og:locale=es_ES`; hreflang is not currently required. Do not introduce translated pages without an operational content strategy.

### Top 20 opportunities (proposals, ordered)

1. Make `/contacto/` enquiry delivery real and test it end to end.
2. Publish verified email, phone and hours in contact/footer.
3. Complete legal identity and terms with the business owner.
4. Validate breeder registration/aviary credentials before using them as trust signals.
5. Fix the published sitemap's canonical HTTPS host/scheme.
6. Align canonical, OG and structured-data URLs to that host.
7. Align served robots with the published sitemap.
8. Redirect tested slash variants to canonical paths.
9. Keep `/disponibilidad/` current with dated, verified species status.
10. Add individual bird/offer records only when real inventory exists.
11. Specify actual buyer documentation/provenance process on `/como-comprar/`.
12. Add genuine price or price-request terms where supplied.
13. Add contextual `yaco` care → species → availability links.
14. Do the same for guacamayos with space/noise qualification.
15. Do the same for cacatúas with noise/attention qualification.
16. Connect Eclectus, Amazona and Conuro guides to relevant comparison content.
17. Strengthen city guide ↔ relevant species links using real local advice.
18. Attribute and source high-stakes welfare/CITES articles with verified reviewers.
19. Optimize the header logo after measuring mobile transfer and LCP.
20. Review gallery alt descriptions and responsive image variants without changing imagery.

### Recommended implementation sequence

**Gate A (business input):** verify identity, contact, legal and actual inventory/coverage; do not deploy completed claims beforehand. **Gate B (conversion):** working form + fallback, real availability and commercial copy. **Gate C (technical):** production origin, sitemap/robots/canonical/redirects, repeat crawl. **Gate D (editorial):** targeted content and contextual links, veterinarian/legal review. **Gate E (measurement):** Search Console, analytics consent and production field CWV; revise the order using evidence.

### Audit totals

| Metric | Result and scope |
|---|---|
| TOTAL PAGES AUDITED / INDEXABLE / NOINDEX | **48 / 47 / 1** generated and live development routes |
| BROKEN URLS | **0** broken *generated internal page-route references*; external URLs not checked |
| REDIRECT ISSUES | **1 observed class**: slash/no-slash duplicate 200 in preview; chains/loops/host redirects in production unknown |
| CANONICAL ISSUES | **0 missing/conflicting values**; **48 relative** paths pending production origin (not necessarily invalid) |
| HREFLANG ISSUES | **0 applicable** (single language) |
| MISSING / DUPLICATE TITLES | **0 / 0** |
| MISSING / DUPLICATE META DESCRIPTIONS | **0 / 0** |
| MISSING / MULTIPLE H1 | **0 / 0**; unique H1 across pages |
| ORPHAN PAGES | **0 indexable**, 1 intentional noindex `/404/` |
| THIN CONTENT PAGES | **0 confirmed**; review 10 shorter city guides and selected blog articles for real utility |
| SCHEMA ISSUES | **0 syntax errors**; shared Organization URL empty across 48 pages; production semantic/eligibility test pending |
| IMAGE SEO ISSUES | **0 missing alt or dimensions**; one oversized distinct logo reused on 48 pages; generic gallery alts to review |
| PERFORMANCE ISSUES | **1 verified heavy shared asset**; field CWV not measured |
| LOCAL SEO ISSUES | **Pending identity/contact details**; 10 city pages not evidence of physical premises |
| COMMERCIAL SEO OPPORTUNITIES | **20 prioritized proposals** above; no volume or ranking claims |

The ten prioritized problems are in section 2. The automated report groups seven detectable issue classes; the extra development-routing and editorial findings are documented here with their separate evidence and uncertainty, not falsely reported as automated errors.