/**
 * Sirve las páginas HTML estáticas generadas en /site con rutas limpias.
 * Los archivos se incrustan en el bundle en tiempo de compilación, de modo
 * que no se necesita sistema de ficheros en ejecución.
 *
 * Regenerar el HTML: `bun tools/build-site.mjs`
 */
const modules = import.meta.glob("../../site/**/index.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const pages = new Map<string, string>();
for (const [file, html] of Object.entries(modules)) {
  const route = file.replace("../../site", "").replace(/index\.html$/, "");
  pages.set(route === "" ? "/" : route, html);
}

const HEADERS = { "content-type": "text/html; charset=utf-8" };

export function normalize(pathname: string) {
  if (!pathname.startsWith("/")) pathname = "/" + pathname;
  return pathname.endsWith("/") ? pathname : pathname + "/";
}

export function getPage(pathname: string) {
  return pages.get(normalize(pathname)) ?? null;
}

export function htmlResponse(pathname: string) {
  const html = getPage(pathname);
  if (html) return new Response(html, { status: 200, headers: HEADERS });
  const notFound = pages.get("/404/");
  return new Response(notFound ?? "<h1>404</h1>", { status: 404, headers: HEADERS });
}

export const allRoutes = () => Array.from(pages.keys());
