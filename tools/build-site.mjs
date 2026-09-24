/**
 * Generador estático.
 *   bun tools/build-site.mjs
 * Escribe páginas HTML reales en /site (una carpeta por URL) y el sitemap.
 * Las páginas se sirven en rutas limpias mediante src/routes/$.tsx.
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SITE_URL, BRAND, LEGAL_NAV } from "./site/config.mjs";
import { page, esc, jsonld, url } from "./site/layout.mjs";
import { speciesCard, faqList, ctaBand, cookieBar, orgSchema, enquiryForm } from "./site/components.mjs";
import { SPECIES, FAMILIES, familyLabel, bySlug } from "./site/data/species.mjs";
import { POSTS, AUTHOR } from "./site/data/blog.mjs";
import { LOCATIONS } from "./site/data/locations.mjs";
import * as P from "./site/pages.mjs";

const OUT = path.resolve(fileURLToPath(new URL("../site", import.meta.url)));
const crumbHome = { href: "/", label: "Inicio" };
const crumbAves = { href: "/aves/", label: "Aves" };
const written = [];

async function emit(pathname, html, { index = true } = {}) {
  const dir = path.join(OUT, pathname === "/" ? "" : pathname.replace(/^\/|\/$/g, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html, "utf8");
  written.push({ pathname, index });
}

/* ---------------- Catálogo ---------------- */
function catalogPage() {
  const cards = SPECIES.map((s, i) => speciesCard(s, { eager: i < 2 })).join("");
  const filters = `<div class="filters" data-filters hidden>
    <button type="button" data-filter="todas" aria-pressed="true">Todas</button>
    ${FAMILIES.map((f) => `<button type="button" data-filter="${f.slug}" aria-pressed="false">${esc(f.label)}</button>`).join("")}
  </div>
  <noscript><p class="muted">Los filtros interactivos requieren JavaScript. Todas las especies se muestran a continuación agrupadas en un único listado.</p></noscript>`;

  return {
    path: "/aves/",
    title: "Catálogo de aves exóticas: especies y fichas",
    description:
      "Fichas de loros y psitácidas: carácter, tamaño, longevidad, nivel de ruido, cuidados y nivel de experiencia recomendado.",
    breadcrumbs: [crumbHome, crumbAves],
    body: `<section class="page-hero"><div class="container">
      <h1>Catálogo de aves</h1>
      <p class="lead">Doce especies documentadas con la información que realmente condiciona la convivencia: espacio, ruido, dieta, carácter y experiencia necesaria. La disponibilidad se confirma de forma individual.</p>
    </div></section>
    <section class="section">
      <div class="container">
        ${filters}
        <p class="muted" style="font-size:var(--fs-sm)">Mostrando <span data-count>${SPECIES.length}</span> especies.</p>
        <div class="grid grid--3">${cards}</div>
        <p class="catalog-empty" data-empty hidden>No hay especies en esta categoría en este momento. <a href="/contacto/">Escríbenos</a> y te informamos.</p>

        <h2 style="margin-top:var(--s-8)">Categorías</h2>
        <ul>
          ${FAMILIES.map(
            (f) =>
              `<li><a href="/aves/?familia=${f.slug}">${esc(f.label)}</a>: ${SPECIES.filter((s) => s.family === f.slug).map((s) => `<a href="/aves/${s.slug}/">${esc(s.name)}</a>`).join(", ") || "próximamente"}</li>`,
          ).join("")}
        </ul>

        <h2>Antes de elegir</h2>
        <p>Si dudas entre varias especies, empieza por la <a href="/blog/como-elegir-un-loro-adecuado/">guía de elección</a> y la <a href="/tenencia-responsable/">tenencia responsable</a>. También puedes comparar tres de las más consultadas en el artículo sobre las <a href="/blog/diferencias-yaco-amazona-eclectus/">diferencias entre yaco, amazona y eclectus</a>.</p>

        <h2>Zonas con información específica</h2>
        <ul>${LOCATIONS.map((l) => `<li><a href="/aves/${l.slug}/">Aves en ${esc(l.city)}</a></li>`).join("")}</ul>
      </div>
    </section>
    ${ctaBand({ title: "¿No sabes por dónde empezar?", secondary: { href: "/disponibilidad/", label: "Ver disponibilidad" } })}`,
    scripts: jsonld({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Catálogo de especies",
      itemListElement: SPECIES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: url(`/aves/${s.slug}/`),
      })),
    }),
  };
}

/* ---------------- Ficha de especie ---------------- */
function speciesPage(s) {
  const S = s.sections;
  const related = (s.related || []).map(bySlug).filter(Boolean);
  const factRows = [
    ["Nombre científico", `<em>${esc(s.sci)}</em>`],
    ["Origen", esc(s.facts.origen)],
    ["Tamaño", esc(s.facts.tamano)],
    ["Longevidad", esc(s.facts.vida)],
    ["Temperamento", esc(s.facts.caracter)],
    ["Nivel de ruido", esc(s.facts.ruido)],
    ["Necesidades sociales", esc(s.facts.social)],
    ["Experiencia recomendada", esc(s.facts.nivel)],
  ];
  const section = (id, title, html) => `<h2 id="${id}">${title}</h2>${html}`;

  return {
    path: `/aves/${s.slug}/`,
    title: `${s.name} (${s.sci}): carácter, cuidados y disponibilidad`,
    description: `Ficha completa del ${s.name.toLowerCase()}: temperamento, cuidados, alimentación, alojamiento, salud, documentación y disponibilidad en España.`,
    image: s.image,
    ogType: "article",
    active: "/aves/",
    breadcrumbs: [crumbHome, crumbAves, { href: `/aves/${s.slug}/`, label: s.name }],
    body: `<section class="section section--tight">
  <div class="container">
    <div class="split">
      <div>
        <p class="eyebrow">${esc(familyLabel(s.family))}</p>
        <h1>${esc(s.name)}</h1>
        <p class="card__sci" style="font-size:var(--fs-base)">${esc(s.sci)}</p>
        <p class="lead">${esc(s.intro)}</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="/contacto/">Consultar disponibilidad</a>
          <a class="btn btn--ghost" href="/como-comprar/">Cómo funciona el proceso</a>
        </div>
      </div>
      <div>
        <img src="${s.image}" alt="${esc(s.alt)}" width="1000" height="750" fetchpriority="high" decoding="async"
          style="border-radius:var(--radius-lg);box-shadow:var(--shadow-md)">
      </div>
    </div>

    <div class="gallery" style="margin-top:var(--s-6)" aria-label="Galería de ${esc(s.name)}">
      ${(s.photos || [s.image])
        .map(
          (photo, index) =>
            `<img src="${photo}" alt="${esc(s.name)}, fotografía real ${index + 1}" width="600" height="450" loading="lazy" decoding="async">`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--tight section--alt">
  <div class="container layout-aside">
    <div class="prose">
      <h2 id="datos">Datos rápidos</h2>
      <div class="table-wrap"><table class="facts">
        <caption class="visually-hidden">Datos básicos del ${esc(s.name)}</caption>
        <tbody>${factRows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${v}</td></tr>`).join("")}</tbody>
      </table></div>

      ${section("caracteristicas", "Características", S.caracteristicas)}
      ${section("personalidad", "Personalidad", S.personalidad)}
      ${section("cuidados", "Cuidados", S.cuidados)}
      ${section("alimentacion", "Alimentación", S.alimentacion)}
      ${section("alojamiento", "Alojamiento", S.alojamiento)}
      ${section("enriquecimiento", "Enriquecimiento", S.enriquecimiento)}
      ${section("socializacion", "Socialización", S.socializacion)}
      ${section("salud", "Salud y veterinario", S.salud)}
      ${section("adecuado", "¿Es adecuado para ti?", S.adecuado)}
      ${section("documentacion", "Documentación y normativa", S.documentacion)}
      ${section("transporte", "Transporte", S.transporte)}

      <h2 id="disponibilidad">Disponibilidad</h2>
      <p>Estado actual de la especie: <strong>${
        { disponible: "Disponible", proximamente: "Próximamente", reservado: "Reservado", consultar: "Consultar disponibilidad", no_disponible: "No disponible actualmente" }[s.status]
      }</strong>. Los estados se gestionan desde un único origen de datos y se explican en la <a href="/disponibilidad/">página de disponibilidad</a>. Precio: ${esc(s.price || "consultar precio")}.</p>

      <h2 id="faq">Preguntas frecuentes sobre el ${esc(s.name.toLowerCase())}</h2>
      ${faqList(s.faq, { schema: true })}

      <h2>Guías relacionadas</h2>
      <ul>
        <li><a href="/blog/como-elegir-un-loro-adecuado/">Cómo elegir un loro adecuado para tu hogar</a></li>
        <li><a href="/blog/alimentacion-equilibrada-para-loros/">Alimentación equilibrada para loros</a></li>
        <li><a href="/blog/importancia-del-enriquecimiento-ambiental/">La importancia del enriquecimiento ambiental</a></li>
        <li><a href="/tenencia-responsable/">Tenencia responsable</a></li>
      </ul>
    </div>

    <aside class="aside-sticky">
      <div class="aside-card">
        <h2 style="font-size:var(--fs-lg)">Consultar esta especie</h2>
        <p class="muted" style="font-size:var(--fs-sm)">Te responderemos con la disponibilidad real y con una valoración honesta de si encaja en tu hogar.</p>
        <a class="btn btn--primary btn--block" href="/contacto/">Enviar consulta</a>
        <p class="muted" style="font-size:var(--fs-xs);margin-top:var(--s-3)">Enviar una consulta no supone una compra confirmada.</p>
        <hr>
        <h3 style="font-size:var(--fs-base)">En esta ficha</h3>
        <ul style="font-size:var(--fs-sm)">
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#cuidados">Cuidados</a></li>
          <li><a href="#alimentacion">Alimentación</a></li>
          <li><a href="#adecuado">¿Es adecuado para ti?</a></li>
          <li><a href="#faq">Preguntas frecuentes</a></li>
        </ul>
      </div>
    </aside>
  </div>
</section>

${
  related.length
    ? `<section class="section">
  <div class="container">
    <div class="section-head"><h2>Especies relacionadas</h2></div>
    <div class="grid grid--3">${related.map((r) => speciesCard(r)).join("")}</div>
  </div>
</section>`
    : ""
}
${ctaBand({ title: `¿Te interesa el ${s.name.toLowerCase()}?`, secondary: { href: "/tenencia-responsable/", label: "Leer sobre tenencia responsable" } })}`,
  };
}

/* ---------------- Blog ---------------- */
function blogIndexPage() {
  return {
    path: "/blog/",
    title: "Blog sobre loros: guías de cuidado, elección y normativa",
    description:
      "Artículos prácticos sobre elección de especie, alimentación, enriquecimiento, transporte, documentación CITES y bienestar de las psitácidas.",
    breadcrumbs: [crumbHome, { href: "/blog/", label: "Blog" }],
    body: `<section class="page-hero"><div class="container">
      <h1>Blog</h1>
      <p class="lead">Guías escritas para responder a las preguntas que recibimos de verdad. Pocas, largas y revisadas, en lugar de muchas y superficiales.</p>
    </div></section>
    <section class="section"><div class="container">
      <div class="grid grid--3">
      ${POSTS.map(
        (p) => `<article class="card">
        <div class="card__body">
          <div>${p.tags.map((t) => `<span class="badge badge--tag">${esc(t)}</span> `).join("")}</div>
          <h2 class="card__title" style="font-size:var(--fs-lg)"><a href="/blog/${p.slug}/">${esc(p.title)}</a></h2>
          <p class="card__text">${esc(p.excerpt)}</p>
          <div class="card__foot">
            <time class="muted" style="font-size:var(--fs-xs)" datetime="${p.updated}">Actualizado el ${formatDate(p.updated)}</time>
            <a class="btn btn--ghost btn--sm" href="/blog/${p.slug}/">Leer</a>
          </div>
        </div>
      </article>`,
      ).join("")}
      </div>
    </div></section>
    <section class="section"><div class="container">
      <h2>Para seguir leyendo</h2>
      <p>Los artículos remiten con frecuencia a dos secciones del sitio. Si estás valorando una especie concreta o quieres entender la parte documental antes de dar el paso, empieza por aquí.</p>
      <ul>
        <li><a href="/aves/">Catálogo de especies</a>: fichas con carácter, ruido, espacio y necesidades reales de cada psitácida.</li>
        <li><a href="/documentacion-cites/">CITES y documentación</a>: qué papeles acompañan al ejemplar y qué conviene preguntar antes de reservar.</li>
        <li><a href="/tenencia-responsable/">Tenencia responsable</a>: el compromiso diario que supone convivir con un loro durante décadas.</li>
      </ul>
    </div></section>
    ${ctaBand({ title: "¿Tienes una duda que no hemos cubierto?", secondary: { href: "/preguntas-frecuentes/", label: "Ver preguntas frecuentes" } })}`,
  };
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${y}`;
}

function blogPostPage(p) {
  const related = (p.related || []).map((r) => POSTS.find((x) => x.slug === r)).filter(Boolean);
  const species = (p.species || []).map(bySlug).filter(Boolean);
  return {
    path: `/blog/${p.slug}/`,
    title: `${p.title} | Blog`,
    description: p.description,
    ogType: "article",
    active: "/blog/",
    breadcrumbs: [crumbHome, { href: "/blog/", label: "Blog" }, { href: `/blog/${p.slug}/`, label: p.title }],
    body: `<article class="section">
  <div class="container container--narrow">
    <header style="margin-bottom:var(--s-6)">
      <div>${p.tags.map((t) => `<span class="badge badge--tag">${esc(t)}</span> `).join("")}</div>
      <h1>${esc(p.title)}</h1>
      <p class="muted" style="font-size:var(--fs-sm)">
        Por ${esc(AUTHOR)} · ${esc(BRAND.name)} ·
        Publicado el <time datetime="${p.published}">${formatDate(p.published)}</time> ·
        Actualizado el <time datetime="${p.updated}">${formatDate(p.updated)}</time>
      </p>
    </header>
    <div class="prose">${p.body}</div>
  </div>
</article>

${
  species.length
    ? `<section class="section section--alt"><div class="container">
  <div class="section-head"><h2>Especies mencionadas</h2></div>
  <div class="grid grid--3">${species.map((s) => speciesCard(s)).join("")}</div>
</div></section>`
    : ""
}

${
  related.length
    ? `<section class="section"><div class="container">
  <div class="section-head"><h2>Artículos relacionados</h2></div>
  <ul>${related.map((r) => `<li><a href="/blog/${r.slug}/">${esc(r.title)}</a></li>`).join("")}</ul>
</div></section>`
    : ""
}
${ctaBand({ title: "¿Quieres una recomendación personalizada?", secondary: { href: "/aves/", label: "Ver especies" } })}`,
    scripts: jsonld({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.title,
      description: p.description,
      inLanguage: "es-ES",
      datePublished: p.published,
      dateModified: p.updated,
      author: { "@type": "Organization", name: BRAND.name },
      publisher: { "@type": "Organization", name: BRAND.name },
      mainEntityOfPage: url(`/blog/${p.slug}/`),
    }),
  };
}

/* ---------------- Páginas de zona ---------------- */
function locationPage(l) {
  return {
    path: `/aves/${l.slug}/`,
    title: `Aves exóticas en ${l.city}: entrega, clima y elección de especie`,
    description: `Información práctica para quien busca un loro en ${l.city}: vivienda, ruido, clima, planificación del traslado y consulta de disponibilidad.`,
    active: "/aves/",
    breadcrumbs: [crumbHome, crumbAves, { href: `/aves/${l.slug}/`, label: l.city }],
    body: `<section class="page-hero"><div class="container">
      <h1>Aves exóticas en ${esc(l.city)}</h1>
      <p class="lead">${esc(l.intro)}</p>
    </div></section>
    <section class="section"><div class="container layout-aside">
      <div class="prose">${l.body}
        <h2>Antes de consultar desde ${esc(l.city)}</h2>
        <p>Revisa el <a href="/aves/">catálogo de especies</a> y la <a href="/disponibilidad/">disponibilidad</a>, y consulta el <a href="/como-comprar/">proceso completo</a>. Si tienes dudas sobre el traslado, la página de <a href="/transporte-de-aves/">transporte de aves</a> explica cómo se planifica cada entrega.</p>
        <p>Provincia y región de referencia: ${esc(l.region)}.</p>
      </div>
      <aside class="aside-sticky"><div class="aside-card">
        <h2 style="font-size:var(--fs-lg)">Consulta desde ${esc(l.city)}</h2>
        <p class="muted" style="font-size:var(--fs-sm)">Indícanos tu código postal para poder valorar el traslado de forma realista.</p>
        <a class="btn btn--primary btn--block" href="/contacto/">Enviar consulta</a>
      </div></aside>
    </div></section>
    ${ctaBand({ title: `¿Buscas un ave en ${l.city}?`, secondary: { href: "/transporte-de-aves/", label: "Ver cómo organizamos el transporte" } })}`,
  };
}

/* ---------------- Build ---------------- */
const defs = [
  P.home(),
  catalogPage(),
  ...SPECIES.map(speciesPage),
  ...LOCATIONS.map(locationPage),
  P.disponibilidad(),
  P.comoComprar(),
  P.transporte(),
  P.cites(),
  P.tenencia(),
  P.sobreNosotros(),
  P.contacto(),
  P.faq(),
  blogIndexPage(),
  ...POSTS.map(blogPostPage),
  P.avisoLegal(),
  P.privacidad(),
  P.cookies(),
  P.terminos(),
  P.notFound(),
];

await rm(OUT, { recursive: true, force: true });

for (const d of defs) {
  const extra = (d.scripts || "") + cookieBar() + (d.path === "/" ? orgSchema(SITE_URL) : "");
  const html = page({ ...d, scripts: extra });
  await emit(d.path, html, { index: !d.noindex });
}

/* Sitemap: sólo URLs canónicas indexables */
const urls = written
  .filter((w) => w.index)
  .map((w) => `  <url><loc>${SITE_URL}${w.pathname}</loc></url>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/1999/sitemaps/schema/0.9">
</urlset>`;
await writeFile(
  path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf8",
);
void sitemap;

/* robots.txt */
await writeFile(
  path.join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  "utf8",
);

console.log(`Generadas ${written.length} páginas HTML (+ sitemap.xml y robots.txt) en /site`);
console.log(written.map((w) => `  ${w.index ? " " : "N"} ${w.pathname}`).join("\n"));
void { LEGAL_NAV, enquiryForm };
