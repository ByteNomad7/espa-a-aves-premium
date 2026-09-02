/* =====================================================================
   JavaScript compartido — mejora progresiva.
   Todo el contenido funciona sin JS; aquí sólo se añade interacción.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Año dinámico en el pie ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Navegación móvil accesible ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principal");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (
        toggle.getAttribute("aria-expanded") === "true" &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setOpen(false);
      }
    });
  }

  /* ---------- Filtros del catálogo (mejora progresiva) ---------- */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-familia]"));
    var empty = document.querySelector("[data-empty]");
    var counter = document.querySelector("[data-count]");
    var apply = function (value) {
      var shown = 0;
      cards.forEach(function (card) {
        var match = value === "todas" || card.getAttribute("data-familia") === value;
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
      if (counter) counter.textContent = String(shown);
      filterBar.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === value));
      });
      try {
        var u = new URL(window.location.href);
        if (value === "todas") u.searchParams.delete("familia");
        else u.searchParams.set("familia", value);
        window.history.replaceState({}, "", u);
      } catch (err) {
        /* no-op */
      }
    };
    filterBar.hidden = false;
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-filter]");
      if (btn) apply(btn.getAttribute("data-filter"));
    });
    var initial = new URLSearchParams(window.location.search).get("familia");
    if (initial) apply(initial);
  }

  /* ---------- Acordeones: sólo uno abierto por grupo ---------- */
  document.querySelectorAll("[data-accordion-group]").forEach(function (group) {
    var items = group.querySelectorAll("details.accordion");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  /* ---------- Formulario de consulta ---------- */
  var form = document.querySelector("[data-enquiry-form]");
  if (form) {
    var statusEl = form.querySelector("[data-form-status]");
    var startedAt = Date.now();

    var messages = {
      valueMissing: "Este campo es obligatorio.",
      typeMismatch: "Revisa el formato introducido.",
      patternMismatch: "El formato no es válido.",
      tooShort: "El texto es demasiado corto.",
    };
    var messageFor = function (input) {
      var v = input.validity;
      if (v.valueMissing) return input.type === "checkbox" ? "Debes marcar esta casilla para continuar." : messages.valueMissing;
      if (v.typeMismatch) return messages.typeMismatch;
      if (v.patternMismatch) return messages.patternMismatch;
      if (v.tooShort) return messages.tooShort;
      return "Revisa este campo.";
    };
    var showError = function (input) {
      var field = input.closest(".field") || input.closest(".checkbox-field") || input.parentElement;
      var slot = field && field.querySelector(".error");
      var ok = input.checkValidity();
      if (field) field.setAttribute("data-invalid", String(!ok));
      input.setAttribute("aria-invalid", String(!ok));
      if (slot) slot.textContent = ok ? "" : messageFor(input);
      return ok;
    };

    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("blur", function () {
        if (input.value !== "" || input.required) showError(input);
      });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") showError(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var inputs = Array.prototype.slice.call(form.querySelectorAll("input, select, textarea"));
      var firstBad = null;
      inputs.forEach(function (input) {
        if (input.name === "website") return; // honeypot
        if (!showError(input) && !firstBad) firstBad = input;
      });
      if (firstBad) {
        statusEl.hidden = false;
        statusEl.setAttribute("data-state", "error");
        statusEl.textContent = "Revisa los campos marcados antes de enviar la consulta.";
        firstBad.focus();
        return;
      }
      // Antispam: honeypot + tiempo mínimo de cumplimentación.
      var hp = form.querySelector('input[name="website"]');
      if ((hp && hp.value) || Date.now() - startedAt < 3000) {
        statusEl.hidden = false;
        statusEl.setAttribute("data-state", "error");
        statusEl.textContent = "No hemos podido validar el envío. Inténtalo de nuevo en unos segundos.";
        return;
      }

      var endpoint = form.getAttribute("data-endpoint");
      statusEl.hidden = false;
      statusEl.removeAttribute("data-state");
      statusEl.textContent = "Enviando…";

      if (!endpoint) {
        // Sin backend configurado todavía: no se simula un envío correcto.
        statusEl.setAttribute("data-state", "error");
        statusEl.textContent =
          "El envío automático aún no está configurado. Escríbenos por email o WhatsApp con los datos del formulario y te responderemos.";
        return;
      }

      var payload = Object.fromEntries(new FormData(form).entries());
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.reset();
          statusEl.setAttribute("data-state", "ok");
          statusEl.textContent =
            "Hemos recibido tu consulta. Te responderemos con la disponibilidad real y los siguientes pasos. Enviar una consulta no supone una compra confirmada.";
        })
        .catch(function () {
          statusEl.setAttribute("data-state", "error");
          statusEl.textContent =
            "No hemos podido enviar la consulta. Vuelve a intentarlo o escríbenos directamente por email.";
        });
    });
  }

  /* ---------- Consentimiento de cookies (principios europeos) ---------- */
  var bar = document.querySelector("[data-cookie-bar]");
  if (bar) {
    var KEY = "consentimiento-cookies";
    var stored = null;
    try {
      stored = window.localStorage.getItem(KEY);
    } catch (err) {
      stored = null;
    }
    if (!stored) bar.hidden = false;
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-consent]");
      if (!btn) return;
      var value = btn.getAttribute("data-consent");
      try {
        window.localStorage.setItem(KEY, value);
      } catch (err) {
        /* no-op */
      }
      bar.hidden = true;
      if (value === "aceptado") {
        document.dispatchEvent(new CustomEvent("consentimiento:aceptado"));
      }
    });
    if (stored === "aceptado") document.dispatchEvent(new CustomEvent("consentimiento:aceptado"));
  }
})();
