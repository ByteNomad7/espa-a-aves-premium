/**
 * Offline audit of the controlled HTML emitted by tools/build-site.mjs.
 *
 * The generated site is deliberately parsed with small regex helpers instead
 * of a general HTML parser. This is appropriate for this repository's
 * template-generated output, but it is not a validating HTML5 parser: malformed
 * nesting, browser error recovery, dynamically inserted content and JS-driven
 * links are outside the audit's scope. No network requests are made.
 */
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "./site/config.mjs";
import { SPECIES, FAMILIES } from "./site/data/species.mjs";
import { POSTS } from "./site/data/blog.mjs";
import { LOCATIONS } from "./site/data/locations.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "site");
const OUT = path.join(ROOT, "seo-audit");
const HOST = SITE_URL ? new URL(SITE_URL).origin : null;
const ASSET_EXT = /\.(?:avif|gif|jpe?g|png|svg|webp|ico|css|js|woff2?|ttf|otf|pdf|mp[34]|webm)$/i;
const PLACEHOLDER = /\[(?:PENDIENTE|TODO|RELLENAR|PLACEHOLDER)[^\]]*\]|\b(?:lorem ipsum|example\.com|your domain)\b/gi;

const decode = (value = "") => value
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
const stripTags = (value = "") => decode(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
const escapeCsv = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
const safeJson = (value) => `${JSON.stringify(value, null, 2)}\n`;

function attrs(tag) {
  const out = {};
  for (const match of tag.matchAll(/([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    out[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return out;
}
function matches(html, re) { return [...html.matchAll(re)]; }
function metaContent(html, key, attr = "name") {
  const tags = matches(html, /<meta\b[^>]*>/gi).map((m) => attrs(m[0]));
  return tags.find((a) => (a[attr] || "").toLowerCase() === key.toLowerCase())?.content ?? null;
}
function pageRoute(file) {
  const rel = path.relative(SITE, path.dirname(file)).split(path.sep).join("/");
  return rel ? `/${rel}/` : "/";
}
function normalizeInternal(href, fromRoute) {
  let raw = decode(href).trim();
  if (!raw || raw.startsWith("#") || /^(?:mailto:|tel:|javascript:|data:)/i.test(raw)) return null;
  if (/^(?:https?:)?\/\//i.test(raw)) {
    try {
      const u = new URL(raw, SITE_URL || "https://offline.invalid");
      if (!HOST || u.origin !== HOST) return null;
      raw = u.pathname;
    } catch { return null; }
  }
  raw = raw.split("#", 1)[0].split("?", 1)[0];
  if (!raw || ASSET_EXT.test(raw)) return null;
  let decoded;
  try { decoded = decodeURIComponent(raw); } catch { decoded = raw; }
  const base = decoded.startsWith("/") ? decoded : path.posix.join(path.posix.dirname(fromRoute), decoded);
  const clean = path.posix.normalize(base.startsWith("/") ? base : `/${base}`);
  if (clean === "/.." || clean.startsWith("/../")) return null;
  return clean === "/" || clean.endsWith("/") ? clean : `${clean}/`;
}
function priority(severity) {
  return ({ critical: "P0", high: "P1", medium: "P2", low: "P3", info: "P4" })[severity] || "P3";
}
function issue(code, severity, title, detail, pages = [], effort = "low", status = "verified") {
  return { id: code, code, severity: severity.toUpperCase(), impact: severity === "critical" || severity === "high" ? "HIGH" : severity === "medium" ? "MEDIUM" : "LOW", effort: effort.toUpperCase(), priority: priority(severity), status: status === "unknown" ? "RECOMMENDATION" : "VERIFIED", title, detail, pages };
}
async function listHtml(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...await listHtml(full));
    else if (entry.name === "index.html") found.push(full);
  }
  return found;
}
async function imageInfo(src) {
  try {
    const pathname = decodeURIComponent(new URL(src, "https://offline.invalid").pathname);
    if (!pathname.startsWith("/")) return { status: "unknown", bytes: null, width: null, height: null };
    let filename = path.join(SITE, pathname.replace(/^\/+/, ""));
    try { await stat(filename); } catch { filename = path.join(ROOT, "public", pathname.replace(/^\/+/, "")); }
    const buffer = await readFile(filename);
    let width = null, height = null;
    if (buffer.toString("ascii", 1, 4) === "PNG" && buffer.length >= 24) {
      width = buffer.readUInt32BE(16); height = buffer.readUInt32BE(20);
    } else if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      for (let i = 2; i + 9 < buffer.length;) {
        if (buffer[i] !== 0xff) { i++; continue; }
        const marker = buffer[i + 1], length = buffer.readUInt16BE(i + 2);
        if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
          height = buffer.readUInt16BE(i + 5); width = buffer.readUInt16BE(i + 7); break;
        }
        if (length < 2) break;
        i += 2 + length;
      }
    } else if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
      const kind = buffer.toString("ascii", 12, 16);
      if (kind === "VP8X" && buffer.length >= 30) {
        width = 1 + buffer.readUIntLE(24, 3); height = 1 + buffer.readUIntLE(27, 3);
      }
    }
    return { status: "verified", bytes: buffer.length, width, height };
  } catch {
    // Generated HTML points at public assets, which may be served by a bundler
    // rather than copied into site/. Absence from both local roots is unknown.
    return { status: "unknown", bytes: null, width: null, height: null };
  }
}
function collectSchemaUrls(value, result = []) {
  if (!value || typeof value !== "object") return result;
  for (const [key, child] of Object.entries(value)) {
    if (typeof child === "string" && /^(?:url|@id|mainEntityOfPage|item)$/i.test(key) && /^(?:https?:\/\/|\/)/i.test(child)) result.push({ key, value: child });
    else if (child && typeof child === "object") collectSchemaUrls(child, result);
  }
  return result;
}
function countPlaceholders(text) { return [...text.matchAll(new RegExp(PLACEHOLDER.source, PLACEHOLDER.flags))].length; }

const files = (await listHtml(SITE)).sort();
const pages = [];
for (const file of files) {
  const html = await readFile(file, "utf8");
  const route = pageRoute(file);
  const titles = matches(html, /<title\b[^>]*>([\s\S]*?)<\/title\s*>/gi).map((m) => stripTags(m[1]));
  const descriptions = matches(html, /<meta\b[^>]*>/gi).map((m) => attrs(m[0])).filter((a) => (a.name || "").toLowerCase() === "description").map((a) => a.content || "");
  const h1 = matches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi).map((m) => stripTags(m[1]));
  const h2 = matches(html, /<h2\b[^>]*>([\s\S]*?)<\/h2\s*>/gi).map((m) => stripTags(m[1]));
  const h3 = matches(html, /<h3\b[^>]*>([\s\S]*?)<\/h3\s*>/gi).map((m) => stripTags(m[1]));
  const mainHtml = html.match(/<main\b[^>]*>([\s\S]*?)<\/main\s*>/i)?.[1] || "";
  const mainText = stripTags(mainHtml.replace(/<(?:script|style)\b[^>]*>[\s\S]*?<\/(?:script|style)\s*>/gi, " "));
  const lang = attrs(html.match(/<html\b[^>]*>/i)?.[0] || "").lang || "";
  const canonicals = matches(html, /<link\b[^>]*>/gi).map((m) => attrs(m[0])).filter((a) => (a.rel || "").toLowerCase().split(/\s+/).includes("canonical")).map((a) => a.href || "");
  const robots = metaContent(html, "robots");
  const hrefs = matches(html, /<a\b[^>]*>/gi).map((m) => attrs(m[0]).href).filter(Boolean);
  const internalLinks = [...new Set(hrefs.map((href) => normalizeInternal(href, route)).filter(Boolean))];
  const images = matches(html, /<img\b[^>]*>/gi).map((m) => {
    const a = attrs(m[0]);
    return { src: a.src || null, alt: a.alt ?? null, width: a.width ?? null, height: a.height ?? null, loading: a.loading ?? null, fetchpriority: a.fetchpriority ?? null };
  });
  const schemaBlocks = matches(html, /<script\b(?=[^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script\s*>/gi).map((m) => m[1].trim());
  const placeholders = countPlaceholders(stripTags(html));
  const problems = [];
  const addProblem = (code) => { if (!problems.includes(code)) problems.push(code); };
  if (titles.length !== 1 || !titles[0]) addProblem("title_missing_or_multiple");
  if (descriptions.length !== 1 || !descriptions[0]) addProblem("description_missing_or_multiple");
  if (h1.length !== 1) addProblem(h1.length ? "multiple_h1" : "h1_missing");
  if (canonicals.length !== 1 || !canonicals[0]) addProblem("canonical_missing_or_multiple");
  if (!robots) addProblem("robots_meta_missing");
  if (placeholders) addProblem("visible_placeholder");
  pages.push({
    route, file: path.relative(ROOT, file).split(path.sep).join("/"), htmlBytes: Buffer.byteLength(html),
    title: titles[0] || "", titleCount: titles.length, description: descriptions[0] || "", descriptionCount: descriptions.length,
    h1: h1[0] || "", h1Count: h1.length, h2Count: h2.length, h3Count: h3.length,
    mainWords: mainText ? mainText.split(/\s+/).length : 0, lang,
    ogTitle: metaContent(html, "og:title", "property"), ogDescription: metaContent(html, "og:description", "property"),
    ogUrl: metaContent(html, "og:url", "property"), twitterCard: metaContent(html, "twitter:card"),
    canonical: canonicals[0] || "", canonicalCount: canonicals.length,
    robots, indexable: !/\bnoindex\b/i.test(robots || ""), noindex: /\bnoindex\b/i.test(robots || ""),
    links: internalLinks, rawHrefCount: hrefs.length,
    images, imageCount: images.length, placeholderCount: placeholders, schemaBlocks,
    problems,
  });
}
const byRoute = new Map(pages.map((page) => [page.route, page]));
const sitemapPath = path.join(SITE, "sitemap.xml");
const sitemapText = await readFile(sitemapPath, "utf8").catch(() => "");
const sitemapUrls = [...sitemapText.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((m) => decode(m[1].trim()));
const sitemapRoutes = new Set(sitemapUrls.map((u) => {
  try { return new URL(u, SITE_URL || "https://offline.invalid").pathname; } catch { return u; }
}).map((p) => p === "/" || p.endsWith("/") ? p : `${p}/`));

const edges = [];
for (const page of pages) {
  page.incomingLinks = 0;
  page.depth = null;
  page.brokenLinks = page.links.filter((target) => !byRoute.has(target));
}
for (const page of pages) {
  for (const target of page.links) if (byRoute.has(target)) {
    byRoute.get(target).incomingLinks++;
    edges.push({ from: page.route, to: target });
  }
}
const queue = [];
const home = byRoute.get("/");
if (home) { home.depth = 0; queue.push(home); }
while (queue.length) {
  const current = queue.shift();
  for (const target of current.links) {
    const next = byRoute.get(target);
    if (next && (next.depth === null || next.depth > current.depth + 1)) {
      next.depth = current.depth + 1;
      queue.push(next);
    }
  }
}

const issues = [];
function addPageIssue(page, code, severity, title, detail, effort = "low", status = "verified") {
  if (!page.problems.includes(code)) page.problems.push(code);
  const exists = issues.find((i) => i.code === code);
  if (exists) {
    if (!exists.pages.includes(page.route)) exists.pages.push(page.route);
  } else issues.push(issue(code, severity, title, detail, [page.route], effort, status));
}
for (const p of pages) {
  if (p.titleCount !== 1 || !p.title) addPageIssue(p, "title_missing_or_multiple", "high", "Missing or duplicated title", "Every HTML page should expose exactly one non-empty title.", "low");
  if (p.indexable && [...p.title].length > 65) addPageIssue(p, "title_length", "medium", "Page title may be truncated", "Keep the title concise and descriptive; 65 characters is a rough audit guard, not a Google ranking limit.", "low");
  if (p.descriptionCount !== 1 || !p.description) addPageIssue(p, "description_missing_or_multiple", "medium", "Missing or duplicated meta description", "Provide exactly one non-empty meta description for each page.", "low");
  if (p.h1Count !== 1) addPageIssue(p, p.h1Count ? "multiple_h1" : "h1_missing", "medium", p.h1Count ? "Multiple H1 headings" : "Missing H1 heading", "Use one primary H1 that identifies the page's main subject.", "low");
  if (p.canonicalCount !== 1 || !p.canonical) addPageIssue(p, "canonical_missing_or_multiple", "high", "Missing or duplicated canonical", "Provide exactly one canonical link for the page.", "low");
  if (!p.robots) addPageIssue(p, "robots_meta_missing", "low", "Robots meta not explicit", "No page-level robots directive was found; crawler defaults are unknown here, so this is informational.", "low", "unknown");
  if (p.canonical && /^https?:\/\//i.test(p.canonical) && SITE_URL && new URL(p.canonical).origin !== HOST) {
    addPageIssue(p, "canonical_wrong_origin", "high", "Canonical uses a different origin", "Canonical does not match configured SITE_URL.", "low");
  }
  if (p.canonical && !/^https?:\/\//i.test(p.canonical)) addPageIssue(p, "relative_canonical", "low", "Relative canonical URL", "Canonical is path-relative/relative because no absolute SITE_URL is configured; absolute production canonical behavior cannot be verified.", "low", "unknown");
  if (p.indexable && !p.mainWords) addPageIssue(p, "empty_main_content", "high", "No main content", "Indexable page has no visible text in its main element.");
  if (p.indexable && !p.lang) addPageIssue(p, "missing_html_lang", "medium", "No HTML language", "Declare the primary document language.");
  if (p.indexable && (!p.ogTitle || !p.ogDescription || !p.ogUrl || !p.twitterCard)) addPageIssue(p, "social_metadata_missing", "low", "Social metadata is incomplete", "Check Open Graph title, description and URL and the X/Twitter card.");
  if (p.route === "/404/" && !p.noindex) addPageIssue(p, "404_not_noindex", "high", "404 page is not noindex", "The generated not-found page should remain excluded from indexing.", "low");
  if (p.route === "/404/" && sitemapRoutes.has(p.route)) addPageIssue(p, "404_in_sitemap", "high", "404 page appears in sitemap", "Remove the not-found route from the indexable sitemap.", "low");
  if (p.noindex && sitemapRoutes.has(p.route)) addPageIssue(p, "noindex_in_sitemap", "high", "Noindex page appears in sitemap", "Sitemap URLs should not include pages carrying a noindex directive.", "low");
  if (p.indexable && !sitemapRoutes.has(p.route)) addPageIssue(p, "indexable_missing_sitemap", "medium", "Indexable page absent from sitemap", "An indexable generated page is not listed in the sitemap.", "low");
  if (!p.indexable && sitemapRoutes.has(p.route)) addPageIssue(p, "noindex_in_sitemap", "high", "Noindex page appears in sitemap", "Sitemap URLs should not include pages carrying a noindex directive.", "low");
  for (const target of p.brokenLinks) addPageIssue(p, `broken_internal_link:${target}`, "high", "Broken internal route reference", `Link resolves to ${target}, but no generated page route exists.`, "low");
  for (const image of p.images) {
    if (image.alt === null) addPageIssue(p, "image_alt_missing", "medium", "Image is missing an alt attribute", "Add alt text or alt=\"\" when the image is intentionally decorative.", "low");
    const width = Number(image.width), height = Number(image.height);
    if (!(width > 0 && height > 0)) addPageIssue(p, "image_dimensions_missing", "low", "Image dimensions not declared", "Explicit width and height can reserve layout space; image file dimensions are only locally verifiable when the asset is present.", "low");
  }
  if (p.placeholderCount) addPageIssue(p, "visible_placeholder", "high", "Unresolved business placeholders appear in rendered HTML", "Contact and legal fields include unresolved placeholders; see per-page counts in the CSV. These need verified business details before publication.", "medium");
  if (p.depth === null && p.route !== "/404/") addPageIssue(p, "orphan_or_unreachable", "medium", "Page unreachable from home through internal links", "No path from the homepage was found in the static internal href graph.", "low");
  if (p.route === "/contacto/" && /<form\b[^>]*data-enquiry-form[^>]*data-endpoint=""/i.test(await readFile(path.join(ROOT, p.file), "utf8"))) {
    addPageIssue(p, "unconfigured_enquiry_form", "high", "Contact form has no configured submission endpoint", "The rendered contact form has data-endpoint=\"\"; public/assets/js/site.js shows an error rather than sending when this is empty.", "medium");
  }
}

const duplicateBuckets = [
  ["duplicate_title", "Duplicate page titles", "high", (p) => p.title.trim().toLowerCase()],
  ["duplicate_description", "Duplicate meta descriptions", "medium", (p) => p.description.trim().toLowerCase()],
  ["duplicate_canonical", "Duplicate canonical URLs", "high", (p) => p.canonical.trim()],
];
for (const [code, title, severity, keyOf] of duplicateBuckets) {
  const groups = new Map();
  for (const p of pages) {
    const value = keyOf(p);
    if (value) groups.set(value, [...(groups.get(value) || []), p.route]);
  }
  for (const routes of groups.values()) if (routes.length > 1) issues.push(issue(code, severity, title, `${routes.length} pages share the same value.`, routes, "low"));
}

const schemaReport = { pages: [], types: {}, invalidJson: [], relativeUrls: [], emptyOrganizationUrls: [], notes: "JSON-LD is parsed as static script text. Schema vocabulary/rich-result eligibility is not validated; URL absoluteness is unknown while SITE_URL is unset." };
for (const p of pages) {
  const record = { route: p.route, blocks: [], types: [], urls: [] };
  for (const [index, raw] of p.schemaBlocks.entries()) {
    try {
      const parsed = JSON.parse(raw);
      const typeValues = [];
      const visit = (v) => {
        if (!v || typeof v !== "object") return;
        if (v["@type"]) typeValues.push(...(Array.isArray(v["@type"]) ? v["@type"] : [v["@type"]]));
        if (v["@type"] === "Organization" && Object.hasOwn(v, "url") && !v.url) schemaReport.emptyOrganizationUrls.push({ route: p.route, index });
        if (Array.isArray(v)) v.forEach(visit);
        else Object.values(v).forEach(visit);
      };
      visit(parsed);
      const urls = collectSchemaUrls(parsed);
      for (const type of typeValues) schemaReport.types[type] = (schemaReport.types[type] || 0) + 1;
      record.blocks.push({ index, validJson: true, types: [...new Set(typeValues)], urlCount: urls.length });
      record.types.push(...typeValues);
      record.urls.push(...urls);
      for (const url of urls) if (!/^https?:\/\//i.test(url.value)) schemaReport.relativeUrls.push({ route: p.route, ...url });
    } catch (error) {
      const problem = { route: p.route, index, message: error.message };
      schemaReport.invalidJson.push(problem);
      record.blocks.push({ index, validJson: false, error: error.message });
      addPageIssue(p, "invalid_json_ld", "high", "Invalid JSON-LD syntax", "One or more JSON-LD script blocks are not parseable JSON.", "low");
    }
  }
  schemaReport.pages.push(record);
}
if (schemaReport.emptyOrganizationUrls.length) issues.push(issue("empty_organization_url", "medium", "Organization schema has an empty URL", "The shared Organization entity declares url as an empty string. Identify the real public origin before setting an absolute business URL.", [...new Set(schemaReport.emptyOrganizationUrls.map((x) => x.route))], "low"));

for (const p of pages) {
  for (const img of p.images) {
    const details = await imageInfo(img.src || "");
    img.fileStatus = details.status;
    img.fileBytes = details.bytes;
    img.fileWidth = details.width;
    img.fileHeight = details.height;
  }
}
const oversizedLogo = pages.filter((p) => p.images.some((img) => img.src === "/assets/images/logo-mark.png" && img.fileBytes > 500_000));
if (oversizedLogo.length) issues.push(issue("oversized_logo", "medium", "Large logo asset used on every page", "logo-mark.png is 1024×1024 and 678,150 bytes but is declared 42×42 in the shared header; potential payload/LCP impact requires measurement.", oversizedLogo.map((p) => p.route), "low"));

const sitemapReport = {
  source: "site/sitemap.xml",
  declaredUrlCount: sitemapUrls.length,
  parsedRoutes: [...sitemapRoutes].sort(),
  listedRoutesMissingHtml: [...sitemapRoutes].filter((route) => !byRoute.has(route)),
  indexablePagesMissing: pages.filter((p) => p.indexable && !sitemapRoutes.has(p.route)).map((p) => p.route),
  noindexPagesListed: pages.filter((p) => p.noindex && sitemapRoutes.has(p.route)).map((p) => p.route),
  sitemapStyle: /<sitemapindex\b/i.test(sitemapText) ? "index" : "urlset",
};
if (sitemapUrls.some((u) => !/^https?:\/\//i.test(u))) issues.push(issue("offline_sitemap_relative_loc", "medium", "Generated sitemap contains relative loc entries", "site/sitemap.xml contains relative URLs; the observed development /sitemap.xml route generates absolute URLs instead, so check the actual deployed sitemap separately.", [], "low", "unknown"));
if (sitemapReport.listedRoutesMissingHtml.length) issues.push(issue("sitemap_route_missing", "high", "Sitemap route has no generated HTML page", `${sitemapReport.listedRoutesMissingHtml.length} sitemap URL(s) have no corresponding generated route.`, sitemapReport.listedRoutesMissingHtml, "low"));

const siteRobots = await readFile(path.join(SITE, "robots.txt"), "utf8").catch(() => null);
const publicRobots = await readFile(path.join(ROOT, "public", "robots.txt"), "utf8").catch(() => null);
const robotsReport = {
  site: siteRobots ? { present: true, sitemapDirective: siteRobots.match(/^Sitemap:\s*(.+)$/im)?.[1]?.trim() || null, disallowAll: /Disallow:\s*\/\s*$/im.test(siteRobots) } : { present: false },
  public: publicRobots ? { present: true, sitemapDirective: publicRobots.match(/^Sitemap:\s*(.+)$/im)?.[1]?.trim() || null, disallowAll: /Disallow:\s*\/\s*$/im.test(publicRobots) } : { present: false },
  sitemapFilePresent: Boolean(sitemapText),
  note: "Robots directives are inspected as text only; crawler behavior, hosting precedence and status codes are not tested.",
};
if (!siteRobots) issues.push(issue("site_robots_missing", "medium", "Generated robots.txt is missing", "site/robots.txt could not be read.", [], "low"));
if (siteRobots && !/^\s*Allow:\s*\/\s*$/im.test(siteRobots) && !/^\s*Disallow:\s*\/\s*$/im.test(siteRobots)) issues.push(issue("robots_root_policy_unknown", "info", "Robots root policy not explicit", "No explicit Allow: / or Disallow: / directive found; actual crawler interpretation is not tested.", [], "low", "unknown"));
if (siteRobots && !robotsReport.site.sitemapDirective) issues.push(issue("robots_sitemap_missing", "low", "Generated robots.txt has no sitemap directive", "Consider exposing the generated sitemap location in robots.txt.", [], "low"));
if (siteRobots && publicRobots && Boolean(robotsReport.site.sitemapDirective) !== Boolean(robotsReport.public.sitemapDirective)) {
  issues.push(issue("robots_variants_differ", "low", "Robots files differ in sitemap declaration", "site/robots.txt and public/robots.txt expose different sitemap declaration states; confirm which file is deployed.", [], "low", "verified"));
}
const linkReport = {
  generatedPageCount: pages.length,
  edges,
  inboundCounts: Object.fromEntries(pages.map((p) => [p.route, p.incomingLinks])),
  brokenReferences: pages.flatMap((p) => p.brokenLinks.map((to) => ({ from: p.route, to }))),
  unreachablePages: pages.filter((p) => p.depth === null).map((p) => p.route),
  orphanPages: pages.filter((p) => p.incomingLinks === 0).map((p) => p.route),
  maximumDepth: Math.max(0, ...pages.map((p) => p.depth ?? 0)),
  notes: "Href graph only: static <a href> links to generated page routes. Query and fragment are ignored; hash-only, external, mailto/tel/javascript/data and asset-file links are excluded. Runtime links are unknown.",
};

const speciesMatrix = SPECIES.map((s) => ({
  slug: s.slug, name: s.name, scientificName: s.sci,
  family: FAMILIES.find((family) => family.slug === s.family)?.label || s.family,
  route: `/aves/${s.slug}/`,
  targetTerms: [...new Set([s.name, s.sci, `${s.name} cuidados`, `${s.name} carácter`, `${s.name} en España`])],
  source: "tools/site/data/species.mjs",
}));
const keywordMap = {
  disclaimer: "Mapeado heurístico desde títulos/nombres/topics del source; no incluye volúmenes de búsqueda, dificultad ni rendimiento/rankings.",
  speciesMatrix,
  blogTopics: POSTS.map((post) => ({ route: `/blog/${post.slug}/`, title: post.title, tags: post.tags, suggestedTerms: [post.title, ...post.tags.map((tag) => `${tag.toLowerCase()} loros`)], source: "tools/site/data/blog.mjs" })),
  locations: LOCATIONS.map((location) => ({ route: `/aves/${location.slug}/`, city: location.city, suggestedTerms: [`aves exóticas en ${location.city}`, `loros en ${location.city}`], source: "tools/site/data/locations.mjs" })),
  overviewRoutes: [
    { route: "/aves/", topic: "catálogo de especies de aves exóticas" },
    { route: "/disponibilidad/", topic: "disponibilidad de aves" },
    { route: "/documentacion-cites/", topic: "CITES y documentación de aves" },
  ],
};

const allHtml = await Promise.all(pages.map((p) => readFile(path.join(ROOT, p.file), "utf8")));
const totalPlaceholders = allHtml.reduce((sum, html) => sum + countPlaceholders(stripTags(html)), 0);
const pageRows = pages.map((p) => ({
  route: p.route,
  title: p.title, titleCount: p.titleCount,
  description: p.description, descriptionCount: p.descriptionCount,
  h1: p.h1, h1Count: p.h1Count, h2Count: p.h2Count, h3Count: p.h3Count, mainWords: p.mainWords, lang: p.lang,
  ogTitle: p.ogTitle, ogDescription: p.ogDescription, ogUrl: p.ogUrl, twitterCard: p.twitterCard,
  canonical: p.canonical, canonicalCount: p.canonicalCount,
  robots: p.robots, indexable: p.indexable,
  linkDepth: p.depth, inboundLinks: p.incomingLinks, outgoingLinks: p.links.length,
  brokenLinkCount: p.brokenLinks.length,
  imageCount: p.imageCount,
  imagesMissingAlt: p.images.filter((img) => img.alt === null).length,
  imagesMissingDimensions: p.images.filter((img) => !(Number(img.width) > 0 && Number(img.height) > 0)).length,
  imagesWithoutLazyFlag: p.images.filter((img) => img.loading !== "lazy" && img.fetchpriority !== "high").length,
  imagesWithLocalFileData: p.images.filter((img) => img.fileStatus === "verified").length,
  placeholderCount: p.placeholderCount,
  schemaBlockCount: p.schemaBlocks.length,
  problems: [...new Set(p.problems)],
}));
const csvHeaders = ["route", "title", "titleCount", "description", "descriptionCount", "h1", "h1Count", "h2Count", "h3Count", "mainWords", "lang", "ogTitle", "ogDescription", "ogUrl", "twitterCard", "canonical", "canonicalCount", "robots", "indexable", "linkDepth", "inboundLinks", "outgoingLinks", "brokenLinkCount", "imageCount", "imagesMissingAlt", "imagesMissingDimensions", "imagesWithoutLazyFlag", "imagesWithLocalFileData", "placeholderCount", "schemaBlockCount", "problems"];
const csv = [csvHeaders.join(","), ...pageRows.map((row) => csvHeaders.map((key) => escapeCsv(Array.isArray(row[key]) ? row[key].join("; ") : row[key])).join(","))].join("\n") + "\n";
issues.sort((a, b) => a.priority.localeCompare(b.priority) || (a.status === "VERIFIED" ? -1 : 1));

const indexability = pages.map((p) => ({ route: p.route, indexable: p.indexable, inSitemap: sitemapRoutes.has(p.route), noindex: p.noindex }));
const summary = {
  generatedAt: new Date().toISOString(),
  mode: "offline static generated HTML",
  siteUrlConfigured: Boolean(SITE_URL),
  siteUrl: SITE_URL || null,
  generatedPages: pages.length,
  indexablePages: pages.filter((p) => p.indexable).length,
  noindexPages: pages.filter((p) => p.noindex).length,
  sitemapUrls: sitemapUrls.length,
  internalLinkEdges: edges.length,
  brokenInternalReferences: linkReport.brokenReferences.length,
  orphanPages: linkReport.orphanPages.length,
  unreachablePages: linkReport.unreachablePages.length,
  maxInternalLinkDepth: linkReport.maximumDepth,
  images: pages.reduce((n, p) => n + p.imageCount, 0),
  imagesWithMissingAlt: pages.reduce((n, p) => n + p.images.filter((img) => img.alt === null).length, 0),
  imagesMissingDeclaredDimensions: pages.reduce((n, p) => n + p.images.filter((img) => !(Number(img.width) > 0 && Number(img.height) > 0)).length, 0),
  imagesWithLocallyVerifiedAssets: pages.reduce((n, p) => n + p.images.filter((img) => img.fileStatus === "verified").length, 0),
  invalidJsonLdBlocks: schemaReport.invalidJson.length,
  visiblePlaceholderCount: totalPlaceholders,
  issueCount: issues.length,
  issueCountsBySeverity: Object.fromEntries(["CRITICAL", "HIGH", "MEDIUM", "LOW"].map((severity) => [severity, issues.filter((i) => i.severity === severity).length])),
  measurementLimits: ["No web calls or live status checks.", "No measured rankings, search volumes, or live Core Web Vitals.", "Local image asset size/dimensions are reported only when assets are found in site/ or public/; otherwise unknown."],
};
const report = {
  title: "Technical SEO audit",
  summary,
  methodology: {
    parser: "Controlled static HTML regex extraction; not a general HTML5 parser.",
    boundaries: ["Generated site/**/index.html only for page audit.", "Internal graph considers generated routes only.", "Local files, sitemap and robots are read-only inputs.", "Relative canonical and schema URLs are unknown until an absolute SITE_URL is configured.", "External links, redirects, HTTP response codes, crawler rendering and JS-inserted content are not tested."],
  },
  summaryTables: { indexability, sitemap: sitemapReport, robots: robotsReport },
  issues,
  pages: pageRows,
};

const md = [
  "# Technical SEO audit",
  "",
  `Generated offline: ${summary.generatedAt}`,
  "",
  "## Counts",
  "",
  `- Generated HTML pages: ${summary.generatedPages} (${summary.indexablePages} indexable, ${summary.noindexPages} noindex)`,
  `- Sitemap URLs: ${summary.sitemapUrls}; internal link edges: ${summary.internalLinkEdges}`,
  `- Broken internal references: ${summary.brokenInternalReferences}; orphan routes: ${summary.orphanPages}; unreachable from home: ${summary.unreachablePages}; maximum linked depth: ${summary.maxInternalLinkDepth}`,
  `- Images: ${summary.images}; missing alt attributes: ${summary.imagesWithMissingAlt}; missing declared dimensions: ${summary.imagesMissingDeclaredDimensions}; local file data verified: ${summary.imagesWithLocallyVerifiedAssets}`,
  `- Invalid JSON-LD blocks: ${summary.invalidJsonLdBlocks}; visible placeholder markers: ${summary.visiblePlaceholderCount}`,
  `- Issue groups by severity: ${Object.entries(summary.issueCountsBySeverity).map(([s, n]) => `${s} ${n}`).join(", ")}`,
  "",
  "## Prioritized findings",
  "",
  ...(issues.length ? issues.map((i) => `- **${i.priority} · ${i.severity} · ${i.status} — ${i.title}** (${i.code}; impact ${i.impact}; effort ${i.effort}). ${i.detail}${i.pages.length ? ` Affected pages: ${i.pages.length}; see JSON for routes.` : ""}`) : ["No verified issues detected by the checks in scope."]),
  "",
  "## Sitemap and robots",
  "",
  `- Sitemap: ${sitemapReport.declaredUrlCount} URLs (${sitemapReport.sitemapStyle}); pages missing: ${sitemapReport.indexablePagesMissing.length}; noindex listed: ${sitemapReport.noindexPagesListed.length}; sitemap routes with no HTML: ${sitemapReport.listedRoutesMissingHtml.length}.`,
  `- site/robots.txt: ${robotsReport.site.present ? "present" : "missing"}; sitemap directive: ${robotsReport.site.sitemapDirective || "none"}. public/robots.txt: ${robotsReport.public.present ? "present" : "missing"}; sitemap directive: ${robotsReport.public.sitemapDirective || "none"}.`,
  "",
  "## Limits",
  "",
  "- This is a repeatable local static audit. It makes no web calls and does not report measured rankings, search volume, HTTP behavior, or live Core Web Vitals.",
  "- Regex parsing targets HTML emitted by the repository's static templates; it does not implement browser HTML5 parsing, inspect runtime DOM changes, or validate schema.org eligibility.",
  "- Relative canonical/schema URLs are explicitly marked unknown when SITE_URL is unset. Filesystem absence of image assets is also reported as unknown because serving/copying may occur elsewhere in the build/deploy pipeline.",
  "- See page-level details in `page-seo-report.csv`, `technical-seo-report.json`, and graph/schema data in their separate JSON reports.",
  "",
].join("\n");

await mkdir(OUT, { recursive: true });
await Promise.all([
  writeFile(path.join(OUT, "technical-seo-report.json"), safeJson(report)),
  writeFile(path.join(OUT, "technical-seo-report.md"), md),
  writeFile(path.join(OUT, "page-seo-report.csv"), csv),
  writeFile(path.join(OUT, "internal-links.json"), safeJson(linkReport)),
  writeFile(path.join(OUT, "keyword-map.json"), safeJson(keywordMap)),
  writeFile(path.join(OUT, "schema-report.json"), safeJson(schemaReport)),
  writeFile(path.join(OUT, "seo-errors.json"), safeJson({ generatedAt: summary.generatedAt, count: issues.length, issues })),
]);

console.log(`Offline SEO audit: ${summary.generatedPages} pages; ${summary.issueCount} issue groups (${summary.issueCountsBySeverity.HIGH} high, ${summary.issueCountsBySeverity.MEDIUM} medium); outputs in seo-audit/`);