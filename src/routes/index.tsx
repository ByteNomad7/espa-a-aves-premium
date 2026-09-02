import { createFileRoute } from "@tanstack/react-router";
import { htmlResponse } from "@/lib/static-site";

// La portada es la página estática /site/index.html.
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () => htmlResponse("/"),
    },
  },
});
