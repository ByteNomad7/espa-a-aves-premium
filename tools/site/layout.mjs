import { SITE_URL, BRAND, NAV, FOOTER_NAV, LEGAL_NAV, LOCALE, STATUS } from "./config.mjs";

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const url = (path) => SITE_URL + path;

export const jsonld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

export function breadcrumbs(trail) {
  // trail: [{href,label}...] última = página actual
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.label)}</li>`
        : `<li><a href="${t.href}">${esc(t.label)}</a></li>`,
    )
    .join("");
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: url(t.href),
    })),
  };
  return `<nav class="breadcrumbs" aria-label="Ruta de navegación"><div class="container"><ol>${items}</ol></div></nav>${jsonld(schema)}`;
}

export function statusBadge(key) {
  const s = STATUS[key] || STATUS.consultar;
  return `<span class="badge badge--${s.tone}">${esc(s.label)}</span>`;
}

function header(active) {
  const links = NAV.map(
    (n) =>
      `<li><a href="${n.href}"${active === n.href ? ' aria-current="page"' : ""}>${esc(n.label)}</a></li>`,
  ).join("");
  return `<a class="skip-link" href="#contenido">Saltar al contenido principal</a>
<header class="site-header">
  <div class="container site-header__inner">
    <a class="logo" href="/" aria-label="${esc(BRAND.name)} — inicio">
      <img class="logo__mark" src="/assets/images/logo-mark.png" width="42" height="42" alt="" aria-hidden="true">
      <span class="logo__text">${esc(BRAND.name)}</span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-principal">
      <span class="nav-toggle__bars" aria-hidden="true"></span>
      <span class="nav-toggle__label">Menú</span>
    </button>
    <nav id="nav-principal" class="site-nav" aria-label="Navegación principal">
      <ul>${links}</ul>
      <a class="btn btn--primary btn--sm site-nav__cta" href="/contacto/">Consultar disponibilidad</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const nav = FOOTER_NAV.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("");
  const legal = LEGAL_NAV.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("");
  const social = Object.entries(BRAND.social)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<li><a href="${esc(v)}" rel="noopener noreferrer external" target="_blank">${esc(k)}</a></li>`,
    )
    .join("");
  return `<footer class="site-footer">
  <div class="container site-footer__grid">
    <div>
      <p class="site-footer__brand">${esc(BRAND.name)}</p>
      <p class="muted">Cría y asesoramiento responsable de aves exóticas en España. Información transparente antes, durante y después de la entrega.</p>
      ${social ? `<ul class="site-footer__social">${social}</ul>` : ""}
    </div>
    <nav aria-label="Enlaces del sitio">
      <h2 class="site-footer__title">Secciones</h2>
      <ul>${nav}</ul>
    </nav>
    <nav aria-label="Información legal">
      <h2 class="site-footer__title">Legal</h2>
      <ul>${legal}</ul>
    </nav>
    <div>
      <h2 class="site-footer__title">Contacto</h2>
      <ul class="site-footer__contact">
        <li>Email: ${esc(BRAND.email)}</li>
        <li>Teléfono / WhatsApp: ${esc(BRAND.phone)}</li>
        <li>Horario: ${esc(BRAND.hours)}</li>
        <li>Cobertura: ${esc(BRAND.coverage)}</li>
      </ul>
    </div>
  </div>
  <div class="container site-footer__bottom">
    <p>© <span data-year>2026</span> ${esc(BRAND.name)}. Los datos legales de la empresa se completarán antes de la publicación.</p>
  </div>
</footer>`;
}

/**
 * Renderiza una página completa.
 * @param {object} o
 * @param {string} o.path ruta canónica con barra final, p. ej. "/aves/"
 */
export function page(o) {
  const canonical = url(o.path);
  const ogImage = o.image ? url(o.image) : url("/assets/images/og-default.jpg");
  const analytics = BRAND.gaId
    ? `<script defer src="/assets/js/analytics.js" data-ga-id="${esc(BRAND.gaId)}"></script>`
    : "";
  const verify = BRAND.gscToken
    ? `<meta name="google-site-verification" content="${esc(BRAND.gscToken)}">`
    : "";
  return `<!DOCTYPE html>
<html lang="${LOCALE.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}">
<link rel="canonical" href="${canonical}">
${o.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
${verify}
<meta property="og:type" content="${o.ogType || "website"}">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="${esc(BRAND.name)}">
<meta property="og:title" content="${esc(o.ogTitle || o.title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(o.ogTitle || o.title)}">
<meta name="twitter:description" content="${esc(o.description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.png" type="image/png">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/css/site.css">
${(o.head || []).join("\n")}
</head>
<body>
${header(o.active || o.path)}
${o.breadcrumbs ? breadcrumbs(o.breadcrumbs) : ""}
<main id="contenido">
${o.body}
</main>
${footer()}
<script defer src="/assets/js/site.js"></script>
${o.scripts || ""}
${analytics}
</body>
</html>
`;
}
