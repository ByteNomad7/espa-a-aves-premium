import { useEffect, useRef, useState } from "react";
import "./_group.css";
import "./Professional.css";

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
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <header className="site-header professional-header">
        <div className="container site-header__inner">
          <a className="logo professional-logo" href="/" aria-label="Aves del Sur — inicio">
            <span className="professional-logo__seal">
              <img className="logo__mark" src="/__mockup/images/logo-mark.png" width="42" height="42" alt="" aria-hidden="true" />
            </span>
            <span>
              <span className="logo__text">Aves del Sur</span>
              <span className="professional-logo__descriptor">Cría responsable · España</span>
            </span>
          </a>
          <button
            className={`nav-toggle professional-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="nav-principal"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle__bars" aria-hidden="true" />
            <span className="nav-toggle__label">{open ? "Cerrar" : "Menú"}</span>
          </button>
          <nav
            ref={navRef}
            id="nav-principal"
            className={`site-nav professional-nav${open ? " is-open" : ""}`}
            aria-label="Navegación principal"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} aria-current={item.href === "/aves/" ? "page" : undefined} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary btn--sm site-nav__cta professional-cta" href="/contacto/" onClick={() => setOpen(false)}>
              <span>Consultar disponibilidad</span>
              <span aria-hidden="true" className="professional-cta__arrow">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer professional-footer">
      <div className="professional-footer__rule" aria-hidden="true" />
      <div className="container site-footer__grid professional-footer__grid">
        <div className="professional-footer__intro">
          <p className="site-footer__brand">Aves del Sur</p>
          <p className="professional-footer__kicker">Una relación cuidada desde el primer contacto</p>
          <p className="muted">Cría y asesoramiento responsable de aves exóticas en España. Información transparente antes, durante y después de la entrega.</p>
        </div>
        <nav aria-label="Enlaces del sitio">
          <h2 className="site-footer__title">Explorar</h2>
          <ul>
            {footerSections.map((item) => <li key={item.href}><a href={item.href}>{item.label}<span aria-hidden="true">↗</span></a></li>)}
          </ul>
        </nav>
        <nav aria-label="Información legal">
          <h2 className="site-footer__title">Legal</h2>
          <ul>
            {legalLinks.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
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
          <a className="professional-footer__availability" href="/contacto/">Consultar disponibilidad <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="container site-footer__bottom professional-footer__bottom">
        <p>© <span data-year="2026">2026</span> Aves del Sur. Los datos legales de la empresa se completarán antes de la publicación.</p>
        <p className="professional-footer__note">Cuidamos cada origen. Acompañamos cada llegada.</p>
      </div>
    </footer>
  );
}

export function Professional() {
  return (
    <div className="preview-page professional-page">
      <Header />
      <div className="preview-spacer professional-spacer" id="contenido" />
      <Footer />
    </div>
  );
}