# Running on Replit

This is the imported TanStack Start/Vite website. Keep the existing Bun lockfile and project structure.

- Install dependencies: `bun install --frozen-lockfile`
- Start the website: use the **Start application** workflow (runs `bun run dev` on port 5000).
- To run a production build: `bun run build`
- The rendered pages come from `site/`; `bun tools/build-site.mjs` regenerates their HTML when source content changes.

The development server is configured to listen on `0.0.0.0:5000` and accept Replit's preview hostname.