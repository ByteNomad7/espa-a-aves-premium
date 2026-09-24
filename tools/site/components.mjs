import { esc, statusBadge, jsonld } from "./layout.mjs";
import { STATUS, PRICE_FALLBACK, BRAND } from "./config.mjs";
import { familyLabel } from "./data/species.mjs";

/** Tarjeta de especie reutilizable (catálogo, home, relacionadas). */
export function speciesCard(s, { eager = false } = {}) {
  return `<article class="card" data-familia="${s.family}">
  <div class="card__media">
    <img src="${s.image}" alt="${esc(s.alt)}" width="800" height="600"
      loading="${eager ? "eager" : "lazy"}" ${eager ? 'fetchpriority="high"' : 'decoding="async"'}>
  </div>
  <div class="card__body">
    <div><span class="badge badge--tag">${esc(familyLabel(s.family))}</span></div>
    <h3 class="card__title"><a href="/aves/${s.slug}/">${esc(s.name)}</a></h3>
    <p class="card__sci">${esc(s.sci)}</p>
    <p class="card__text">${esc(s.intro)}</p>
    <ul class="card__meta">
      <li><span>Tamaño</span> <span>${esc(s.facts.tamano)}</span></li>
      <li><span>Longevidad</span> <span>${esc(s.facts.vida)}</span></li>
      <li><span>Carácter</span> <span>${esc(s.facts.caracter.split(",")[0])}</span></li>
      <li><span>Experiencia</span> <span>${esc(s.facts.nivel)}</span></li>
      <li><span>Precio</span> <span>${esc(s.price || PRICE_FALLBACK)}</span></li>
    </ul>
    <div class="card__foot">
      ${statusBadge(s.status)}
      <a class="btn btn--ghost btn--sm" href="/aves/${s.slug}/">Ver ficha de ${esc(s.name)}</a>
    </div>
  </div>
</article>`;
}

/** Acordeón accesible basado en <details>: funciona sin JavaScript. */
export function faqList(items, { group = true, schema = false } = {}) {
  const html = `<div ${group ? "data-accordion-group" : ""}>${items
    .map(
      ([q, a]) => `<details class="accordion">
  <summary>${esc(q)}</summary>
  <div class="accordion__body"><p>${a}</p></div>
</details>`,
    )
    .join("")}</div>`;
  if (!schema) return html;
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "") },
    })),
  };
  return html + jsonld(ld);
}

/** Leyenda de estados de disponibilidad (definición centralizada). */
export function statusLegend() {
  return `<div class="table-wrap"><table class="facts">
  <caption class="visually-hidden">Significado de cada estado de disponibilidad</caption>
  <tbody>
  ${Object.values(STATUS)
    .map(
      (s) =>
        `<tr><th scope="row"><span class="badge badge--${s.tone}">${esc(s.label)}</span></th><td>${esc(s.desc)}</td></tr>`,
    )
    .join("")}
  </tbody>
</table></div>`;
}

/** Formulario de consulta accesible y reutilizable. */
export function enquiryForm(speciesOptions, { id = "consulta" } = {}) {
  const options = speciesOptions
    .map((s) => `<option value="${esc(s.name)}">${esc(s.name)}</option>`)
    .join("");
  return `<form class="form" id="${id}" data-enquiry-form novalidate
  action="/como-comprar/" method="post" data-endpoint="">
  <p class="muted" style="font-size:var(--fs-sm)">Los campos marcados con * son obligatorios. Enviar una consulta no supone una compra confirmada.</p>
  <p class="muted" style="font-size:var(--fs-sm)">El envío automático todavía no está configurado. Puedes escribirnos directamente a <a href="mailto:${esc(BRAND.email)}">${esc(BRAND.email)}</a>.</p>

  <div class="form__row form__row--2">
    <div class="field">
      <label for="${id}-nombre">Nombre y apellidos *</label>
      <input id="${id}-nombre" name="nombre" type="text" autocomplete="name" required minlength="3">
      <p class="error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${id}-email">Email *</label>
      <input id="${id}-email" name="email" type="email" autocomplete="email" required>
      <p class="error" aria-live="polite"></p>
    </div>
  </div>

  <div class="form__row form__row--2">
    <div class="field">
      <label for="${id}-tel">Teléfono / WhatsApp *</label>
      <input id="${id}-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel" required pattern="[0-9+ ()\\-]{9,20}">
      <p class="hint">Formato español o internacional, con prefijo si procede.</p>
      <p class="error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${id}-provincia">Provincia *</label>
      <input id="${id}-provincia" name="provincia" type="text" autocomplete="address-level1" required>
      <p class="error" aria-live="polite"></p>
    </div>
  </div>

  <div class="form__row form__row--2">
    <div class="field">
      <label for="${id}-cp">Código postal *</label>
      <input id="${id}-cp" name="codigo_postal" type="text" autocomplete="postal-code" inputmode="numeric" required pattern="[0-9]{5}">
      <p class="error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${id}-especie">Especie de interés *</label>
      <select id="${id}-especie" name="especie" required>
        <option value="">Selecciona una especie</option>
        ${options}
        <option value="No lo tengo claro">Aún no lo tengo claro</option>
      </select>
      <p class="error" aria-live="polite"></p>
    </div>
  </div>

  <div class="form__row form__row--2">
    <div class="field">
      <label for="${id}-experiencia">Experiencia previa con aves *</label>
      <select id="${id}-experiencia" name="experiencia" required>
        <option value="">Selecciona una opción</option>
        <option value="ninguna">Ninguna</option>
        <option value="pequenas">He convivido con aves pequeñas</option>
        <option value="psitacidas-medianas">He convivido con psitácidas medianas</option>
        <option value="psitacidas-grandes">He convivido con psitácidas grandes</option>
      </select>
      <p class="error" aria-live="polite"></p>
    </div>
    <div class="field">
      <label for="${id}-contacto">Método preferido de contacto *</label>
      <select id="${id}-contacto" name="contacto_preferido" required>
        <option value="">Selecciona una opción</option>
        <option value="email">Email</option>
        <option value="telefono">Llamada telefónica</option>
        <option value="whatsapp">WhatsApp</option>
      </select>
      <p class="error" aria-live="polite"></p>
    </div>
  </div>

  <div class="field">
    <label for="${id}-mensaje">Mensaje *</label>
    <textarea id="${id}-mensaje" name="mensaje" required minlength="20"
      placeholder="Cuéntanos tu situación: tipo de vivienda, tiempo disponible, otras mascotas y qué dudas tienes."></textarea>
    <p class="error" aria-live="polite"></p>
  </div>

  <div class="field checkbox-field">
    <div class="checkbox">
      <input id="${id}-privacidad" name="privacidad" type="checkbox" required>
      <label for="${id}-privacidad">He leído y acepto la <a href="/politica-de-privacidad/">política de privacidad</a> y el tratamiento de mis datos para responder a esta consulta. *</label>
    </div>
    <p class="error" aria-live="polite"></p>
  </div>

  <div class="checkbox">
    <input id="${id}-newsletter" name="newsletter" type="checkbox">
    <label for="${id}-newsletter">Quiero recibir, de forma opcional, contenidos sobre cuidado de aves. Puedo darme de baja cuando quiera.</label>
  </div>

  <div class="honeypot" aria-hidden="true">
    <label for="${id}-website">No rellenar</label>
    <input id="${id}-website" name="website" type="text" tabindex="-1" autocomplete="off">
  </div>

  <div>
    <button class="btn btn--primary" type="submit">Enviar consulta</button>
  </div>

  <p class="form__status" data-form-status hidden role="status" aria-live="polite"></p>
  <p class="muted" style="font-size:var(--fs-xs)">
    Ningún dato se comparte con terceros con fines publicitarios. Este formulario no envía datos
    hasta que se configure un servicio de correo; esta página no contiene claves ni credenciales.
  </p>
</form>`;
}

/** Banda de CTA final reutilizable. */
export function ctaBand({
  title = "¿Tienes dudas sobre qué especie encaja contigo?",
  text = "Cuéntanos cómo es tu hogar, cuánto tiempo puedes dedicar y qué esperas de la convivencia. Te responderemos con información realista, incluso si la conclusión es que ahora no es el momento.",
  primary = { href: "/contacto/", label: "Consultar disponibilidad" },
  secondary = { href: "/como-comprar/", label: "Cómo funciona el proceso" },
} = {}) {
  return `<section class="section">
  <div class="container">
    <div class="cta-band">
      <h2>${esc(title)}</h2>
      <p>${esc(text)}</p>
      <div class="btn-row">
        <a class="btn btn--light" href="${primary.href}">${esc(primary.label)}</a>
        <a class="btn btn--ghost" style="border-color:#f0d9c6;color:#f0d9c6" href="${secondary.href}">${esc(secondary.label)}</a>
      </div>
    </div>
  </div>
</section>`;
}

/** Aviso de cookies (se muestra sólo si no hay decisión previa). */
export function cookieBar() {
  return `<aside class="cookie-bar" data-cookie-bar hidden aria-label="Aviso de cookies">
  <h2>Cookies</h2>
  <p class="muted">Utilizamos únicamente cookies técnicas necesarias para el funcionamiento del sitio. No se carga ninguna herramienta de medición ni de publicidad sin tu consentimiento.</p>
  <div class="btn-row">
    <button class="btn btn--primary btn--sm" type="button" data-consent="aceptado">Aceptar</button>
    <button class="btn btn--ghost btn--sm" type="button" data-consent="rechazado">Sólo las necesarias</button>
    <a class="btn btn--ghost btn--sm" href="/politica-de-cookies/">Más información</a>
  </div>
</aside>`;
}

/** JSON-LD de organización y sitio web, para la home. */
export function orgSchema(siteUrl) {
  return jsonld({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteUrl + "#organizacion",
        name: BRAND.name,
        url: siteUrl,
        email: BRAND.email,
        areaServed: "ES",
        knowsLanguage: "es-ES",
      },
      {
        "@type": "WebSite",
        "@id": siteUrl + "#sitio",
        url: siteUrl,
        name: BRAND.name,
        inLanguage: "es-ES",
        publisher: { "@id": siteUrl + "#organizacion" },
      },
    ],
  });
}
