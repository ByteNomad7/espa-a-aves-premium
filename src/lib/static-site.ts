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

export function htmlResponse(pathname: string, search = "") {
  const html = getPage(pathname);
  if (html) {
    const canonicalPath = normalize(pathname);
    if (pathname !== canonicalPath) {
      return new Response(null, {
        status: 308,
        headers: { location: canonicalPath + search },
      });
    }
    return new Response(html, {
      status: canonicalPath === "/404/" ? 404 : 200,
      headers: canonicalPath === "/404/" ? { ...HEADERS, "x-robots-tag": "noindex" } : HEADERS,
    });
  }
  const notFound = pages.get("/404/");
  return new Response(notFound ?? "<h1>404</h1>", {
    status: 404,
    headers: { ...HEADERS, "x-robots-tag": "noindex" },
  });
}

export const allRoutes = () => Array.from(pages.keys());

/** Rutas canónicas indexables (excluye páginas con robots noindex, p. ej. /404/). */
export const indexableRoutes = () =>
  Array.from(pages.entries())
    .filter(([, html]) => !/name="robots"[^>]*noindex/i.test(html))
    .map(([route]) => route)
    .sort();
