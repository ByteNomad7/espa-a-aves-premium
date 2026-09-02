import { SPECIES } from "./data/species.mjs";
import { enquiryForm, faqList, statusLegend, ctaBand, speciesCard } from "./components.mjs";
import { BRAND } from "./config.mjs";
import { esc } from "./layout.mjs";

const crumbHome = { href: "/", label: "Inicio" };

const pageHero = (title, lead) => `<section class="page-hero">
  <div class="container">
    <h1>${esc(title)}</h1>
    <p class="lead">${esc(lead)}</p>
  </div>
</section>`;

/* ------------------------------------------------------------------ */
/* /disponibilidad/                                                    */
/* ------------------------------------------------------------------ */
export const disponibilidad = () => ({
  path: "/disponibilidad/",
  title: "Disponibilidad de aves | Estados actualizados",
  description:
    "Consulta cómo funcionan los estados de disponibilidad de nuestras aves en España y qué significa cada uno antes de enviar una consulta.",
  breadcrumbs: [crumbHome, { href: "/disponibilidad/", label: "Disponibilidad" }],
  body: `${pageHero(
    "Disponibilidad de aves",
    "La disponibilidad cambia con frecuencia y depende de cada ejemplar. Por eso se confirma siempre de forma manual antes de avanzar en cualquier proceso.",
  )}
<section class="section">
  <div class="container layout-aside">
    <div class="prose">
      <h2>Cómo funciona</h2>
      <p>No publicamos fichas de ejemplares concretos con datos que no podamos acreditar. En su lugar, cada especie tiene un estado general que indica en qué punto se encuentra, y la confirmación real se realiza al responder a tu consulta.</p>
      <p>Este planteamiento evita dos problemas habituales: la información desactualizada repartida por decenas de páginas y la presión comercial sobre decisiones que afectan a un animal que vivirá décadas.</p>

      <h2>Significado de cada estado</h2>
      ${statusLegend()}

      <h2>Estado por especie</h2>
      <p>Los estados se gestionan desde un único origen de datos, de modo que la información mostrada aquí y en cada ficha siempre coincide.</p>
      <div class="table-wrap">
        <table class="facts">
          <caption class="visually-hidden">Estado de disponibilidad por especie</caption>
          <thead><tr><th scope="col">Especie</th><th scope="col">Estado</th><th scope="col">Precio</th></tr></thead>
          <tbody>
          ${SPECIES.map(
            (s) =>
              `<tr><th scope="row"><a href="/aves/${s.slug}/">${esc(s.name)}</a></th><td data-status="${s.status}">${
                { disponible: "Disponible", proximamente: "Próximamente", reservado: "Reservado", consultar: "Consultar disponibilidad", no_disponible: "No disponible actualmente" }[s.status]
              }</td><td>${esc(s.price || "Consultar precio")}</td></tr>`,
          ).join("")}
          </tbody>
        </table>
      </div>

      <h2>Reservas</h2>
      <p>Cuando existe un ejemplar concreto y ambas partes están conformes, puede acordarse una reserva. Las condiciones se explican por escrito antes de cualquier pago, incluyendo qué ocurre si el ave no puede entregarse por motivos de salud o de documentación.</p>

      <h2>¿Y si la especie que busco no aparece?</h2>
      <p>Escríbenos igualmente. Si no podemos ayudarte, te lo diremos con claridad en lugar de mantener una consulta abierta indefinidamente.</p>
    </div>
    <aside class="aside-sticky">
      <div class="aside-card">
        <h2 style="font-size:var(--fs-lg)">Consultar disponibilidad</h2>
        <p class="muted" style="font-size:var(--fs-sm)">Indícanos la especie, tu provincia y tu experiencia previa. Te responderemos con la situación real.</p>
        <a class="btn btn--primary btn--block" href="/contacto/">Enviar consulta</a>
        <p class="muted" style="font-size:var(--fs-xs);margin-top:var(--s-3)">Enviar una consulta no supone una compra confirmada.</p>
      </div>
    </aside>
  </div>
</section>
${ctaBand({ title: "¿Necesitas ayuda para decidir?", secondary: { href: "/aves/", label: "Ver el catálogo" } })}`,
});

/* ------------------------------------------------------------------ */
/* /como-comprar/                                                      */
/* ------------------------------------------------------------------ */
export const comoComprar = () => ({
  path: "/como-comprar/",
  title: "Cómo comprar un ave: proceso paso a paso",
  description:
    "Explicación del proceso de consulta, confirmación de disponibilidad, documentación, transporte y seguimiento posterior a la entrega.",
  breadcrumbs: [crumbHome, { href: "/como-comprar/", label: "Cómo comprar" }],
  body: `${pageHero(
    "Cómo comprar un ave",
    "No existe carrito ni pago inmediato. Cada proceso se gestiona de forma individual porque hablamos de animales vivos con necesidades específicas.",
  )}
<section class="section">
  <div class="container">
    <div class="alert alert--accent" style="margin-bottom:var(--s-6)">
      <h3>Enviar una consulta no es una compra</h3>
      <p>Recibir tu mensaje no reserva ningún ejemplar ni genera obligación de compra para ninguna de las dos partes. La disponibilidad, las condiciones y el precio se confirman por escrito antes de cualquier compromiso.</p>
    </div>

    <h2>El proceso, paso a paso</h2>
    <ol class="steps">
      <li><h3>Elección de especie</h3><p>Revisa las fichas del <a href="/aves/">catálogo</a> y compara necesidades de espacio, ruido, dieta y tiempo. Si dudas entre varias, dínoslo en la consulta.</p></li>
      <li><h3>Envío de la consulta</h3><p>Rellena el formulario con tu provincia, tu experiencia previa y tu situación. Cuanta más información, más útil será la respuesta.</p></li>
      <li><h3>Confirmación manual de disponibilidad</h3><p>Comprobamos la situación real de la especie solicitada y te informamos con honestidad, incluso si la respuesta es que no hay ejemplares.</p></li>
      <li><h3>Valoración de idoneidad</h3><p>Hablamos sobre tu vivienda, tu rutina y tus expectativas. Si consideramos que la especie no encaja, te lo diremos y propondremos alternativas.</p></li>
      <li><h3>Condiciones y precio</h3><p>Se confirman por escrito el precio, lo que incluye, la forma de pago y las condiciones de una eventual reserva antes de que realices ningún abono.</p></li>
      <li><h3>Documentación</h3><p>Se prepara la documentación que corresponda al ejemplar y a la especie. Consulta la <a href="/documentacion-cites/">información sobre CITES</a>.</p></li>
      <li><h3>Recogida o entrega</h3><p>Se acuerda el método más adecuado según distancia, clima y estado del ave. Ver <a href="/transporte-de-aves/">transporte de aves</a>.</p></li>
      <li><h3>Seguimiento posterior</h3><p>Después de la entrega seguimos disponibles para resolver dudas de adaptación, alimentación y manejo.</p></li>
    </ol>

    <h2 style="margin-top:var(--s-7)">Qué necesitamos saber de ti</h2>
    <ul>
      <li>Tipo de vivienda y espacio disponible para la jaula o el voladero.</li>
      <li>Horas que el ave pasaría sola en un día normal.</li>
      <li>Personas y otros animales que conviven en el hogar.</li>
      <li>Experiencia previa con aves y con psitácidas en particular.</li>
      <li>Provincia y código postal, para valorar el traslado.</li>
    </ul>

    <h2>Pagos</h2>
    <p>Las condiciones de pago se acuerdan por escrito en cada caso. No solicitamos pagos antes de confirmar la disponibilidad real ni utilizamos plazos artificiales para forzar decisiones. <strong>[PENDIENTE: métodos de pago aceptados y condiciones de reserva]</strong>.</p>

    <h2>Formulario de consulta</h2>
    <p class="lead">Responderemos con información concreta sobre disponibilidad, idoneidad y siguientes pasos.</p>
    ${enquiryForm(SPECIES, { id: "compra" })}
  </div>
</section>`,
});

/* ------------------------------------------------------------------ */
/* /transporte-de-aves/                                                */
/* ------------------------------------------------------------------ */
export const transporte = () => ({
  path: "/transporte-de-aves/",
  title: "Transporte de aves en España: cómo se organiza",
  description:
    "Cómo planificamos la recogida o la entrega de aves en España: transportín, clima, ruta, documentación y confirmación de entrega.",
  breadcrumbs: [crumbHome, { href: "/transporte-de-aves/", label: "Transporte" }],
  body: `${pageHero(
    "Transporte de aves",
    "Cada traslado se valora de forma individual. El bienestar del animal está por encima de la rapidez o de la comodidad logística.",
  )}
<section class="section">
  <div class="container prose">
    <h2>Opciones de recogida y entrega</h2>
    <p>La recogida presencial es siempre la opción preferente: reduce el tiempo de viaje, permite explicar en persona los cuidados y facilita que el ave se traslade directamente a su nuevo hogar. Cuando no es viable, se valora una entrega acordada o un servicio especializado en transporte de animales vivos.</p>
    <div class="alert alert--warn">
      <h3>Sobre las empresas de paquetería</h3>
      <p>Los servicios de mensajería convencional no son un medio adecuado ni, en general, admisible para el traslado de aves vivas. No utilizamos este tipo de envíos.</p>
    </div>

    <h2>Preparación previa</h2>
    <ul>
      <li>Acostumbrar al ave al transportín durante los días previos.</li>
      <li>Comprobar el estado general y el peso antes del viaje.</li>
      <li>Evitar traslados con aves recién llegadas, enfermas o en muda intensa.</li>
      <li>Preparar agua y alimento húmedo para trayectos largos.</li>
    </ul>

    <h2>El transportín adecuado</h2>
    <p>Rígido, bien ventilado, con cierre seguro y del tamaño correcto: suficiente para que el ave se mantenga estable pero sin espacio que favorezca golpes en frenadas. Una percha baja y firme, sustrato absorbente y ausencia de objetos sueltos completan la preparación.</p>

    <h2>Clima y franja horaria</h2>
    <p>La temperatura es el factor que más condiciona la decisión. En verano se evitan las horas centrales y en invierno las madrugadas frías. Ante avisos meteorológicos o temperaturas extremas, el traslado se pospone.</p>

    <h2>Planificación de la ruta</h2>
    <p>Se define el itinerario, las paradas de comprobación y una previsión de duración total. En trayectos largos, las paradas permiten revisar al ave, ofrecer agua y ventilar sin exponerla a corrientes.</p>

    <h2>Reducción del estrés</h2>
    <p>Conducción suave, sin música alta, con el transportín sujeto y parcialmente cubierto para limitar los estímulos visuales sin bloquear la ventilación.</p>

    <h2>Documentación durante el traslado</h2>
    <p>La documentación que corresponda al ejemplar viaja con el ave. Consulta la <a href="/documentacion-cites/">página sobre CITES y documentación</a> para conocer el marco general.</p>

    <h2>Comunicación y confirmación</h2>
    <p>Antes del traslado se acuerda punto, hora y persona de contacto. Durante el trayecto se informa de cualquier incidencia y, a la llegada, se confirma la entrega y se repasan las pautas de las primeras horas.</p>

    <h2>Cobertura</h2>
    <p>Trabajamos principalmente en ${esc(BRAND.coverage)}. Los destinos insulares y los traslados internacionales requieren una valoración específica y trámites adicionales.</p>

    <h2>Preguntas frecuentes sobre el transporte</h2>
    ${faqList(
      [
        ["¿Puedo recoger el ave en persona?", "Sí, es la opción preferente siempre que sea posible. Se acuerda día, hora y punto de recogida."],
        ["¿Se puede enviar un ave por mensajería?", "No. El traslado se realiza mediante recogida, entrega acordada o servicios especializados en animales vivos."],
        ["¿Qué ocurre si hace demasiado calor o frío?", "El traslado se pospone. Ninguna fecha justifica exponer al animal a un riesgo térmico."],
        ["¿Cuánto dura un trayecto largo?", "Depende de la distancia y de las paradas planificadas. La duración estimada se comunica antes del viaje."],
      ],
      { schema: true },
    )}
  </div>
</section>
${ctaBand({ title: "¿Quieres valorar el traslado a tu provincia?", secondary: { href: "/disponibilidad/", label: "Ver disponibilidad" } })}`,
});

/* ------------------------------------------------------------------ */
/* /documentacion-cites/                                               */
/* ------------------------------------------------------------------ */
export const cites = () => ({
  path: "/documentacion-cites/",
  title: "CITES y documentación de aves: guía informativa",
  description:
    "Qué es CITES, por qué se regulan ciertas especies de aves y qué documentación puede acompañar a un ejemplar según su origen.",
  breadcrumbs: [crumbHome, { href: "/documentacion-cites/", label: "CITES y documentación" }],
  body: `${pageHero(
    "CITES y documentación",
    "Información divulgativa para entender por qué determinadas aves están reguladas y qué papel juega la documentación.",
  )}
<section class="section">
  <div class="container prose">
    <div class="alert alert--note">
      <h3>Aviso</h3>
      <p>Esta página tiene finalidad informativa y no constituye asesoramiento legal. Los requisitos aplicables dependen de la especie, del origen del ejemplar y de la normativa vigente en cada momento. Verifica siempre la información con las autoridades españolas y de la Unión Europea competentes en la materia.</p>
    </div>

    <h2>Qué es CITES</h2>
    <p>CITES es el convenio internacional sobre el comercio de especies amenazadas de fauna y flora silvestres. Su objetivo es garantizar que el comercio internacional de determinadas especies no ponga en peligro su supervivencia. Las especies incluidas se distribuyen en apéndices con distintos niveles de protección.</p>

    <h2>Por qué muchas psitácidas están reguladas</h2>
    <p>Numerosos loros han sufrido una presión importante por captura y pérdida de hábitat. La regulación busca diferenciar con claridad los ejemplares de origen lícito de los procedentes de capturas ilegales, y establecer controles sobre su circulación.</p>

    <h2>La documentación depende del caso</h2>
    <p>No existe un documento único aplicable a todas las aves. Lo que corresponda dependerá de la especie, del apéndice en que esté incluida, del país de origen y de la operación concreta. Por eso no publicamos afirmaciones generales del tipo «todas las aves llevan el mismo certificado».</p>

    <h2>Procedencia lícita</h2>
    <p>Que un ejemplar tenga un origen acreditable es una garantía tanto para el animal como para la persona que convive con él. Permite justificar su tenencia, facilita traslados futuros y evita problemas ante un cambio de titularidad.</p>

    <h2>Métodos de identificación</h2>
    <p>Según los casos pueden emplearse anillas cerradas colocadas en los primeros días de vida o microchips implantados por un veterinario. Su uso depende de la especie, del tamaño del ave y de la normativa aplicable, por lo que no puede darse por hecho de forma universal.</p>

    <h2>Conserva siempre el expediente</h2>
    <ul>
      <li>Guarda los originales en lugar seguro y una copia digital de respaldo.</li>
      <li>Anota los datos de identificación del ejemplar tal y como aparecen en la documentación.</li>
      <li>Conserva también facturas, informes veterinarios y cualquier comunicación relevante.</li>
      <li>Si el ave cambia de titular, transmite la documentación completa.</li>
    </ul>

    <h2>Antes de viajar o de mudarte al extranjero</h2>
    <p>Los desplazamientos internacionales con especies reguladas requieren trámites específicos que conviene consultar con antelación ante la autoridad competente. Planificarlo con meses de margen evita situaciones difíciles de resolver.</p>

    <h2>Preguntas frecuentes</h2>
    ${faqList(
      [
        ["¿Todas las aves necesitan documentación CITES?", "No. Depende de la especie y de su inclusión o no en los apéndices del convenio, así como del origen del ejemplar."],
        ["¿La documentación acredita la salud del ave?", "No. Son cuestiones distintas: la documentación se refiere a la procedencia y la legalidad, mientras que el estado de salud lo valora un veterinario."],
        ["¿Qué hago si pierdo los documentos?", "Contacta con la autoridad competente que los emitió para conocer el procedimiento aplicable en tu caso."],
      ],
      { schema: true },
    )}
  </div>
</section>
${ctaBand({ title: "¿Dudas sobre la documentación de una especie concreta?", secondary: { href: "/aves/", label: "Ver especies" } })}`,
});

/* ------------------------------------------------------------------ */
/* /tenencia-responsable/                                              */
/* ------------------------------------------------------------------ */
export const tenencia = () => ({
  path: "/tenencia-responsable/",
  title: "Tenencia responsable de loros: guía completa",
  description:
    "Guía sobre lo que implica convivir con un loro: espacio, ruido, dieta, enriquecimiento, veterinario, longevidad y convivencia familiar.",
  breadcrumbs: [crumbHome, { href: "/tenencia-responsable/", label: "Tenencia responsable" }],
  body: `${pageHero(
    "Tenencia responsable",
    "Convivir con una psitácida es un compromiso de años o décadas. Esta guía explica sin rodeos lo que supone en el día a día.",
  )}
<section class="section">
  <div class="container prose">
    <h2>Animales inteligentes y sociales</h2>
    <p>Los loros son aves con capacidades cognitivas notables y una vida social compleja. En libertad pasan gran parte del día buscando comida, desplazándose y relacionándose con su grupo. En un hogar, ese tiempo debe llenarse con estímulos e interacción; de lo contrario aparecen gritos, picaje y conductas repetitivas.</p>

    <h2>Compromiso a largo plazo</h2>
    <p>Un guacamayo o una cacatúa pueden superar los cincuenta años. La pregunta relevante no es si puedes cuidarlo hoy, sino con quién estará dentro de dos o tres décadas. Conviene dejarlo previsto por escrito con alguien de confianza.</p>

    <h2>Ruido</h2>
    <p>Las vocalizaciones forman parte de la especie y no se eliminan con entrenamiento. Se puede reducir el griterío por atención con un manejo adecuado, pero las llamadas naturales seguirán existiendo. Si la vivienda o el vecindario no lo admiten, hay que elegir otra especie.</p>

    <h2>Interacción diaria</h2>
    <p>La mayoría de las psitácidas necesitan varias horas diarias de compañía o actividad supervisada. No basta con tenerlas en la misma habitación: se requiere interacción activa, entrenamiento y juego.</p>

    <h2>Dieta</h2>
    <p>Base de pienso adecuado, verdura fresca a diario, fruta moderada y grasas controladas. La dieta exclusiva de semillas es la causa más frecuente de problemas evitables. Amplía en nuestra guía de <a href="/blog/alimentacion-equilibrada-para-loros/">alimentación equilibrada</a>.</p>

    <h2>Jaula y voladero</h2>
    <p>Como criterio general, el ave debe poder extender las alas por completo y desplazarse sin rozar los barrotes, con separación de barrote adecuada a su tamaño y perchas de distintos diámetros. Es preferible priorizar espacio y seguridad frente a la estética.</p>

    <h2>Enriquecimiento y tiempo fuera de la jaula</h2>
    <p>Forrajeo, juguetes destructibles, entrenamiento con refuerzo positivo y salidas diarias a un espacio seguro. Consulta el artículo sobre <a href="/blog/importancia-del-enriquecimiento-ambiental/">enriquecimiento ambiental</a>.</p>

    <h2>Veterinario y costes</h2>
    <p>La atención veterinaria de aves es especializada y no todas las clínicas la ofrecen. Localiza una antes de la llegada del ave y prevé un fondo para revisiones periódicas y urgencias.</p>

    <h2>Viajes y ausencias</h2>
    <p>Antes de adquirir un ave conviene resolver quién la cuidará durante las vacaciones o una hospitalización. Improvisarlo suele derivar en soluciones deficientes para el animal.</p>

    <h2>Convivencia con niños y otros animales</h2>
    <p>La interacción con menores debe ser siempre supervisada: un pico potente puede causar lesiones importantes, incluso sin intención agresiva. La convivencia con perros y gatos exige separación física y supervisión constante; la saliva de los felinos supone un riesgo grave para las aves.</p>

    <h2>Mordeduras y destrucción</h2>
    <p>Roer es una conducta normal. Muebles, marcos, cables y libros están en riesgo si el ave anda suelta sin supervisión. Ofrecer madera adecuada canaliza esta necesidad.</p>

    <h2>Comportamiento hormonal</h2>
    <p>Durante los picos hormonales pueden aparecer territorialidad, agresividad puntual o conductas de nidificación. Se gestionan ajustando horas de luz, evitando caricias en zonas que estimulan la conducta reproductiva y no ofreciendo lugares tipo nido.</p>

    <h2>Antes de decidir</h2>
    <p>Si después de leer esta página tienes dudas, es una buena señal: significa que estás valorando la decisión en serio. Escríbenos y lo analizamos juntos.</p>
  </div>
</section>
${ctaBand({ title: "¿Quieres saber si una especie encaja en tu hogar?", secondary: { href: "/blog/como-elegir-un-loro-adecuado/", label: "Leer la guía de elección" } })}`,
});

/* ------------------------------------------------------------------ */
/* /sobre-nosotros/                                                    */
/* ------------------------------------------------------------------ */
export const sobreNosotros = () => ({
  path: "/sobre-nosotros/",
  title: `Sobre nosotros | ${BRAND.name}`,
  description:
    "Quiénes somos, cómo trabajamos y qué principios seguimos en la cría, el asesoramiento y la entrega de aves exóticas en España.",
  breadcrumbs: [crumbHome, { href: "/sobre-nosotros/", label: "Sobre nosotros" }],
  body: `${pageHero(
    "Sobre nosotros",
    "Trabajamos con aves exóticas priorizando el bienestar animal, la información honesta y el acompañamiento posterior a la entrega.",
  )}
<section class="section">
  <div class="container prose">
    <div class="alert alert--warn">
      <h3>Información pendiente de completar</h3>
      <p>Los datos identificativos de la empresa aún no se han incorporado. Los campos marcados como <strong>[PENDIENTE]</strong> deben sustituirse por información real y verificable antes de publicar el sitio. No incluimos años de experiencia, registros, licencias, premios ni cifras de clientes que no podamos acreditar.</p>
    </div>

    <h2>Cómo trabajamos</h2>
    <p>Cada consulta se atiende de forma individual. Antes de hablar de disponibilidad o de precio, dedicamos tiempo a entender el hogar de destino: espacio, rutina, convivientes y expectativas. Si concluimos que una especie no encaja, lo decimos.</p>

    <h2>Principios</h2>
    <ul>
      <li><strong>Bienestar primero.</strong> Ninguna entrega se acelera por conveniencia comercial.</li>
      <li><strong>Información verificable.</strong> No publicamos datos que no podamos sostener.</li>
      <li><strong>Sin presión.</strong> Nada de contadores, escasez artificial ni ofertas con caducidad.</li>
      <li><strong>Acompañamiento.</strong> El seguimiento posterior forma parte del servicio.</li>
    </ul>

    <h2>Datos de la actividad</h2>
    <div class="table-wrap">
      <table class="facts">
        <caption class="visually-hidden">Datos identificativos pendientes de aportar</caption>
        <tbody>
          <tr><th scope="row">Nombre comercial</th><td>${esc(BRAND.name)} <em>(pendiente de confirmar)</em></td></tr>
          <tr><th scope="row">Razón social</th><td>${esc(BRAND.legalName)}</td></tr>
          <tr><th scope="row">NIF/CIF</th><td>${esc(BRAND.nif)}</td></tr>
          <tr><th scope="row">Núcleo zoológico / registro</th><td>[PENDIENTE: número de registro si procede]</td></tr>
          <tr><th scope="row">Ubicación</th><td>${esc(BRAND.address)}</td></tr>
          <tr><th scope="row">Cobertura</th><td>${esc(BRAND.coverage)}</td></tr>
          <tr><th scope="row">Atención veterinaria</th><td>[PENDIENTE: indicar si existe colaboración veterinaria estable]</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Qué puedes esperar de nosotros</h2>
    <p>Respuestas concretas, plazos realistas y explicaciones comprensibles sobre documentación, transporte y cuidados. Y una recomendación sincera cuando la mejor decisión sea esperar o elegir otra especie.</p>

    <h2>Opiniones de clientes</h2>
    <p class="muted">No publicaremos testimonios hasta disponer de opiniones reales y verificables aportadas por personas que hayan completado el proceso.</p>
  </div>
</section>
${ctaBand({ title: "¿Hablamos?", secondary: { href: "/preguntas-frecuentes/", label: "Ver preguntas frecuentes" } })}`,
});

/* ------------------------------------------------------------------ */
/* /contacto/                                                          */
/* ------------------------------------------------------------------ */
export const contacto = () => ({
  path: "/contacto/",
  title: "Contacto y consulta de disponibilidad",
  description:
    "Envía tu consulta sobre especies, disponibilidad, documentación o transporte de aves en España. Respuesta personalizada y sin compromiso.",
  breadcrumbs: [crumbHome, { href: "/contacto/", label: "Contacto" }],
  body: `${pageHero(
    "Contacto",
    "Cuéntanos qué buscas y cómo es tu hogar. Te responderemos con información realista sobre disponibilidad, idoneidad y siguientes pasos.",
  )}
<section class="section">
  <div class="container layout-aside">
    <div>
      <h2>Formulario de consulta</h2>
      ${enquiryForm(SPECIES, { id: "contacto" })}
    </div>
    <aside class="aside-sticky">
      <div class="aside-card">
        <h2 style="font-size:var(--fs-lg)">Datos de contacto</h2>
        <ul style="list-style:none;padding:0;font-size:var(--fs-sm)">
          <li><strong>Email:</strong> ${esc(BRAND.email)}</li>
          <li><strong>Teléfono / WhatsApp:</strong> ${esc(BRAND.phone)}</li>
          <li><strong>Horario:</strong> ${esc(BRAND.hours)}</li>
          <li><strong>Zona de recogida:</strong> ${esc(BRAND.address)}</li>
          <li><strong>Cobertura:</strong> ${esc(BRAND.coverage)}</li>
        </ul>
        <p class="muted" style="font-size:var(--fs-xs)">Los datos marcados como pendientes se completarán con información real antes de la publicación.</p>
        <hr>
        <h3 style="font-size:var(--fs-base)">Antes de escribir</h3>
        <p class="muted" style="font-size:var(--fs-sm)">Puede que tu duda ya esté resuelta en las <a href="/preguntas-frecuentes/">preguntas frecuentes</a> o en la página de <a href="/como-comprar/">cómo comprar</a>.</p>
      </div>
    </aside>
  </div>
</section>`,
});

/* ------------------------------------------------------------------ */
/* /preguntas-frecuentes/                                              */
/* ------------------------------------------------------------------ */
const FAQ_GROUPS = [
  [
    "Disponibilidad",
    [
      ["¿Cómo puedo saber qué aves están disponibles?", "La disponibilidad general por especie se publica en la página de <a href=\"/disponibilidad/\">disponibilidad</a> y se confirma de forma individual al responder a tu consulta."],
      ["¿Publicáis fichas de ejemplares concretos?", "Sólo cuando disponemos de información verificable sobre ese ejemplar. Preferimos no publicar datos que no podamos acreditar."],
      ["¿Con cuánta antelación conviene consultar?", "Cuanto antes mejor, especialmente si buscas una especie concreta. Así podemos informarte cuando cambie la situación."],
    ],
  ],
  [
    "Compra y reservas",
    [
      ["¿Enviar una consulta me compromete a comprar?", "No. La consulta sirve para intercambiar información. Ningún paso es vinculante hasta que ambas partes lo acuerdan por escrito."],
      ["¿Puedo reservar un ave?", "Puede acordarse una reserva cuando existe un ejemplar concreto. Las condiciones se explican por escrito antes de cualquier pago."],
      ["¿Por qué no hay carrito de compra?", "Porque se trata de animales vivos. Cada caso requiere valorar idoneidad, documentación y transporte antes de cerrar nada."],
    ],
  ],
  [
    "Pagos",
    [
      ["¿Qué métodos de pago aceptáis?", "<strong>[PENDIENTE: métodos de pago aceptados]</strong>. Se detallan por escrito antes de cualquier abono."],
      ["¿Se paga algo por hacer una consulta?", "No. La consulta y el asesoramiento previo no tienen coste."],
      ["¿Por qué no aparecen precios en las fichas?", "No publicamos importes que no estén confirmados. Cuando exista un precio real para un ejemplar, se comunica de forma clara."],
    ],
  ],
  [
    "Documentación y CITES",
    [
      ["¿Qué documentación recibe el comprador?", "La que corresponda al ejemplar y a la especie según la normativa aplicable. Se entrega junto con el ave y conviene conservarla. Más información en <a href=\"/documentacion-cites/\">CITES y documentación</a>."],
      ["¿Las aves necesitan documentación CITES?", "Depende de la especie y de su origen. No todas las aves están sujetas a los mismos requisitos, por lo que se valora caso por caso."],
      ["¿La documentación garantiza el estado de salud?", "No. Son ámbitos distintos: el estado de salud lo valora un veterinario mediante revisión."],
    ],
  ],
  [
    "Transporte y entrega",
    [
      ["¿Realizáis entregas en toda España?", "Valoramos cada caso según destino, especie, clima, documentación y disponibilidad de transporte adecuado. No prometemos cobertura universal automática."],
      ["¿Cómo se transporta un ave?", "Mediante recogida presencial, entrega acordada o servicios especializados en animales vivos, siempre con transportín adecuado y planificación de ruta y temperatura. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>."],
      ["¿Se puede enviar por mensajería?", "No. La paquetería convencional no es un medio adecuado para el traslado de aves vivas."],
      ["¿Qué pasa si el tiempo es adverso?", "El traslado se pospone. Ninguna fecha justifica exponer al animal a riesgo térmico."],
    ],
  ],
  [
    "Cuidados y adaptación",
    [
      ["¿Qué debo preparar antes de recibirla?", "Jaula montada y ubicada, el mismo alimento que consume, transportín, veterinario localizado y una casa revisada. Consulta la <a href=\"/blog/que-preparar-antes-de-recibir-un-loro/\">lista de preparativos</a>."],
      ["¿Cuánto tarda un ave en adaptarse?", "Depende del ejemplar y de la especie. Suele hablarse de semanas, no de días; los primeros días conviene reducir estímulos."],
      ["¿Qué come un loro?", "Base de pienso adecuado, verdura fresca diaria, fruta moderada y grasas controladas. Amplía en <a href=\"/blog/alimentacion-equilibrada-para-loros/\">alimentación equilibrada</a>."],
    ],
  ],
  [
    "Idoneidad",
    [
      ["¿Cómo sé qué especie es adecuada para mí?", "Analizando ruido tolerable, espacio, horas disponibles, experiencia previa y presupuesto. Nuestra <a href=\"/blog/como-elegir-un-loro-adecuado/\">guía de elección</a> desarrolla cada punto."],
      ["¿Es buena idea un loro con niños pequeños?", "Requiere supervisión constante y elección cuidadosa de la especie. Un pico potente puede causar lesiones sin intención agresiva."],
      ["¿Puedo tener un loro si trabajo fuera todo el día?", "Las especies muy demandantes no encajan. Algunas más independientes pueden adaptarse si se compensa con interacción diaria y enriquecimiento."],
    ],
  ],
  [
    "Después de la entrega",
    [
      ["¿Ofrecéis seguimiento posterior?", "Sí. Seguimos disponibles para resolver dudas de adaptación, alimentación y manejo tras la entrega."],
      ["¿Qué hago si detecto algo raro en el ave?", "Contactar con un veterinario especializado en aves cuanto antes y avisarnos. Las aves ocultan los síntomas y conviene actuar pronto."],
      ["¿Qué pasa si no puedo seguir cuidándola?", "Escríbenos antes de tomar decisiones precipitadas; buscaremos la mejor alternativa posible para el animal."],
    ],
  ],
];

export const faq = () => ({
  path: "/preguntas-frecuentes/",
  title: "Preguntas frecuentes sobre compra y cuidado de aves",
  description:
    "Respuestas sobre disponibilidad, reservas, pagos, documentación CITES, transporte, cuidados e idoneidad de las aves exóticas en España.",
  breadcrumbs: [crumbHome, { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" }],
  body: `${pageHero(
    "Preguntas frecuentes",
    "Las dudas que recibimos con más frecuencia, agrupadas por temas y respondidas sin prometer lo que no podemos garantizar.",
  )}
<section class="section">
  <div class="container container--narrow">
    <nav aria-label="Índice de categorías" style="margin-bottom:var(--s-6)">
      <ul class="filters" style="list-style:none;padding:0">
        ${FAQ_GROUPS.map(([g]) => `<li><a href="#${slugify(g)}">${esc(g)}</a></li>`).join("")}
      </ul>
    </nav>
    ${FAQ_GROUPS.map(
      ([g, items]) =>
        `<h2 id="${slugify(g)}">${esc(g)}</h2>${faqList(items, { group: false })}<div style="height:var(--s-6)"></div>`,
    ).join("")}
  </div>
</section>
${ctaBand({ title: "¿No has encontrado tu respuesta?", secondary: { href: "/como-comprar/", label: "Ver el proceso" } })}`,
  faqSchema: FAQ_GROUPS.flatMap(([, items]) => items),
});

export function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ------------------------------------------------------------------ */
/* Páginas legales                                                     */
/* ------------------------------------------------------------------ */
const legalNotice = `<div class="alert alert--warn">
  <h3>Plantilla pendiente de completar</h3>
  <p>Este texto es una plantilla. Los campos <strong>[PENDIENTE]</strong> deben sustituirse por los datos reales del titular y revisarse por un profesional antes de la publicación.</p>
</div>`;

export const avisoLegal = () => ({
  path: "/aviso-legal/",
  title: "Aviso legal",
  description: "Información legal del titular del sitio web, condiciones de uso y propiedad intelectual.",
  breadcrumbs: [crumbHome, { href: "/aviso-legal/", label: "Aviso legal" }],
  body: `${pageHero("Aviso legal", "Información sobre el titular del sitio y las condiciones de uso.")}
<section class="section"><div class="container container--narrow prose">
${legalNotice}
<h2>Titular del sitio web</h2>
<ul>
  <li>Denominación: ${esc(BRAND.legalName)}</li>
  <li>NIF/CIF: ${esc(BRAND.nif)}</li>
  <li>Domicilio: ${esc(BRAND.address)}</li>
  <li>Email: ${esc(BRAND.email)}</li>
  <li>Teléfono: ${esc(BRAND.phone)}</li>
  <li>Datos registrales: [PENDIENTE: registro mercantil u otros, si procede]</li>
</ul>
<h2>Objeto</h2>
<p>Este sitio ofrece información sobre especies de aves exóticas, su cuidado y el proceso de consulta previo a una posible adquisición. El acceso y la navegación implican la aceptación de las condiciones recogidas en este aviso.</p>
<h2>Uso del sitio</h2>
<p>La persona usuaria se compromete a utilizar el sitio conforme a la ley y a no realizar actividades que puedan dañar, sobrecargar o impedir su normal funcionamiento.</p>
<h2>Propiedad intelectual</h2>
<p>Los textos, imágenes y elementos de diseño pertenecen al titular o se utilizan con autorización. No se permite su reproducción sin consentimiento previo por escrito.</p>
<h2>Responsabilidad</h2>
<p>La información sobre cuidados, documentación y normativa tiene carácter divulgativo y no sustituye el asesoramiento veterinario o jurídico profesional.</p>
<h2>Legislación aplicable</h2>
<p>Estas condiciones se rigen por la legislación española. [PENDIENTE: fuero aplicable].</p>
</div></section>`,
});

export const privacidad = () => ({
  path: "/politica-de-privacidad/",
  title: "Política de privacidad",
  description: "Cómo se tratan los datos personales facilitados a través de los formularios de este sitio web.",
  breadcrumbs: [crumbHome, { href: "/politica-de-privacidad/", label: "Política de privacidad" }],
  body: `${pageHero("Política de privacidad", "Información sobre el tratamiento de los datos personales facilitados en el sitio.")}
<section class="section"><div class="container container--narrow prose">
${legalNotice}
<h2>Responsable del tratamiento</h2>
<p>${esc(BRAND.legalName)} — NIF ${esc(BRAND.nif)} — ${esc(BRAND.email)}.</p>
<h2>Finalidad</h2>
<p>Los datos facilitados en el formulario de consulta se utilizan exclusivamente para responder a la solicitud, valorar la idoneidad y, en su caso, gestionar el proceso posterior. Si se marca la casilla correspondiente, también para el envío de contenidos informativos.</p>
<h2>Base jurídica</h2>
<p>El consentimiento de la persona interesada y, en su caso, la aplicación de medidas precontractuales solicitadas por ella.</p>
<h2>Conservación</h2>
<p>Los datos se conservan mientras dure la relación y, posteriormente, durante los plazos legales de prescripción aplicables. [PENDIENTE: plazos concretos].</p>
<h2>Destinatarios</h2>
<p>No se ceden datos a terceros con fines publicitarios. [PENDIENTE: proveedores de correo, alojamiento o gestión de formularios que actúen como encargados del tratamiento].</p>
<h2>Derechos</h2>
<p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${esc(BRAND.email)}, así como presentar una reclamación ante la autoridad de control competente.</p>
<h2>Seguridad</h2>
<p>Se aplican medidas técnicas y organizativas razonables. Los formularios se procesan en servidor y este sitio no almacena credenciales ni claves en el navegador.</p>
</div></section>`,
});

export const cookies = () => ({
  path: "/politica-de-cookies/",
  title: "Política de cookies",
  description: "Qué cookies utiliza este sitio web, con qué finalidad y cómo gestionar el consentimiento.",
  breadcrumbs: [crumbHome, { href: "/politica-de-cookies/", label: "Política de cookies" }],
  body: `${pageHero("Política de cookies", "Uso de cookies y almacenamiento local en este sitio web.")}
<section class="section"><div class="container container--narrow prose">
${legalNotice}
<h2>Situación actual</h2>
<p>Este sitio no carga por defecto herramientas de medición ni de publicidad. Únicamente se emplea almacenamiento local del navegador para recordar tu decisión sobre el aviso de cookies.</p>
<div class="table-wrap"><table class="facts">
  <caption class="visually-hidden">Almacenamiento utilizado</caption>
  <thead><tr><th scope="col">Nombre</th><th scope="col">Tipo</th><th scope="col">Finalidad</th></tr></thead>
  <tbody>
    <tr><th scope="row">consentimiento-cookies</th><td>Almacenamiento local, técnico</td><td>Recordar si has aceptado o rechazado las cookies no necesarias.</td></tr>
  </tbody>
</table></div>
<h2>Si en el futuro se activa la analítica</h2>
<p>Las herramientas de medición sólo se cargarán después de obtener tu consentimiento expreso. Mientras no se acepte, no se descargará ningún script de terceros.</p>
<h2>Cómo revocar el consentimiento</h2>
<p>Puedes borrar el almacenamiento local desde la configuración de tu navegador para que el aviso vuelva a mostrarse, o modificar la configuración de cookies de tu navegador en cualquier momento.</p>
</div></section>`,
});

export const terminos = () => ({
  path: "/terminos-y-condiciones/",
  title: "Términos y condiciones",
  description: "Condiciones aplicables a las consultas, reservas, entregas y responsabilidades relacionadas con las aves.",
  breadcrumbs: [crumbHome, { href: "/terminos-y-condiciones/", label: "Términos y condiciones" }],
  body: `${pageHero("Términos y condiciones", "Marco general del proceso de consulta, reserva y entrega.")}
<section class="section"><div class="container container--narrow prose">
${legalNotice}
<h2>Naturaleza del servicio</h2>
<p>Este sitio no permite la compra inmediata de animales. Las consultas enviadas no constituyen un contrato ni reservan ningún ejemplar.</p>
<h2>Confirmación de disponibilidad</h2>
<p>La disponibilidad se confirma de forma manual e individual. La información publicada por especie es orientativa y puede variar.</p>
<h2>Reservas y pagos</h2>
<p>Las condiciones de reserva, importes, plazos y consecuencias de una cancelación se comunican por escrito antes de cualquier abono. [PENDIENTE: condiciones concretas].</p>
<h2>Entrega</h2>
<p>La entrega se realiza mediante recogida o transporte adecuado y puede posponerse por motivos de salud del animal, meteorología o documentación pendiente.</p>
<h2>Bienestar animal</h2>
<p>Nos reservamos la posibilidad de no completar una operación si existen indicios razonables de que el animal no recibirá los cuidados adecuados.</p>
<h2>Responsabilidad</h2>
<p>La información divulgativa del sitio no sustituye al asesoramiento veterinario ni jurídico. [PENDIENTE: garantías legales aplicables y procedimiento de reclamación].</p>
<h2>Legislación y jurisdicción</h2>
<p>Legislación española. [PENDIENTE: fuero aplicable].</p>
</div></section>`,
});

/* ------------------------------------------------------------------ */
/* 404                                                                 */
/* ------------------------------------------------------------------ */
export const notFound = () => ({
  path: "/404/",
  noindex: true,
  title: "Página no encontrada (404)",
  description: "La página solicitada no existe o ha cambiado de dirección.",
  body: `<section class="section">
  <div class="container error-page">
    <p class="eyebrow">Error 404</p>
    <h1>No hemos encontrado esta página</h1>
    <p class="lead">Es posible que la dirección haya cambiado o que el enlace esté incompleto. Puedes continuar desde aquí:</p>
    <div class="btn-row" style="justify-content:center">
      <a class="btn btn--primary" href="/">Ir al inicio</a>
      <a class="btn btn--ghost" href="/aves/">Ver catálogo de aves</a>
      <a class="btn btn--ghost" href="/contacto/">Contactar</a>
    </div>
    <p class="muted" style="margin-top:var(--s-6)">También puedes revisar la <a href="/disponibilidad/">disponibilidad</a>, el <a href="/blog/">blog</a> o las <a href="/preguntas-frecuentes/">preguntas frecuentes</a>.</p>
  </div>
</section>`,
});

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */
export function home() {
  const featured = ["yaco-cola-roja", "guacamayo-azul-amarillo", "cacatua-galah", "eclectus", "conuro-del-sol", "loro-senegal"]
    .map((slug) => SPECIES.find((s) => s.slug === slug))
    .filter(Boolean);

  return {
    path: "/",
    title: `Aves exóticas criadas con responsabilidad en España | ${BRAND.name}`,
    description:
      "Información transparente sobre especies de loros, disponibilidad, documentación y transporte responsable en España. Consulta sin compromiso.",
    image: "/assets/images/hero-aves.jpg",
    body: `
<section class="hero">
  <div class="container hero__inner">
    <div>
      <p class="eyebrow">Cría y asesoramiento responsable</p>
      <h1>Aves exóticas criadas con responsabilidad</h1>
      <p class="lead">Acompañamos cada decisión con información honesta sobre la especie, su bienestar, la documentación que corresponda y el traslado hasta tu hogar en España, siempre que pueda hacerse en condiciones adecuadas.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="/aves/">Ver aves disponibles</a>
        <a class="btn btn--ghost" href="/como-comprar/">Cómo funciona</a>
      </div>
      <p class="muted" style="font-size:var(--fs-sm);margin-top:var(--s-4)">Sin carrito, sin urgencias artificiales: la disponibilidad se confirma de forma manual en cada consulta.</p>
    </div>
    <div class="hero__media">
      <img src="/assets/images/hero-aves.jpg" width="1200" height="900" fetchpriority="high" decoding="async"
        alt="Guacamayo y loro gris posados sobre ramas naturales en un aviario luminoso">
    </div>
  </div>
</section>

<section class="trustbar">
  <div class="container">
    <ul>
      <li>Bienestar animal por delante de la venta</li>
      <li>Información transparente y verificable</li>
      <li>Documentación cuando corresponda</li>
      <li>Atención antes y después de la entrega</li>
      <li>Transporte responsable y planificado</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Especies</p>
      <h2>Especies destacadas</h2>
      <p class="lead">Cada ficha explica carácter, cuidados, nivel de ruido y tipo de hogar adecuado. La disponibilidad real se confirma al responder a tu consulta.</p>
    </div>
    <div class="grid grid--3">
      ${featured.map((s, i) => speciesCard(s, { eager: i === 0 })).join("")}
    </div>
    <div class="btn-row" style="margin-top:var(--s-6)">
      <a class="btn btn--ghost" href="/aves/">Ver todas las especies</a>
      <a class="btn btn--ghost" href="/disponibilidad/">Consultar disponibilidad</a>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container split">
    <div>
      <p class="eyebrow">Por qué elegirnos</p>
      <h2>Un proceso pensado para el animal, no para cerrar rápido</h2>
      <p>Vender un ave es sencillo; acertar con el hogar de destino no lo es. Por eso dedicamos la primera parte del proceso a entender tu situación y a explicar sin adornos lo que implica convivir con una psitácida.</p>
      <p>Preferimos perder una venta antes que colocar un animal en una casa donde no podrá estar bien. Esa es la diferencia entre un criador que acompaña y un intermediario que despacha.</p>
    </div>
    <div class="grid" style="gap:var(--s-4)">
      <div class="card card--pad card--flat"><h3>Origen y trazabilidad</h3><p class="muted">Trabajamos con ejemplares de procedencia acreditable y entregamos la documentación que corresponda a cada caso.</p></div>
      <div class="card card--pad card--flat"><h3>Bienestar diario</h3><p class="muted">Alojamiento adecuado, dieta variada, enriquecimiento y contacto humano forman parte de la rutina, no del argumentario comercial.</p></div>
      <div class="card card--pad card--flat"><h3>Preparación del comprador</h3><p class="muted">Antes de la entrega repasamos jaula, alimentación, veterinario y primeros días para que la adaptación sea lo más corta posible.</p></div>
      <div class="card card--pad card--flat"><h3>Apoyo posterior</h3><p class="muted">Seguimos disponibles cuando surgen dudas de comportamiento, alimentación o manejo semanas después de la entrega.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Proceso</p>
      <h2>Cómo funciona</h2>
      <p class="lead">Seis pasos, sin pagos automáticos ni decisiones apresuradas.</p>
    </div>
    <ol class="steps">
      <li><h3>Consulta</h3><p>Nos cuentas qué especie te interesa, cómo es tu hogar y qué experiencia tienes.</p></li>
      <li><h3>Confirmación de disponibilidad</h3><p>Revisamos la situación real y te respondemos con claridad, aunque no haya ejemplares.</p></li>
      <li><h3>Información y documentación</h3><p>Explicamos cuidados, condiciones y qué documentación corresponde a esa especie.</p></li>
      <li><h3>Preparación del transporte o recogida</h3><p>Se acuerda el método más adecuado según distancia, clima y estado del ave.</p></li>
      <li><h3>Entrega</h3><p>Repasamos juntos las pautas de los primeros días y la documentación entregada.</p></li>
      <li><h3>Seguimiento posterior</h3><p>Resolvemos dudas de adaptación y manejo durante las semanas siguientes.</p></li>
    </ol>
  </div>
</section>

<section class="section section--brand">
  <div class="container split">
    <div>
      <p class="eyebrow" style="color:#e8b98f">Bienestar</p>
      <h2>Un loro es un compromiso de décadas</h2>
      <p>Muchas psitácidas superan los cuarenta años. Antes de decidir conviene tener resueltas cuestiones que rara vez aparecen en un anuncio de venta.</p>
      <ul>
        <li>Alojamiento amplio y seguro, con perchas naturales y espacio para volar o trepar.</li>
        <li>Enriquecimiento diario: forrajeo, madera para roer y juegos que cambien con frecuencia.</li>
        <li>Interacción social real, no simple presencia en la misma habitación.</li>
        <li>Dieta variada con base adecuada, verdura fresca y grasas controladas.</li>
        <li>Veterinario especializado en aves, localizado antes de la llegada.</li>
        <li>Previsión de quién cuidará del ave si tu situación cambia.</li>
      </ul>
      <a class="btn btn--light" href="/tenencia-responsable/">Leer la guía de tenencia responsable</a>
    </div>
    <div>
      <img src="/assets/images/bienestar-aviario.jpg" width="900" height="700" loading="lazy" decoding="async"
        style="border-radius:var(--radius-lg)"
        alt="Interior de un aviario con perchas de madera natural, comederos y juguetes de forrajeo">
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">España</p>
      <h2>Entregas y recogidas en España</h2>
      <p>Valoramos cada traslado de forma individual. El destino, la especie, la documentación, la previsión meteorológica y la disponibilidad de un transporte adecuado determinan si la entrega puede realizarse y en qué condiciones.</p>
      <p>Cuando el trayecto no puede hacerse con garantías, lo posponemos o proponemos la recogida. No prometemos cobertura automática a cualquier punto del país.</p>
      <div class="btn-row">
        <a class="btn btn--ghost" href="/transporte-de-aves/">Cómo organizamos el transporte</a>
      </div>
      <p class="muted" style="font-size:var(--fs-sm);margin-top:var(--s-4)">Zonas con información específica:
        <a href="/aves/madrid/">Madrid</a>, <a href="/aves/barcelona/">Barcelona</a>, <a href="/aves/valencia/">Valencia</a>,
        <a href="/aves/sevilla/">Sevilla</a>, <a href="/aves/malaga/">Málaga</a>, <a href="/aves/alicante/">Alicante</a>,
        <a href="/aves/murcia/">Murcia</a>, <a href="/aves/zaragoza/">Zaragoza</a>, <a href="/aves/bilbao/">Bilbao</a> y
        <a href="/aves/a-coruna/">A Coruña</a>.
      </p>
    </div>
    <div>
      <img src="/assets/images/transporte-transportin.jpg" width="900" height="700" loading="lazy" decoding="async"
        style="border-radius:var(--radius-lg)"
        alt="Transportín rígido y ventilado preparado con percha baja para el traslado de un ave">
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head section-head--center">
      <p class="eyebrow">Opiniones</p>
      <h2>Qué dicen quienes ya conviven con sus aves</h2>
      <p class="lead">Esta sección se publicará con testimonios reales y verificables. Los textos siguientes son ejemplos de maquetación, no opiniones de clientes.</p>
    </div>
    <div class="grid grid--3">
      <figure class="testimonial"><blockquote>[EJEMPLO DE MAQUETACIÓN — pendiente de testimonio real]</blockquote><figcaption>Espacio reservado para una opinión verificada</figcaption></figure>
      <figure class="testimonial"><blockquote>[EJEMPLO DE MAQUETACIÓN — pendiente de testimonio real]</blockquote><figcaption>Espacio reservado para una opinión verificada</figcaption></figure>
      <figure class="testimonial"><blockquote>[EJEMPLO DE MAQUETACIÓN — pendiente de testimonio real]</blockquote><figcaption>Espacio reservado para una opinión verificada</figcaption></figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="section-head">
      <p class="eyebrow">Dudas habituales</p>
      <h2>Preguntas frecuentes</h2>
    </div>
    ${faqList(
      [
        ["¿Cómo puedo saber qué aves están disponibles?", "La situación general por especie se publica en la página de <a href=\"/disponibilidad/\">disponibilidad</a>, y se confirma de forma individual al responder a tu consulta."],
        ["¿Qué documentación recibe el comprador?", "La que corresponda al ejemplar y a la especie según la normativa aplicable. Puedes ampliar en <a href=\"/documentacion-cites/\">CITES y documentación</a>."],
        ["¿Realizáis entregas en toda España?", "Valoramos cada caso según destino, especie, clima, documentación y transporte disponible. No prometemos cobertura universal automática."],
        ["¿Cómo se transporta un ave?", "Con transportín adecuado, ruta planificada y control de temperatura, mediante recogida, entrega acordada o transporte especializado."],
        ["¿Puedo reservar un ave?", "Puede acordarse una reserva cuando existe un ejemplar concreto, siempre con condiciones explicadas por escrito antes de cualquier pago."],
        ["¿Qué debo preparar antes de recibirla?", "Jaula montada, el mismo alimento que consume, transportín, veterinario localizado y una casa revisada."],
        ["¿Cómo sé qué especie es adecuada para mí?", "Depende del ruido tolerable, el espacio, las horas disponibles y tu experiencia previa. Te ayudamos a valorarlo antes de decidir."],
        ["¿Las aves necesitan documentación CITES?", "Depende de la especie y de su origen; no todas están sujetas a los mismos requisitos."],
      ],
      { schema: true },
    )}
    <div class="btn-row" style="margin-top:var(--s-5)">
      <a class="btn btn--ghost" href="/preguntas-frecuentes/">Ver todas las preguntas</a>
    </div>
  </div>
</section>

${ctaBand({
  title: "Consulta disponibilidad sin compromiso",
  text: "Cuéntanos qué especie te interesa y cómo es tu hogar. Te responderemos con la situación real y con una recomendación honesta, aunque sea esperar.",
})}
`,
  };
}
