import { createFileRoute } from "@tanstack/react-router";
import sitemap from "../../site/sitemap.xml?raw";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        return new Response(sitemap, {
          status: 200,
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
