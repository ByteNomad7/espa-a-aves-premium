/* Analítica condicionada al consentimiento.
   No se carga ningún script de medición hasta que la persona acepta.
   El ID de GA4 se inyecta como data-ga-id desde la configuración del sitio. */
(function () {
  "use strict";
  var self = document.currentScript;
  var id = self && self.getAttribute("data-ga-id");
  if (!id) return;

  var loaded = false;
  function load() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }

  document.addEventListener("consentimiento:aceptado", load);
})();
