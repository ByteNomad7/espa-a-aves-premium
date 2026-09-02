import { createFileRoute } from "@tanstack/react-router";
import { indexableRoutes } from "@/lib/static-site";

export const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          indexableRoutes()
            .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
            .join("\n") +
          `\n</urlset>\n`;
        return new Response(body, {
          status: 200,
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
