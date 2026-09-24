/**
 * Artículos del blog. Contenido evergreen y original.
 * Las fechas son de publicación/actualización editorial del sitio.
 */
export const AUTHOR = "Equipo editorial"; // TODO(negocio): nombre real del autor/responsable

export const POSTS = [
  {
    slug: "como-elegir-un-loro-adecuado",
    title: "Cómo elegir un loro adecuado para tu hogar",
    description:
      "Guía práctica para valorar espacio, ruido, tiempo disponible y experiencia antes de elegir especie de loro en España.",
    published: "2026-01-14",
    updated: "2026-02-20",
    tags: ["Elección", "Antes de comprar"],
    excerpt:
      "Antes de mirar fotos de especies conviene mirar la casa, el horario y el presupuesto. Así se acierta con la elección.",
    body: `
<p>La mayoría de los problemas de convivencia con psitácidas no nacen del ave, sino de una elección hecha al revés: primero se decide la especie que gusta y después se intenta encajar en una vida que no la admite. Invertir el orden evita casi todos los conflictos.</p>

<h2>Empieza por el ruido</h2>
<p>El volumen es el factor que más rupturas de convivencia provoca, y no se corrige con entrenamiento: un guacamayo o una cacatúa grande emiten llamadas que se oyen a través de tabiques y patios interiores. Si vives en un piso con vecindad próxima, las especies de volumen contenido —loro Senegal, ninfa, agapornis— son opciones mucho más realistas.</p>

<h2>Calcula el tiempo real, no el ideal</h2>
<p>Anota cuántas horas pasas en casa despierto entre semana. Un loro grande necesita varias horas diarias de interacción o actividad supervisada durante décadas, incluyendo periodos de vacaciones, mudanzas y cambios de trabajo. Si el cálculo sincero no llega, es preferible una especie menos demandante o posponer la decisión.</p>

<h2>Mide el espacio disponible</h2>
<p>No sólo la jaula: también la habitación donde el ave pasará tiempo fuera, el lugar donde se limpiará y el espacio de almacenamiento para comida y juguetes. Una jaula grande en un pasillo estrecho no resuelve nada.</p>

<h2>Valora la longevidad</h2>
<p>Muchos loros superan los cuarenta años. La pregunta no es si podrás cuidarlo este año, sino con quién estará dentro de veinte. Conviene hablarlo con el resto del hogar y prever quién asumiría el cuidado si tu situación cambia.</p>

<h2>Sé honesto con tu experiencia</h2>
<p>Especies como el <a href="/aves/yaco-cola-roja/">yaco</a> o la <a href="/aves/cacatua-cresta-amarilla/">cacatúa de cresta amarilla</a> exigen lectura del lenguaje corporal y manejo coherente. Si es tu primera psitácida, empezar por una <a href="/aves/ninfa/">ninfa</a> o un <a href="/aves/loro-senegal/">loro Senegal</a> con buen asesoramiento es una decisión más sensata.</p>

<h2>Presupuesto completo</h2>
<p>Además del ave, calcula jaula, transportín, juguetes de reposición constante, alimentación fresca, revisiones veterinarias y un fondo para urgencias. La veterinaria de exóticos es especializada y su coste debe estar previsto desde el principio.</p>

<h2>Siguiente paso</h2>
<p>Cuando tengas claro el perfil, revisa el <a href="/aves/">catálogo de especies</a> y contrasta tu situación con las fichas. Conviene además familiarizarse con la <a href="/documentacion-cites/">documentación CITES</a> que acompaña a muchas especies antes de reservar. Si tienes dudas, escríbenos: preferimos ayudarte a descartar una especie que acompañar una decisión equivocada.</p>
`,
    related: ["que-preparar-antes-de-recibir-un-loro", "errores-comunes-al-comprar-un-loro", "cuanto-vive-un-loro"],
    species: ["ninfa", "loro-senegal", "yaco-cola-roja"],
  },
  {
    slug: "que-preparar-antes-de-recibir-un-loro",
    title: "Qué debes preparar antes de recibir un loro",
    description:
      "Lista de comprobación para preparar jaula, alimentación, veterinario y entorno seguro antes de la llegada de un loro a casa.",
    published: "2026-01-22",
    updated: "2026-02-20",
    tags: ["Preparación", "Bienestar"],
    excerpt: "La primera semana marca la adaptación. Estos son los preparativos que conviene tener resueltos antes de la llegada.",
    body: `
<p>La llegada a un hogar nuevo es uno de los momentos de mayor estrés en la vida de un ave. Cuanto más preparado esté el entorno, más corta será la adaptación.</p>

<h2>La jaula, montada y ubicada</h2>
<p>Instálala antes de la llegada, con perchas de distintos diámetros en madera natural, comederos accesibles y al menos tres o cuatro juguetes de tipos diferentes. Ubícala en una zona con vida familiar, sin corrientes, alejada de la cocina y sin sol directo continuado.</p>

<h2>Comida igual a la anterior</h2>
<p>Pide qué come el ave actualmente y consigue exactamente ese alimento. Los cambios de dieta se hacen después de la adaptación, de forma gradual y nunca en la primera semana.</p>

<h2>Veterinario localizado</h2>
<p>Identifica antes de la llegada una clínica con experiencia en aves exóticas, anota su teléfono y su horario de urgencias. Una revisión inicial en los primeros días es muy recomendable.</p>

<h2>Casa a prueba de aves</h2>
<p>Retira plantas tóxicas, cables accesibles y recipientes de agua abiertos. Elimina sartenes con recubrimiento antiadherente sobrecalentable, ambientadores, velas perfumadas y humo de tabaco: el sistema respiratorio de las aves es extremadamente sensible.</p>

<h2>Rutina de los primeros días</h2>
<p>Menos es más. Deja que el ave observe, ofrécele comida y agua, habla con normalidad y evita visitas, manipulación y fotos con flash. La confianza se construye en semanas, no en horas.</p>

<h2>Material que conviene tener</h2>
<ul>
<li>Transportín adecuado al tamaño, ya montado.</li>
<li>Báscula de precisión para el control de peso.</li>
<li>Pulverizador para los baños.</li>
<li>Juguetes de repuesto y madera para roer.</li>
<li>Carpeta para guardar la documentación entregada.</li>
</ul>

<p>Puedes ampliar información en nuestra guía de <a href="/tenencia-responsable/">tenencia responsable</a>, revisar el <a href="/como-comprar/">proceso completo de consulta y entrega</a> y comprobar qué <a href="/documentacion-cites/">documentación CITES</a> debe llegar con el ave.</p>
`,
    related: ["como-elegir-un-loro-adecuado", "alimentacion-equilibrada-para-loros", "transportar-un-loro-de-forma-segura"],
    species: ["ninfa", "yaco-cola-roja"],
  },
  {
    slug: "alimentacion-equilibrada-para-loros",
    title: "Alimentación equilibrada para loros",
    description:
      "Cómo estructurar una dieta variada para psitácidas: base, verdura fresca, fruta, grasas y alimentos que deben evitarse.",
    published: "2026-01-30",
    updated: "2026-02-20",
    tags: ["Alimentación", "Salud"],
    excerpt: "La dieta explica buena parte de los problemas de salud en psitácidas domésticas. Así se construye una alimentación sensata.",
    body: `
<p>La dieta exclusivamente de semillas sigue siendo la causa más frecuente de problemas evitables en loros de compañía: carencias de calcio y vitamina A, sobrepeso y alteraciones hepáticas.</p>

<h2>Una base estable</h2>
<p>En la mayoría de especies, un pienso extrusionado formulado para psitácidas cubre la base nutricional y evita que el ave seleccione sólo lo que le gusta. La transición desde una dieta de semillas debe ser gradual y supervisada, porque algunas aves tardan semanas en aceptar el nuevo alimento.</p>

<h2>Verdura fresca a diario</h2>
<p>Hoja verde, pimiento, calabaza, zanahoria, brócoli o judía verde aportan fibra, agua y micronutrientes. La verdura debe ser la parte fresca principal de la ración, por encima de la fruta.</p>

<h2>Fruta con moderación</h2>
<p>Aporta azúcares y agua. Es útil como refuerzo y enriquecimiento, pero en cantidades limitadas.</p>

<h2>Grasas controladas</h2>
<p>Los frutos secos son excelentes como premio y para forrajeo, no como base. Especies como la <a href="/aves/cacatua-galah/">cacatúa Galah</a> o las <a href="/aves/amazona/">amazonas</a> son especialmente propensas al sobrepeso.</p>

<h2>Alimentos que deben evitarse</h2>
<ul>
<li>Aguacate, chocolate, cafeína y alcohol.</li>
<li>Sal, azúcar añadido y ultraprocesados.</li>
<li>Restos de comida humana condimentada.</li>
</ul>

<h2>Casos particulares</h2>
<p>El <a href="/aves/eclectus/">eclectus</a> requiere más fibra y verdura fresca y es sensible a la sobresuplementación vitamínica. Cualquier ajuste importante debe consultarse con un veterinario especializado en aves.</p>

<h2>Cómo saber si la dieta funciona</h2>
<p>Peso estable, plumaje uniforme y brillante, heces consistentes y buen nivel de actividad. El control periódico del peso con báscula es la herramienta más simple y más útil.</p>
`,
    related: ["senales-de-estres-en-un-loro", "que-preparar-antes-de-recibir-un-loro", "cuanto-vive-un-loro"],
    species: ["eclectus", "amazona", "cacatua-galah"],
  },
  {
    slug: "senales-de-estres-en-un-loro",
    title: "Señales de estrés en un loro",
    description:
      "Cómo identificar signos de estrés en psitácidas: cambios de conducta, plumaje, alimentación y vocalización, y qué hacer.",
    published: "2026-02-04",
    updated: "2026-02-20",
    tags: ["Bienestar", "Comportamiento"],
    excerpt: "Las aves ocultan el malestar. Reconocer los primeros signos permite actuar antes de que el problema se cronifique.",
    body: `
<p>Como presas naturales, las psitácidas disimulan el dolor y la enfermedad. Cuando un síntoma es evidente, el proceso suele llevar tiempo instalado.</p>

<h2>Signos físicos</h2>
<ul>
<li>Pérdida de peso sostenida, aunque el ave siga comiendo.</li>
<li>Plumaje deshilachado, zonas sin plumas o picaje.</li>
<li>Cambios en las heces mantenidos varios días.</li>
<li>Respiración con cola bombeante o sonidos anómalos.</li>
</ul>

<h2>Signos de conducta</h2>
<ul>
<li>Movimientos repetitivos sin función aparente.</li>
<li>Gritos prolongados nuevos o agresividad repentina.</li>
<li>Apatía, aislamiento o rechazo al juego habitual.</li>
<li>Miedo generalizado a personas conocidas.</li>
</ul>

<h2>Causas frecuentes</h2>
<p>Falta de descanso, aburrimiento, cambios de rutina, mudanzas, obras, aislamiento social, dieta inadecuada, ausencia de luz natural o conflictos con otros animales del hogar. También pueden ser el primer indicio de una enfermedad.</p>

<h2>Qué hacer</h2>
<p>Primero, descartar causa médica con un veterinario especializado en aves. En paralelo, revisar horas de sueño, dieta, enriquecimiento y tiempo de interacción. El picaje, en particular, rara vez tiene una causa única y su abordaje es largo.</p>

<h2>Prevención</h2>
<p>Rutinas estables, diez a doce horas de descanso, enriquecimiento rotativo, dieta variada e interacción diaria previsible. Puedes ampliar en <a href="/blog/importancia-del-enriquecimiento-ambiental/">enriquecimiento ambiental</a> y en la guía de <a href="/tenencia-responsable/">tenencia responsable</a>.</p>
`,
    related: ["importancia-del-enriquecimiento-ambiental", "alimentacion-equilibrada-para-loros", "errores-comunes-al-comprar-un-loro"],
    species: ["yaco-cola-roja", "cacatua-cresta-amarilla"],
  },
  {
    slug: "importancia-del-enriquecimiento-ambiental",
    title: "La importancia del enriquecimiento ambiental",
    description:
      "Qué es el enriquecimiento ambiental en loros y cómo aplicarlo con forrajeo, juguetes, entrenamiento y variación del entorno.",
    published: "2026-02-08",
    updated: "2026-02-20",
    tags: ["Bienestar", "Comportamiento"],
    excerpt: "Un loro sin nada que hacer inventa actividades, y casi ninguna nos gusta. El enriquecimiento es una necesidad, no un extra.",
    body: `
<p>En libertad, buena parte del día de una psitácida se dedica a buscar comida, desplazarse y relacionarse. En casa, esas horas quedan vacías si no se llenan de forma deliberada.</p>

<h2>Forrajeo</h2>
<p>Es la forma más eficaz de enriquecimiento: repartir parte de la ración en juguetes, envolverla en papel o esconderla obliga al ave a trabajar para comer. Empieza con retos fáciles y auméntalos poco a poco.</p>

<h2>Destrucción segura</h2>
<p>Madera blanda, cartón, papel sin tintas problemáticas y cuerdas de fibra natural supervisadas. Destruir es una conducta normal que conviene canalizar hacia objetos adecuados.</p>

<h2>Entrenamiento con refuerzo positivo</h2>
<p>Sesiones de dos o tres minutos varias veces al día bastan. Además de estimular, mejoran el manejo veterinario: entrar al transportín, subir a la mano o dejarse pesar sin estrés.</p>

<h2>Variación del entorno</h2>
<p>Rotar juguetes semanalmente, cambiar la disposición de las perchas y ofrecer nuevas texturas evita la habituación. Basta con introducir novedades progresivamente, sin provocar miedo.</p>

<h2>Enriquecimiento social</h2>
<p>La interacción con personas o, cuando procede, con otras aves compatibles también forma parte del programa. En especies muy sociales como las <a href="/aves/cacatua-galah/">cacatúas</a> es imprescindible combinarla con periodos entrenados de autonomía.</p>

<h2>Señales de que funciona</h2>
<p>Menos gritos por atención, plumaje en mejor estado, aves más activas y menos conductas repetitivas. Si nada mejora, conviene revisar salud, descanso y dieta antes de asumir que el problema es conductual.</p>
`,
    related: ["senales-de-estres-en-un-loro", "que-preparar-antes-de-recibir-un-loro", "diferencias-yaco-amazona-eclectus"],
    species: ["cacatua-galah", "caique"],
  },
  {
    slug: "que-es-cites-y-como-afecta-a-los-propietarios",
    title: "Qué es CITES y cómo afecta a los propietarios de aves",
    seoTitle: "Qué es CITES para propietarios de aves",
    description:
      "Explicación divulgativa de CITES, por qué se regulan ciertas especies de aves y qué implica para quien convive con ellas.",
    published: "2026-02-11",
    updated: "2026-02-20",
    tags: ["Documentación", "Normativa"],
    excerpt: "Una introducción clara al convenio CITES y a por qué la procedencia legal del ave importa tanto como su salud.",
    body: `
<p>CITES es el convenio internacional que regula el comercio de determinadas especies de fauna y flora silvestres para evitar que ese comercio amenace su supervivencia. Muchas psitácidas están incluidas en sus apéndices.</p>

<h2>Qué implica en la práctica</h2>
<p>Que ciertas especies sólo pueden comercializarse acreditando su origen legal, mediante la documentación que corresponda en cada caso. Los requisitos concretos varían según la especie, el apéndice en el que esté incluida, el origen del ejemplar y la normativa aplicable en cada momento.</p>

<h2>Por qué importa al comprador</h2>
<p>La documentación protege al animal y también a quien convive con él: acredita la procedencia, facilita traslados posteriores y evita problemas si en el futuro cambia la titularidad. Conservar el expediente completo es tan importante como recibirlo.</p>

<h2>Identificación</h2>
<p>Según los casos pueden emplearse métodos de identificación como anillas cerradas o microchips. Su uso depende de la especie, el tamaño del ave y la normativa aplicable, por lo que no puede darse por hecho de forma general.</p>

<h2>Lo que este artículo no es</h2>
<p>Esta información es divulgativa y no constituye asesoramiento legal. Antes de comprar, vender, trasladar o exportar un ave, verifica los requisitos vigentes con las autoridades competentes en España y en la Unión Europea.</p>

<p>Puedes ampliar la información en nuestra página sobre <a href="/documentacion-cites/">documentación y CITES</a>.</p>
`,
    related: ["errores-comunes-al-comprar-un-loro", "transportar-un-loro-de-forma-segura", "como-elegir-un-loro-adecuado"],
    species: ["yaco-cola-roja", "guacamayo-rojo"],
  },
  {
    slug: "transportar-un-loro-de-forma-segura",
    title: "Cómo transportar un loro de forma segura",
    description:
      "Buenas prácticas para trasladar aves: transportín adecuado, temperatura, ruta, paradas y reducción del estrés.",
    published: "2026-02-14",
    updated: "2026-02-20",
    tags: ["Transporte", "Bienestar"],
    excerpt: "Un traslado bien planificado reduce el estrés y previene incidentes. Estas son las claves.",
    body: `
<p>El transporte es un momento crítico. La preparación previa importa tanto como el propio trayecto.</p>

<h2>El transportín</h2>
<p>Rígido, ventilado, con cierre seguro y del tamaño adecuado: suficiente para que el ave se mantenga estable, pero no tan amplio como para que se golpee en frenadas. Una percha baja y firme mejora el agarre.</p>

<h2>Acostumbrar antes del viaje</h2>
<p>Dejar el transportín accesible en casa durante días, con premios dentro, convierte una caja amenazante en un lugar conocido. Es la medida que más reduce el estrés.</p>

<h2>Temperatura y clima</h2>
<p>Evita las horas centrales del día en verano y las madrugadas frías en invierno. Nunca dejes el transportín en un vehículo estacionado al sol ni con la climatización apagada.</p>

<h2>Durante el trayecto</h2>
<p>Sujeta el transportín para que no se desplace, mantén una ventilación suave sin corriente directa, evita música alta y planifica paradas para comprobar el estado del ave y ofrecer agua o fruta jugosa.</p>

<h2>A la llegada</h2>
<p>Ubica el transportín junto a la jaula, deja que el ave salga por sí misma y reduce estímulos durante las primeras horas. Observa que come, bebe y descansa.</p>

<h2>Traslados largos</h2>
<p>Para distancias grandes conviene valorar transporte especializado en animales vivos. Consulta nuestra página de <a href="/transporte-de-aves/">transporte de aves</a> para conocer el procedimiento, y lleva contigo la <a href="/documentacion-cites/">documentación CITES</a> del ejemplar durante todo el traslado.</p>
`,
    related: ["que-es-cites-y-como-afecta-a-los-propietarios", "que-preparar-antes-de-recibir-un-loro", "senales-de-estres-en-un-loro"],
    species: ["guacamayo-azul-amarillo", "loro-senegal"],
  },
  {
    slug: "diferencias-yaco-amazona-eclectus",
    title: "Diferencias entre yaco, amazona y eclectus",
    description:
      "Comparativa práctica de tres psitácidas medianas populares: carácter, ruido, cuidados, dieta y tipo de hogar adecuado.",
    published: "2026-02-17",
    updated: "2026-02-20",
    tags: ["Elección", "Comparativas"],
    excerpt: "Tres especies de tamaño similar y necesidades muy distintas. Comparadas sin adornos.",
    body: `
<p>Elegir entre estas tres especies es una duda habitual. Su tamaño es parecido, pero conviven de forma muy diferente.</p>

<h2>Carácter</h2>
<p>El <a href="/aves/yaco-cola-roja/">yaco</a> es observador y reservado, con fuerte dependencia de las rutinas. La <a href="/aves/amazona/">amazona</a> tiende a ser extrovertida y teatral, con periodos hormonales marcados. El <a href="/aves/eclectus/">eclectus</a> suele ser el más pausado de los tres y el que peor tolera los ambientes caóticos.</p>

<h2>Ruido</h2>
<p>El yaco vocaliza en momentos concretos, con silbidos e imitaciones. Las amazonas tienen picos sonoros potentes al amanecer y al atardecer. El eclectus es, por lo general, el más contenido.</p>

<h2>Dieta</h2>
<p>El yaco necesita vigilancia especial del calcio y la vitamina A. Las amazonas requieren control estricto de grasas por su tendencia al sobrepeso. El eclectus demanda más fibra y verdura fresca y es sensible al exceso de suplementos.</p>

<h2>Manejo</h2>
<p>El yaco requiere lectura fina del lenguaje corporal y estabilidad. La amazona necesita límites claros durante los picos hormonales. El eclectus pide un entorno tranquilo y constante.</p>

<h2>¿Cuál encaja mejor?</h2>
<p>Para un hogar tranquilo, con rutinas estables y experiencia previa: yaco. Para una casa activa y sociable que tolere ruido: amazona. Para quien busca un ave más pausada y puede cuidar la dieta con detalle: eclectus.</p>

<p>Compara las fichas completas en el <a href="/aves/">catálogo de especies</a>.</p>
`,
    related: ["como-elegir-un-loro-adecuado", "alimentacion-equilibrada-para-loros", "cuanto-vive-un-loro"],
    species: ["yaco-cola-roja", "amazona", "eclectus"],
  },
  {
    slug: "cuanto-vive-un-loro",
    title: "¿Cuánto vive un loro?",
    description:
      "Esperanza de vida orientativa de las psitácidas más habituales y qué implica su longevidad para quien las adopta.",
    published: "2026-02-19",
    updated: "2026-02-20",
    tags: ["Bienestar", "Antes de comprar"],
    excerpt: "Adoptar un loro grande puede ser un compromiso de varias décadas. Conviene planificarlo desde el primer día.",
    body: `
<p>La longevidad es una de las características que más diferencia a las psitácidas de otros animales de compañía, y una de las menos consideradas antes de la decisión.</p>

<h2>Rangos orientativos</h2>
<ul>
<li>Agapornis: 10–20 años.</li>
<li>Ninfa: 15–25 años.</li>
<li>Conuro del sol: 20–30 años.</li>
<li>Loro Senegal y caique: 25–35 años.</li>
<li>Eclectus: 30–50 años.</li>
<li>Yaco y amazonas: 40–60 años.</li>
<li>Guacamayos y grandes cacatúas: 50 años o más.</li>
</ul>
<p>Son rangos generales publicados para cada grupo; la vida real de cada ejemplar depende de genética, dieta, entorno y atención veterinaria.</p>

<h2>Qué implica en la práctica</h2>
<p>Un guacamayo adquirido hoy puede acompañarte durante cambios de vivienda, de trabajo, de pareja o de país. Conviene pensar quién cuidaría del ave si tu situación cambia y dejarlo hablado por escrito con esa persona.</p>

<h2>Cómo influir positivamente</h2>
<p>Dieta variada, peso controlado, ambiente sin humo ni aerosoles, descanso suficiente, enriquecimiento diario y revisiones veterinarias periódicas son los factores sobre los que sí se puede actuar.</p>

<p>Amplía en <a href="/tenencia-responsable/">tenencia responsable</a>.</p>
`,
    related: ["como-elegir-un-loro-adecuado", "alimentacion-equilibrada-para-loros", "errores-comunes-al-comprar-un-loro"],
    species: ["guacamayo-azul-amarillo", "ninfa"],
  },
  {
    slug: "errores-comunes-al-comprar-un-loro",
    title: "Errores comunes al comprar un loro",
    description:
      "Los fallos más habituales al adquirir una psitácida y cómo evitarlos: prisas, falta de documentación y expectativas irreales.",
    published: "2026-02-20",
    updated: "2026-02-20",
    tags: ["Antes de comprar", "Documentación"],
    excerpt: "Casi todos los errores se cometen antes de que el ave llegue a casa. Estos son los más frecuentes.",
    body: `
<p>Revisar estos puntos antes de decidir evita disgustos posteriores para las personas y, sobre todo, para el animal.</p>

<h2>Comprar por impulso</h2>
<p>Una decisión tomada en un fin de semana rara vez contempla ruido, longevidad o presupuesto veterinario. Tomarse semanas para decidir no tiene ningún coste.</p>

<h2>Elegir por la capacidad de hablar</h2>
<p>Muchos loros no imitan o lo hacen poco. Si la motivación principal es que hable, la expectativa fallará con alta probabilidad.</p>

<h2>No pedir documentación</h2>
<p>Solicita siempre la documentación que corresponda al ejemplar y guárdala. Consulta nuestra página sobre <a href="/documentacion-cites/">CITES y documentación</a> para entender qué preguntar.</p>

<h2>Subestimar el coste de mantenimiento</h2>
<p>Alimentación fresca, juguetes de reposición y veterinaria especializada suponen un gasto recurrente que conviene calcular antes.</p>

<h2>Improvisar la jaula</h2>
<p>Comprar una jaula pequeña "para empezar" acaba en un segundo gasto y en semanas de espacio insuficiente para el ave.</p>

<h2>No preguntar por la rutina previa</h2>
<p>Saber qué come, cómo se maneja y a qué está acostumbrado el ave facilita enormemente la adaptación. Revisa la lista de <a href="/blog/que-preparar-antes-de-recibir-un-loro/">preparativos previos</a>.</p>

<h2>Dar por hecha la disponibilidad</h2>
<p>Con animales vivos no hay carrito de compra: la disponibilidad se confirma caso por caso. Puedes consultarla en <a href="/disponibilidad/">nuestra página de disponibilidad</a>.</p>
`,
    related: ["como-elegir-un-loro-adecuado", "que-es-cites-y-como-afecta-a-los-propietarios", "cuanto-vive-un-loro"],
    species: ["yaco-cola-roja", "agapornis"],
  },
];

export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug);
