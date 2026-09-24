---
name: Netlify publish output
description: Why Netlify's default TanStack publish directory may be wrong for this app.
---

Netlify may detect TanStack Start and default to a nested client publish directory, while the Nitro Netlify preset emits public assets at the top-level distribution directory and a separate server function. Keep the publish setting aligned with the **actual** generated public directory, not the framework heuristic. A generic local build may instead select the Cloudflare preset, producing assets without a Netlify handler.

**Why:** An otherwise successful Netlify build failed only at deployment because its UI publish directory named a directory the Nitro build never created. Also, the framework's generic preview command expects a different server layout after a Nitro Netlify build and can return 500 even when the Netlify handler is generated.

**How to apply:** If changing build tooling or deployment settings, build explicitly with the Netlify preset, inspect both its public directory and generated server function, and test the actual published Netlify routes. Do not infer deployment health from a default local build or the generic preview command.