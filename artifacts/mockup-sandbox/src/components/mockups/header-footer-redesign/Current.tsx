import "./_group.css";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/aves/", label: "Aves" },
  { href: "/disponibilidad/", label: "Disponibilidad" },
  { href: "/como-comprar/", label: "Cómo comprar" },
  { href: "/transporte-de-aves/", label: "Transporte" },
  { href: "/sobre-nosotros/", label: "Sobre nosotros" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
  { href: "/contacto/", label: "Contacto" },
];

const footerSections = [
  { href: "/aves/", label: "Aves" },
  { href: "/disponibilidad/", label: "Disponibilidad" },
  { href: "/como-comprar/", label: "Cómo comprar" },
  { href: "/transporte-de-aves/", label: "Transporte" },
  { href: "/documentacion-cites/", label: "CITES y documentación" },
  { href: "/tenencia-responsable/", label: "Tenencia responsable" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
  { href: "/contacto/", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-legal/", label: "Aviso legal" },
  { href: "/politica-de-privacidad/", label: "Privacidad" },
  { href: "/politica-de-cookies/", label: "Cookies" },
  { href: "/terminos-y-condiciones/", label: "Términos y condiciones" },
];

function Header() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="logo" href="/" aria-label="Aves del Sur — inicio">
            <img
              className="logo__mark"
              src="/__mockup/images/logo-mark.png"
              width="42"
              height="42"
              alt=""
              aria-hidden="true"
            />
            <span className="logo__text">Aves del Sur</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="nav-principal"
          >
            <span className="nav-toggle__bars" aria-hidden="true" />
            <span className="nav-toggle__label">Menú</span>
          </button>
          <nav id="nav-principal" className="site-nav" aria-label="Navegación principal">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} aria-current={item.href === "/aves/" ? "page" : undefined}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary btn--sm site-nav__cta" href="/contacto/">
              Consultar disponibilidad
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">Aves del Sur</p>
          <p className="muted">
            Cría y asesoramiento responsable de aves exóticas en España. Información
            transparente antes, durante y después de la entrega.
          </p>
        </div>
        <nav aria-label="Enlaces del sitio">
          <h2 className="site-footer__title">Secciones</h2>
          <ul>
            {footerSections.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Información legal">
          <h2 className="site-footer__title">Legal</h2>
          <ul>
            {legalLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="site-footer__title">Contacto</h2>
          <ul className="site-footer__contact">
            <li>Email: [PENDIENTE: email de contacto]</li>
            <li>Teléfono / WhatsApp: [PENDIENTE: teléfono / WhatsApp]</li>
            <li>Horario: [PENDIENTE: horario de atención]</li>
            <li>Cobertura: España peninsular (consultar islas y otros destinos)</li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>
          © <span data-year>2026</span> Aves del Sur. Los datos legales de la empresa se
          completarán antes de la publicación.
        </p>
      </div>
    </footer>
  );
}

export function Current() {
  return (
    <div className="preview-page">
      <Header />
      <div className="preview-spacer" id="contenido" />
      <Footer />
    </div>
  );
}