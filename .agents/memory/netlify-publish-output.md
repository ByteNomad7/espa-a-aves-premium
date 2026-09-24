---
name: Netlify publish output
description: Why Netlify's default TanStack publish directory may be wrong for this app.
---

Netlify may detect TanStack Start and default to a nested client publish directory, while the current Nitro Netlify preset emits public assets at the top-level distribution directory and a separate server function. Keep the publish setting aligned with the **actual** generated public directory, not the framework heuristic.

**Why:** An otherwise successful Netlify build failed only at deployment because its UI publish directory named a directory the Nitro build never created.

**How to apply:** If changing build tooling or deployment settings, inspect the fresh Netlify-preset output and the resolved build configuration. Do not assume a local default-preset build uses the same directory layout as a Netlify build.