# España Aves Premium

BUILD A COMPLETE PRODUCTION-READY BIRD WEBSITE FOR SPAIN USING STATIC HTML, CSS AND VANILLA JAVASCRIPT.

This is a full website build, not a prototype, mockup, landing page, or single-page application.

The project should have the depth, trust architecture, SEO structure and commercial capability of a professional Spanish exotic-bird website similar in scope to Paraíso de Aves, but the implementation must be original, clean, maintainable and optimized from the beginning.

1. CORE TECHNICAL REQUIREMENT

Build the website using:

semantic HTML5

modern CSS3

vanilla JavaScript

reusable shared CSS

reusable shared JavaScript

static pages

no React

no Next.js

no Vue

no Angular

no unnecessary framework

no client-side SPA routing

Every important page must exist as a real crawlable .html page or clean static route supported by the deployment configuration.

The site must remain usable even if JavaScript is limited.

The primary content, navigation, headings, product information and internal links must be present directly in rendered HTML.

2. TARGET MARKET

Primary country:

Spain

Primary language:

Spanish

Primary domain placeholder:

https://example.com

Centralize the production domain in a configuration or clearly documented location so it can later be replaced without manually editing hundreds of URLs.

Primary currency:

EUR / €

Primary market terminology should use natural Spain Spanish rather than Latin American Spanish.

3. BRAND DIRECTION

Create a premium but trustworthy exotic-bird website.

Visual direction:

elegant

natural

professional

warm

established breeder/aviary appearance

not childish

not excessively colorful

not marketplace-looking

not generic AI-template looking

Use generous whitespace, strong typography, high-quality bird imagery, restrained natural design elements and clear calls to action.

The website should communicate:

trust

animal welfare

professionalism

transparency

legal compliance

expertise

responsible ownership

after-sale guidance

Create a complete reusable design system including:

typography

spacing

buttons

badges

cards

alerts

forms

containers

grids

breadcrumbs

product layouts

FAQ elements

accordions

testimonials

trust sections

footer

navigation

4. HEADER

Create a professional desktop and mobile header.

Include:

logo

Inicio

Aves

Especies

Disponibilidad

Cómo comprar

Transporte

Sobre nosotros

Blog

Preguntas frecuentes

Contacto

Add a prominent CTA:

Consultar disponibilidad

Mobile navigation must work correctly and be fully accessible.

Use a sticky header only if it improves usability without hurting performance.

5. HOMEPAGE

Create a full homepage with the following structure.

Hero

Strong Spanish headline such as:

Aves exóticas criadas con responsabilidad

Supporting copy explaining responsible breeding, welfare, documentation and delivery throughout Spain where legally permitted.

Primary CTA:

Ver aves disponibles

Secondary CTA:

Cómo funciona

Do not invent unsupported claims such as decades of experience, veterinary certifications, licenses, awards or customer numbers.

Trust bar

Include appropriate trust points such as:

Bienestar animal

Información transparente

Documentación cuando corresponda

Atención antes y después de la entrega

Transporte responsable

Featured birds

Create a featured species section using reusable cards.

Examples can include:

Yaco de cola roja

Guacamayo azul y amarillo

Guacamayo rojo

Cacatúa Galah

Cacatúa de cresta amarilla

Amazona

Eclectus

Caique

Conuro del sol

Loro Senegal

Ninfa

Agapornis

Do not claim that an animal is currently available unless availability data specifically indicates that.

Use wording such as:

Consultar disponibilidad

where appropriate.

Why choose us

Create substantial content about:

responsible sourcing

bird welfare

transparent process

documentation

customer support

suitable transport

preparation before receiving a bird

How it works

Create a clear process:

Consulta

Confirmación de disponibilidad

Información y documentación

Preparación del transporte o recogida

Entrega

Seguimiento posterior

Do not imply instant checkout for live animals.

Welfare section

Explain that purchasing a bird is a long-term responsibility.

Cover:

housing

enrichment

social interaction

appropriate food

veterinary care

long lifespan for many parrots

Spain delivery section

Explain delivery/collection throughout Spain subject to:

destination

animal

documentation

weather

transport availability

applicable regulations

Never promise nationwide shipping if the logistics system cannot guarantee it.

Testimonials

Build the visual section and reusable markup.

Do not fabricate customer testimonials.

Use clearly marked placeholder/sample content during development if real testimonials have not been supplied.

FAQ

Include useful questions such as:

¿Cómo puedo saber qué aves están disponibles?

¿Qué documentación recibe el comprador?

¿Realizáis entregas en toda España?

¿Cómo se transporta un ave?

¿Puedo reservar un ave?

¿Qué debo preparar antes de recibirla?

¿Cómo sé qué especie es adecuada para mí?

¿Las aves necesitan documentación CITES?

Answers must be responsible and avoid making universal legal claims.

Final CTA

Strong consultation CTA.

6. BIRD CATALOGUE

Create:

/aves/

This is the main species/archive page.

Include filters or navigation categories such as:

Loros africanos

Guacamayos

Cacatúas

Amazonas

Conuros

Caiques

Eclectus

Periquitos y pequeñas psitácidas

Filtering must progressively enhance the HTML rather than hiding the entire catalogue from search engines.

Every bird card should include:

image

common name

scientific name where known

concise introduction

typical adult size

approximate lifespan range

temperament summary

experience level

status

CTA

Do not invent individual bird sex, hatch dates, rings, microchips, DNA certificates or availability.

7. INDIVIDUAL SPECIES PAGES

Build dedicated SEO-friendly static pages for important species.

At minimum create initial templates/pages for:

/aves/yaco-cola-roja/

/aves/guacamayo-azul-amarillo/

/aves/guacamayo-rojo/

/aves/cacatua-galah/

/aves/cacatua-cresta-amarilla/

/aves/amazona/

/aves/eclectus/

/aves/caique/

/aves/conuro-del-sol/

/aves/loro-senegal/

Each page must contain substantial original content.

Structure:

H1 species name

Intro

Image gallery area

Quick facts:

scientific name

origin

size

lifespan

temperament

noise level

social needs

experience level

Then sections:

Características

Personalidad

Cuidados

Alimentación

Alojamiento

Enriquecimiento

Socialización

Salud y veterinario

¿Es adecuado para ti?

Documentación y normativa

Transporte

Disponibilidad

Preguntas frecuentes

Add strong internal links to related species and educational articles.

Do not keyword-stuff.

8. AVAILABILITY SYSTEM

Create:

/disponibilidad/

This page should explain that availability changes.

Create a clean availability interface that can later be connected to a backend.

Statuses:

Disponible

Próximamente

Reservado

Consultar disponibilidad

No disponible actualmente

Centralize status definitions.

Do NOT duplicate availability values across individual static pages if a safer shared architecture can prevent inconsistencies.

If no backend exists yet, clearly architect the frontend so availability can later come from JSON/API/database without rebuilding the website.

9. PURCHASE / ENQUIRY PROCESS

Create:

/como-comprar/

This is NOT a normal ecommerce checkout.

Explain:

Customer chooses species

Sends enquiry

Availability is confirmed manually

Seller discusses suitability and requirements

Final price/logistics are confirmed

Required documentation is prepared

Collection/delivery is arranged

Customer receives after-care guidance

Include a clear notice that sending an enquiry does not constitute a confirmed purchase.

10. ENQUIRY FORM

Create an accessible enquiry form.

Fields:

Nombre y apellidos

Email

Teléfono / WhatsApp

Provincia

Código postal

Especie de interés

Experiencia previa con aves

Método preferido de contacto

Mensaje

Checkbox:

privacy-policy consent

Optional:

newsletter consent must be separate and unchecked by default.

Use proper:

labels

validation

error states

success states

autocomplete

anti-spam architecture

Never expose API secrets in frontend JavaScript.

11. TRANSPORT PAGE

Create:

/transporte-de-aves/

Explain responsibly:

collection options

specialist animal transport where available

preparation

suitable transport containers

weather considerations

stress minimization

route planning

documentation requirements

communication with customer

delivery confirmation

Do not claim ordinary parcel couriers can legally transport live birds unless specifically verified.

12. CITES / DOCUMENTATION PAGE

Create:

/documentacion-cites/

This must be educational, not legal advice.

Explain:

what CITES generally is

why certain species are regulated

documents may depend on species and origin

importance of lawful provenance

identification methods such as closed rings or microchips where applicable

why buyers should retain paperwork

Do not make universal statements claiming every bird requires the same documentation.

Add a disclaimer telling users to verify current rules with competent Spanish/EU authorities where necessary.

13. RESPONSIBLE OWNERSHIP PAGE

Create:

/tenencia-responsable/

Cover:

parrots are intelligent social animals

long-term commitment

noise

daily interaction

diet

cage/aviary dimensions

enrichment

out-of-cage time

veterinary costs

travel arrangements

household compatibility

children

other animals

destructive chewing

hormonal behavior

lifespan

Make this genuinely educational.

14. ABOUT PAGE

Create:

/sobre-nosotros/

Structure the page professionally but DO NOT invent:

company registration numbers

breeder registration

physical addresses

years of experience

veterinary partnerships

licenses

awards

number of customers

Use placeholders where factual business information still needs to be supplied.

15. CONTACT PAGE

Create:

/contacto/

Include:

contact form

email placeholder

phone/WhatsApp placeholder

business hours placeholder

location/coverage information

Do not invent an address.

16. FAQ PAGE

Create:

/preguntas-frecuentes/

Build substantial FAQ categories:

availability

buying

reservations

payments

documentation

CITES

transportation

bird care

suitability

delivery

after-sales support

Implement accessible accordion behavior.

Add FAQ structured data only for content actually visible on the page and only where appropriate under current search-engine guidelines.

17. BLOG

Create:

/blog/

Create the architecture and several substantial evergreen articles.

Suggested initial topics:

Cómo elegir un loro adecuado para tu hogar

Qué debes preparar antes de recibir un loro

Alimentación equilibrada para loros

Señales de estrés en un loro

Importancia del enriquecimiento ambiental

Qué es CITES y cómo afecta a los propietarios de aves

Cómo transportar un loro de forma segura

Diferencias entre Yaco, Amazona y Eclectus

¿Cuánto vive un loro?

Errores comunes al comprar un loro

Every article must have:

unique title

unique description

breadcrumbs

author/business attribution architecture

published/updated date architecture

article schema where appropriate

related posts

links to relevant species pages

Do not generate hundreds of thin AI articles.

Quality is more important than page count.

18. LOCATION SEO

Build architecture for carefully selected Spanish location pages.

Do NOT generate hundreds of doorway pages.

Start with major legitimate service areas only:

Madrid

Barcelona

Valencia

Sevilla

Málaga

Alicante

Murcia

Zaragoza

Bilbao

A Coruña

Example:

/aves/madrid/

Each location page must contain genuinely useful, locally relevant content and must not merely replace a city name in identical text.

If there is insufficient unique content for a city, do not create the page.

19. SEO FOUNDATION

SEO must be implemented from day one.

Every indexable page must have:

unique <title>

unique meta description

canonical URL

one clear H1

logical H2/H3 structure

semantic HTML

crawlable links

descriptive anchor text

optimized images

meaningful alt attributes

Open Graph metadata

Twitter metadata where appropriate

Create:

/robots.txt

/sitemap.xml

Sitemap must contain ONLY canonical indexable URLs.

Do not include:

redirects

404s

query parameter duplicates

noindex pages

development URLs

20. CANONICAL ARCHITECTURE

Every page must self-canonicalize using the production domain.

Never produce:

localhost canonicals

Lovable preview URLs

duplicate canonical tags

canonicals pointing to unrelated pages

Centralize the domain configuration where practical.

21. STRUCTURED DATA

Implement appropriate JSON-LD.

Potential schemas:

Organization

WebSite

BreadcrumbList

Article

FAQPage where appropriate

Product only where actual product/offer information legitimately qualifies

Do not fabricate:

reviews

ratings

stock

prices

GTIN

SKU

business address

Structured data must match visible content.

22. IMAGE SEO

Use:

descriptive filenames

width/height attributes

responsive images where appropriate

modern formats where supported

lazy loading below the fold

eager loading for important hero/LCP image

meaningful alt text

Prevent layout shift.

Do not place critical textual information only inside images.

23. PERFORMANCE

Target excellent Core Web Vitals.

Avoid:

giant JavaScript bundles

unnecessary libraries

oversized images

render-blocking scripts

excessive fonts

autoplay video

unnecessary animation

layout shifts

Use vanilla JS and native browser features wherever possible.

24. ACCESSIBILITY

Meet strong WCAG fundamentals.

Ensure:

semantic landmarks

keyboard navigation

visible focus

accessible forms

appropriate contrast

alt text

meaningful buttons

no clickable divs when proper buttons/links should be used

accessible mobile menu

accessible accordion

skip-to-content link

appropriate aria usage

Do not overuse ARIA where semantic HTML already solves the problem.

25. LEGAL PAGES

Create placeholders/templates for:

/aviso-legal/

/politica-de-privacidad/

/politica-de-cookies/

/terminos-y-condiciones/

Do NOT invent company legal details.

Clearly mark business-specific fields requiring real information.

Cookie handling should follow European consent principles.

Do not load non-essential tracking scripts before the required consent where applicable.

26. FOOTER

Create a substantial footer with:

Navigation:

Aves

Disponibilidad

Cómo comprar

Transporte

CITES

Tenencia responsable

Blog

FAQ

Contacto

Legal:

Aviso legal

Privacidad

Cookies

Términos

Add contact placeholders and social-link architecture.

27. 404 PAGE

Create a useful custom 404 page.

Include:

clear message

homepage link

birds catalogue link

contact link

404 must return proper HTTP 404 when deployment infrastructure permits it.

28. SECURITY

Audit frontend security.

Requirements:

no secrets in repository/frontend

no exposed API keys requiring secrecy

sanitize/validate form data server-side once backend exists

safe external links

rel="noopener noreferrer" where appropriate

no unsafe HTML injection

appropriate Content Security Policy architecture where deployment supports it

secure form endpoint architecture

anti-spam protection

Do not pretend client-side validation provides security.

29. PROJECT STRUCTURE

Use a clean static structure similar to:

/
index.html
aves/
index.html
yaco-cola-roja/
index.html
guacamayo-azul-amarillo/
index.html
...
disponibilidad/
index.html
como-comprar/
index.html
transporte-de-aves/
index.html
documentacion-cites/
index.html
tenencia-responsable/
index.html
sobre-nosotros/
index.html
contacto/
index.html
preguntas-frecuentes/
index.html
blog/
index.html
article-slug/
index.html
assets/
css/
js/
images/
robots.txt
sitemap.xml

Avoid unnecessary directory complexity.

30. SHARED CODE

Do not copy entire CSS and JavaScript blocks into every HTML page.

Use shared:

stylesheet(s)

navigation JavaScript

form logic

filters

common interactive behaviors

Keep pages individually crawlable while minimizing duplication.

31. INTERNAL LINKING

Build deliberate internal linking.

Species pages should link to:

relevant care guides

documentation

transport

enquiry

related species

Blog articles should link to relevant commercial and informational pages naturally.

Location pages should link to:

birds

availability

transport

contact

Use breadcrumbs.

Avoid orphan pages.

32. CONTENT QUALITY

Write natural professional Spanish.

Avoid obvious AI patterns such as:

repetitive introductions

excessive adjectives

generic filler

repeated conclusions

identical city pages

keyword stuffing

fake expertise claims

Content should answer actual customer questions.

33. TRUST-FIRST SALES DESIGN

This website sells or facilitates enquiries concerning living animals.

Therefore prioritize responsible decision-making above aggressive conversion tactics.

Do NOT use:

fake countdown timers

fake scarcity

fake customer numbers

fake reviews

fake stock counters

manipulative urgency

misleading “only 1 left” messages

instant-purchase pressure

Use:

Consultar disponibilidad

rather than artificially pushing customers into immediate payment.

34. PRICES

Build support for optional prices but do not invent them.

Architecture should allow each species/available bird to have:

price

price on request

deposit

availability status

If actual values have not been supplied, use:

Consultar precio

or:

Consultar disponibilidad

Do not populate fictional prices.

35. FUTURE MULTILINGUAL ARCHITECTURE

The first release is Spanish.

However, structure internal code so we can later introduce:

English

French

Portuguese

German

without rebuilding the entire architecture.

Do NOT create empty translated pages now.

Do NOT create hreflang tags for language versions that do not exist.

When translations are eventually added, each language must use real translated URLs/content and correct reciprocal hreflang.

36. ANALYTICS ARCHITECTURE

Prepare clean hooks/placeholders for:

Google Search Console verification

Google Analytics 4

consent-aware analytics

Do not invent verification tokens or GA IDs.

37. SEARCH CONSOLE READINESS

Before completion verify:

all canonical pages return successfully

no internal broken links

canonical URLs resolve

sitemap URLs match canonical URLs

robots.txt references sitemap

important pages are indexable

no accidental noindex

no duplicate title architecture

no redirect chains

no malformed structured data

38. RESPONSIVE TESTING

Test at representative sizes:

320px
375px
430px
768px
1024px
1440px
1920px

Check:

header

navigation

cards

galleries

forms

footer

tables

FAQ

blog

species pages

CTA sections

No horizontal scrolling.

39. BROWSER TESTING

Verify basic compatibility with current versions of:

Chrome

Safari

Firefox

Edge

Avoid browser-specific hacks wherever possible.

40. QUALITY GATE

When implementation is finished:

Run a complete audit.

Verify:

every route

every navigation link

every CTA

every form

every image

responsive layouts

console

HTML validity

sitemap

robots

metadata

canonicals

structured data

accessibility fundamentals

internal linking

Search repository for:

TODO
Lorem ipsum
example.com
localhost
undefined
null
placeholder legal information

Report any remaining placeholders clearly.

41. DO NOT INVENT BUSINESS DATA

This rule is critical.

Never invent:

business name

company number

VAT number

breeder registration

address

telephone

email

veterinary partner

licenses

certifications

reviews

customer counts

availability

individual bird identities

ring numbers

hatch dates

DNA results

prices

Use explicit placeholders and report them at the end.

42. BUILD ORDER

Work in this sequence:

PHASE 1
Architecture and design system

PHASE 2
Homepage + header + footer

PHASE 3
Bird catalogue

PHASE 4
Species pages

PHASE 5
Buying / transport / CITES / responsible ownership

PHASE 6
About / contact / FAQ

PHASE 7
Blog architecture and initial articles

PHASE 8
Initial high-quality Spain location pages

PHASE 9
Legal templates

PHASE 10
SEO / schema / sitemap / robots

PHASE 11
Accessibility / performance

PHASE 12
Full regression audit

Do not sacrifice quality by blindly generating everything at once.

43. FINAL REPORT

When complete provide:

Architecture

total HTML pages

project structure

CSS architecture

JavaScript architecture

Commercial pages

List every commercial page.

Species

List every species page.

Content

List blog articles and guides.

SEO

Report:

titles

descriptions

canonicals

sitemap

robots

schema

breadcrumbs

internal linking

Technical

Report:

broken links

console errors

HTML issues

responsive status

accessibility status

performance concerns

Missing real business data

List every placeholder still requiring information from the owner.

Final status

Return one:

🟢 PRODUCTION FOUNDATION READY

🟡 READY WITH REQUIRED BUSINESS DATA

🔴 NOT READY

Do not describe the website as production-ready if important technical failures remain.

The objective is to build a serious long-term Spanish bird website with strong HTML foundations, clean SEO architecture, responsible commercial practices and enough structural depth to grow into a major organic-search property.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/24006c3b-269d-49f4-96bf-3f17eecaa5e6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
