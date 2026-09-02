/**
 * Configuración central del sitio.
 * Cambiar SITE_URL aquí actualiza canonicals, Open Graph y sitemap.xml.
 */
export const SITE_URL = "https://example.com"; // TODO(negocio): dominio de producción

export const BRAND = {
  name: "Aves del Sur", // TODO(negocio): nombre comercial real
  legalName: "[PENDIENTE: razón social]",
  nif: "[PENDIENTE: NIF/CIF]",
  email: "[PENDIENTE: email de contacto]",
  phone: "[PENDIENTE: teléfono / WhatsApp]",
  hours: "[PENDIENTE: horario de atención]",
  coverage: "España peninsular (consultar islas y otros destinos)",
  address: "[PENDIENTE: dirección o zona de recogida]",
  social: {
    instagram: "", // vacío = no se muestra
    facebook: "",
    youtube: "",
  },
  gaId: "", // TODO(negocio): ID de Google Analytics 4 (vacío = analítica desactivada)
  gscToken: "", // TODO(negocio): token de verificación de Search Console
};

/** Idioma actual. La arquitectura permite añadir otros locales en el futuro. */
export const LOCALE = { lang: "es", hrefLang: "es-ES", prefix: "" };

/** Estados de disponibilidad centralizados: única fuente de verdad. */
export const STATUS = {
  disponible: { label: "Disponible", tone: "ok", desc: "Hay ejemplares confirmados en este momento." },
  proximamente: { label: "Próximamente", tone: "info", desc: "Se esperan ejemplares, sin fecha cerrada." },
  reservado: { label: "Reservado", tone: "warn", desc: "Los ejemplares actuales ya tienen reserva." },
  consultar: { label: "Consultar disponibilidad", tone: "neutral", desc: "La disponibilidad se confirma caso por caso." },
  no_disponible: { label: "No disponible actualmente", tone: "off", desc: "Sin ejemplares ni previsión a corto plazo." },
};

/** Precio: nunca se inventan importes. */
export const PRICE_FALLBACK = "Consultar precio";

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/aves/", label: "Aves" },
  { href: "/disponibilidad/", label: "Disponibilidad" },
  { href: "/como-comprar/", label: "Cómo comprar" },
  { href: "/transporte-de-aves/", label: "Transporte" },
  { href: "/sobre-nosotros/", label: "Sobre nosotros" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
  { href: "/contacto/", label: "Contacto" },
];

export const FOOTER_NAV = [
  { href: "/aves/", label: "Aves" },
  { href: "/disponibilidad/", label: "Disponibilidad" },
  { href: "/como-comprar/", label: "Cómo comprar" },
  { href: "/transporte-de-aves/", label: "Transporte" },
  { href: "/documentacion-cites/", label: "CITES y documentación" },
  { href: "/tenencia-responsable/", label: "Tenencia responsable" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
  { href: "/contacto/", label: "Contacto" },
];

export const LEGAL_NAV = [
  { href: "/aviso-legal/", label: "Aviso legal" },
  { href: "/politica-de-privacidad/", label: "Privacidad" },
  { href: "/politica-de-cookies/", label: "Cookies" },
  { href: "/terminos-y-condiciones/", label: "Términos y condiciones" },
];
