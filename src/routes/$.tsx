import { createFileRoute } from "@tanstack/react-router";
import { htmlResponse } from "@/lib/static-site";

// Todas las rutas del sitio estático (aves, blog, legales…) se sirven aquí
// como HTML real, con código 404 cuando la URL no existe.
export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: ({ request }) => htmlResponse(new URL(request.url).pathname),
    },
  },
});
