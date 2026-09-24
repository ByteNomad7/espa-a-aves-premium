# Search Console readiness — Aves del Sur

Checked locally on 24 September 2026. This is not a claim that Google has indexed the site or that the published domain is working.

## Ready in the application

- Spanish HTML pages render on the server. The generated sitemap lists the 47 indexable canonical URLs at `https://avesdelsur.com/sitemap.xml`.
- `/robots.txt` permits crawling and points to that sitemap. Canonical, Open Graph and structured-data URLs use the same HTTPS host.
- Known page URLs without a trailing slash return a permanent 308 redirect to the slash version, preserving query parameters. Unknown pages and `/404/` return 404; the error response has `noindex`.
- Catalog filters retain `/aves/` as their canonical. The 10 city guides explain destination-specific considerations without claiming local branches; species and commercial pages link to the actual consultation path.
- The unconfigured enquiry forms are not exposed to visitors. Enquiries use the configured email link instead. Email delivery is **not** independently verified.
- The Netlify build explicitly selects the Nitro `netlify` preset. A local build with that preset produces the public `dist` directory and `.netlify/functions-internal/server` handler; publishing only a default local Cloudflare-preset `dist` would not serve these HTML routes.
- The local build, typecheck and offline SEO audit pass. The remaining audit issue is unresolved business/legal placeholders on the about and legal pages.

## Must be completed before claiming live GSC readiness

1. Make `avesdelsur.com` resolve publicly and publish the current build. At the time of this check, both `avesdelsur.com` and `www.avesdelsur.com` failed DNS resolution from this environment.
2. Confirm live `https://avesdelsur.com/`, `/robots.txt` and `/sitemap.xml` respond correctly. Test HTTP and `www` host redirects to the preferred HTTPS host, as well as a city page without its trailing slash. These production behaviors cannot be certified from the development preview.
3. Supply and review the real business identity, legal/contact details and policies marked `[PENDIENTE]` on `/sobre-nosotros/` and legal pages. Do not invent this information. Confirm that `info@avesdelsur.com` receives mail before directing customers there.
4. In Google Search Console, add a Domain property, verify ownership using the DNS record provided by Google, submit `https://avesdelsur.com/sitemap.xml`, and inspect representative URLs: home, `/aves/`, a species page, a city page and `/contacto/`. Review indexing, canonical selection, structured data and Core Web Vitals once Google has crawled them.

No Google verification token, DNS record or sitemap submission has been added on the user's behalf.

The Netlify-preset build produces a server handler, but Netlify itself has not served it in a tested production deployment. The framework's generic `vite preview` expects a different `dist/server/server.js` layout and returns 500 against this Netlify build; use the running development workflow for local page checks and verify the published Netlify routes after deployment.