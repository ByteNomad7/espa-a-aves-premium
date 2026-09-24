/**
 * Datos de especies. Única fuente de verdad para el catálogo, las fichas,
 * la página de disponibilidad y los enlaces internos.
 *
 * IMPORTANTE: `status` describe la disponibilidad general de la especie,
 * nunca ejemplares concretos. No se incluyen sexos, anillas, microchips,
 * fechas de nacimiento, pruebas de ADN ni precios inventados.
 * Cuando exista backend, este objeto puede alimentarse desde JSON/API.
 */

export const FAMILIES = [
  { slug: "loros-africanos", label: "Loros africanos" },
  { slug: "guacamayos", label: "Guacamayos" },
  { slug: "cacatuas", label: "Cacatúas" },
  { slug: "amazonas", label: "Amazonas" },
  { slug: "conuros", label: "Conuros" },
  { slug: "caiques", label: "Caiques" },
  { slug: "eclectus", label: "Eclectus" },
  { slug: "pequenas-psitacidas", label: "Periquitos y pequeñas psitácidas" },
];

export const SPECIES = [
  {
    slug: "yaco-cola-roja",
    name: "Yaco de cola roja",
    sci: "Psittacus erithacus",
    family: "loros-africanos",
    status: "consultar",
    price: null,
    image: "/assets/images/species/yaco-cola-roja-1.jpg",
    photos: [
      "/assets/images/species/yaco-cola-roja-1.jpg",
      "/assets/images/species/yaco-cola-roja-2.jpg",
      "/assets/images/species/yaco-cola-roja-3.jpg",
    ],
    alt: "Yaco de cola roja (Psittacus erithacus) posado sobre una rama de madera natural",
    intro:
      "El yaco es uno de los loros más estudiados por su capacidad cognitiva y su facilidad para reproducir sonidos. Es un ave sensible que necesita rutinas estables y una convivencia previsible.",
    facts: {
      origen: "África central y occidental",
      tamano: "31–36 cm",
      vida: "40–60 años en cuidados adecuados",
      caracter: "Observador, reservado con desconocidos, muy vinculado a su familia",
      ruido: "Medio; vocaliza en momentos concretos del día",
      social: "Alta: varias horas de interacción diaria",
      nivel: "Avanzado",
    },
    sections: {
      caracteristicas:
        "<p>El yaco de cola roja presenta un plumaje gris con ribeteado claro y la cola de un rojo intenso que da nombre a la especie. Su constitución es robusta y compacta, con una cabeza grande en proporción al cuerpo y un pico oscuro y potente. No presenta dimorfismo sexual apreciable a simple vista, por lo que el sexo sólo puede determinarse mediante pruebas específicas realizadas por profesionales.</p><p>Es una especie de vuelo potente que, en un entorno doméstico, necesita espacio suficiente para desplazarse, trepar y ejercitar la musculatura pectoral. La calidad del plumaje suele ser un buen indicador del estado general del ave.</p>",
      personalidad:
        "<p>El yaco se caracteriza por su prudencia. Analiza los cambios del entorno antes de acercarse y puede tardar semanas en confiar en una casa nueva. Esa misma sensibilidad hace que reaccione con estrés ante mudanzas, discusiones frecuentes, ruidos bruscos o cambios de horario constantes.</p><p>Su capacidad de imitación es notable, pero no debe ser el motivo de la adquisición: muchos ejemplares hablan poco o nada, y la convivencia se sostiene sobre la interacción diaria, no sobre el repertorio vocal.</p>",
      cuidados:
        "<p>Necesita una rutina estable de descanso —entre diez y doce horas de oscuridad y silencio—, baños o pulverizaciones regulares y revisión periódica del pico, las uñas y el plumaje. El aburrimiento es la causa más habitual de picaje en esta especie, por lo que el enriquecimiento no es opcional.</p><p>Conviene registrar el peso con una báscula de precisión de forma periódica: en aves que ocultan los signos de enfermedad, una pérdida sostenida de peso suele ser la primera señal detectable.</p>",
      alimentacion:
        "<p>Una base de pienso extrusionado formulado para psitácidas medianas, complementada con verdura fresca diaria, fruta en menor proporción y una cantidad controlada de frutos secos. Los yacos son propensos a carencias de calcio y vitamina A, de modo que la dieta debe ser variada y supervisada por un veterinario especializado en aves.</p><p>Evita aguacate, chocolate, cafeína, alcohol, sal y alimentos ultraprocesados. El agua debe renovarse a diario.</p>",
      alojamiento:
        "<p>Como referencia práctica, una jaula que permita extender las alas y girar sin rozar los barrotes, con separación adecuada al tamaño del pico y perchas de diámetros distintos en madera natural. Es preferible una jaula amplia con puertas grandes y accesorios seguros que una decorativa y estrecha.</p><p>Sitúa la jaula en una zona con vida familiar pero sin corrientes de aire, humo de cocina ni radiación solar directa continua.</p>",
      enriquecimiento:
        "<p>Rotación semanal de juguetes destructibles, forrajeo —esconder parte de la ración para que la busque—, ejercicios de resolución de problemas y sesiones cortas de entrenamiento con refuerzo positivo. Un yaco con la mente ocupada convive mucho mejor.</p>",
      socializacion:
        "<p>Requiere contacto diario y previsible. Es recomendable que interactúe con varios miembros del hogar para evitar vínculos exclusivos que deriven en conductas territoriales. La socialización temprana con transportines, toallas y manipulaciones básicas facilita las revisiones veterinarias futuras.</p>",
      salud:
        "<p>Revisión veterinaria inicial tras la llegada y controles periódicos posteriores con un profesional especializado en aves exóticas. Entre los problemas descritos en la especie destacan las deficiencias nutricionales, la aspergilosis, el picaje de origen conductual o médico y los procesos respiratorios asociados a ambientes con humo o aerosoles.</p>",
      adecuado:
        "<p>Es una especie adecuada para personas con experiencia previa en psitácidas, disponibilidad diaria real y un hogar estable. No encaja bien en casas con ausencias prolongadas, cambios constantes de domicilio o expectativas centradas en que el ave hable.</p>",
      documentacion:
        "<p>El yaco es una especie incluida en los apéndices CITES, por lo que la documentación acreditativa de la procedencia legal resulta especialmente relevante. Los requisitos concretos dependen del origen del ejemplar y de la normativa vigente; consulta nuestra <a href=\"/documentacion-cites/\">página sobre CITES y documentación</a> y verifica siempre la información con las autoridades competentes.</p>",
      transporte:
        "<p>El traslado se planifica según distancia, temperatura y estado del ave, con transportín adecuado y paradas previstas. Puedes revisar el procedimiento completo en <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Todos los yacos aprenden a hablar?", "No. La imitación varía mucho entre ejemplares y depende del entorno, la interacción y el carácter individual. Conviene elegir la especie por su forma de convivir, no por su capacidad vocal."],
      ["¿Es una buena primera ave?", "Normalmente no. Su sensibilidad y sus necesidades de estimulación hacen que sea más adecuada para personas con experiencia previa en psitácidas."],
      ["¿Cuánto tiempo de interacción necesita al día?", "Varias horas de contacto o actividad supervisada, repartidas a lo largo del día, además de tiempo fuera de la jaula en un espacio seguro."],
    ],
    related: ["loro-senegal", "amazona", "eclectus"],
  },
  {
    slug: "guacamayo-azul-amarillo",
    name: "Guacamayo azul y amarillo",
    sci: "Ara ararauna",
    family: "guacamayos",
    status: "consultar",
    price: null,
    image: "/assets/images/species/guacamayo-azul-amarillo-1.jpg",
    photos: [
      "/assets/images/species/guacamayo-azul-amarillo-1.jpg",
      "/assets/images/species/guacamayo-azul-amarillo-2.jpg",
      "/assets/images/species/guacamayo-azul-amarillo-3.jpg",
    ],
    alt: "Guacamayo azul y amarillo (Ara ararauna) con las alas parcialmente extendidas",
    intro:
      "Un guacamayo grande, sociable y muy expresivo. Su tamaño, su voz y su necesidad de espacio condicionan por completo el tipo de hogar en el que puede vivir bien.",
    facts: {
      origen: "Sudamérica tropical",
      tamano: "80–90 cm incluyendo la cola",
      vida: "50–60 años, en ocasiones más",
      caracter: "Extrovertido, juguetón, demandante de atención",
      ruido: "Alto: llamadas potentes que se oyen desde lejos",
      social: "Muy alta: forma vínculos intensos",
      nivel: "Avanzado",
    },
    sections: {
      caracteristicas:
        "<p>Destaca por el contraste entre el azul turquesa del dorso y el amarillo dorado del pecho, con la cara desnuda surcada de finas líneas de plumas oscuras. Es un ave de gran envergadura y musculatura potente, con un pico capaz de destruir madera dura sin dificultad.</p><p>Su tamaño implica necesidades de espacio, mobiliario resistente y una casa preparada para convivir con un animal fuerte y curioso.</p>",
      personalidad:
        "<p>Suele ser el más tolerante y sociable de los grandes guacamayos. Disfruta del juego, del contacto físico moderado y de participar en la actividad de la casa. En contrapartida, tolera mal el aislamiento: un guacamayo desatendido desarrolla gritos repetitivos y conductas destructivas.</p>",
      cuidados:
        "<p>Necesita ejercicio diario, tiempo fuera de la jaula en un espacio seguro, baños frecuentes y una rutina de descanso amplia. Es importante trabajar desde el principio los límites de mordida y la manipulación tranquila.</p>",
      alimentacion:
        "<p>Pienso específico para guacamayos como base, verdura fresca abundante, fruta en cantidad moderada y frutos secos con cáscara como parte del forrajeo. Es una especie con requerimientos energéticos y de grasa algo mayores que otras psitácidas, siempre dentro de una dieta equilibrada y supervisada.</p>",
      alojamiento:
        "<p>Requiere una jaula o voladero de gran tamaño, con barrotes de grosor adecuado y cierres a prueba de manipulación. Las perchas deben ser de madera dura y renovarse a menudo, porque las destruye con rapidez.</p>",
      enriquecimiento:
        "<p>Juguetes de destrucción de gran formato, cuerdas seguras, forrajeo complejo y entrenamiento con refuerzo positivo. Necesita gastar energía física y mental a diario.</p>",
      socializacion:
        "<p>Conviene que se relacione con varias personas y se acostumbre pronto a visitas, transportines y manipulaciones veterinarias. Los vínculos exclusivos con un solo miembro del hogar pueden generar celos y agresividad hacia el resto.</p>",
      salud:
        "<p>Controles veterinarios periódicos con profesional especializado. Entre los aspectos a vigilar: sobrepeso, problemas de plumaje asociados a estrés o dieta, lesiones por accidentes domésticos y afecciones respiratorias.</p>",
      adecuado:
        "<p>Sólo es adecuado en viviendas donde el ruido no genere conflictos, con espacio real y con personas dispuestas a un compromiso de varias décadas. No es una especie recomendable para pisos con vecindad muy próxima ni para hogares con poca disponibilidad de tiempo.</p>",
      documentacion:
        "<p>La documentación depende de la especie y del origen del ejemplar. Consulta la <a href=\"/documentacion-cites/\">información sobre CITES</a> y guarda siempre la documentación entregada.</p>",
      transporte:
        "<p>Su tamaño exige transportines rígidos y homologados de gran formato y una planificación cuidadosa de la ruta y la temperatura. Más detalles en <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Se puede tener un guacamayo en un piso?", "Depende del piso, del aislamiento acústico y del vecindario. Sus llamadas son muy potentes y no pueden eliminarse con entrenamiento."],
      ["¿Necesita compañía de otra ave?", "No necesariamente, pero sí una gran cantidad de interacción. La convivencia entre aves debe valorarse caso por caso."],
      ["¿Muerde mucho?", "Un guacamayo mal gestionado puede morder con fuerza. El trabajo temprano de límites y lectura del lenguaje corporal es esencial."],
    ],
    related: ["guacamayo-rojo", "cacatua-cresta-amarilla", "amazona"],
  },
  {
    slug: "guacamayo-rojo",
    name: "Guacamayo rojo",
    sci: "Ara macao",
    family: "guacamayos",
    status: "consultar",
    price: null,
    image: "/assets/images/species/guacamayo-rojo-1.jpg",
    photos: [
      "/assets/images/species/guacamayo-rojo-1.jpg",
      "/assets/images/species/guacamayo-rojo-2.jpg",
      "/assets/images/species/guacamayo-rojo-3.jpg",
    ],
    alt: "Guacamayo rojo (Ara macao) de plumaje escarlata posado en una rama",
    intro:
      "Uno de los loros más llamativos del continente americano. Es enérgico, inteligente y exigente: necesita estructura, entrenamiento y un entorno preparado para su intensidad.",
    facts: {
      origen: "América Central y del Sur",
      tamano: "80–90 cm incluyendo la cola",
      vida: "50 años o más",
      caracter: "Enérgico, seguro de sí mismo, muy activo",
      ruido: "Alto",
      social: "Muy alta",
      nivel: "Avanzado",
    },
    sections: {
      caracteristicas:
        "<p>Plumaje escarlata con franjas amarillas y azules en las alas y cara desnuda de color claro. Es un ave atlética, de vuelo largo y potente, que en cautividad necesita espacio para desplazarse y trepar.</p>",
      personalidad:
        "<p>Suele mostrarse más intenso y reactivo que el guacamayo azul y amarillo. Aprende con rapidez, pero también asimila con la misma velocidad los hábitos indeseados: gritar para obtener atención, morder para marcar distancia o defender su jaula.</p><p>Con un manejo coherente y sesiones de entrenamiento regulares, es un compañero extraordinariamente participativo.</p>",
      cuidados:
        "<p>Ejercicio diario, rutinas fijas y trabajo constante de comportamiento. Es fundamental que toda la casa maneje al ave con los mismos criterios para evitar mensajes contradictorios.</p>",
      alimentacion:
        "<p>Base de pienso para guacamayos, verduras variadas, fruta moderada y frutos secos como parte del enriquecimiento. La monodieta de semillas de girasol es una de las causas más frecuentes de problemas de salud a largo plazo.</p>",
      alojamiento:
        "<p>Voladero o jaula de gran formato, con estructura reforzada y elementos de escalada. Conviene ubicarlo en una zona sin corrientes ni exposición solar continua y con posibilidad de tapar parcialmente para el descanso.</p>",
      enriquecimiento:
        "<p>Destrucción segura de madera blanda, forrajeo, juegos de manipulación y entrenamiento diario de comportamientos sencillos. La falta de estímulo se traduce en gritos y picaje.</p>",
      socializacion:
        "<p>Necesita acostumbrarse desde el inicio a distintas personas y situaciones. La lectura del lenguaje corporal —posición de plumas, pupilas, postura— evita la mayoría de los incidentes de mordida.</p>",
      salud:
        "<p>Revisiones periódicas, control de peso y atención a los accidentes domésticos, frecuentes en aves grandes que exploran con el pico. Cocinas, cables y plantas tóxicas son los riesgos más habituales.</p>",
      adecuado:
        "<p>Adecuado para personas con experiencia previa en psitácidas grandes, disponibilidad de tiempo y un entorno tolerante al ruido. No es una especie para primeras experiencias.</p>",
      documentacion:
        "<p>Consulta la <a href=\"/documentacion-cites/\">página de CITES y documentación</a> para entender qué papeles pueden acompañar al ejemplar según su origen.</p>",
      transporte:
        "<p>Transportín rígido de gran tamaño, ruta planificada y control de temperatura. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Es más difícil que el guacamayo azul y amarillo?", "Suele describirse como más intenso y sensible al manejo incoherente, aunque cada ejemplar es distinto."],
      ["¿Cuánto espacio necesita fuera de la jaula?", "Idealmente varias horas diarias en una habitación segura, con perchas y sin peligros accesibles."],
    ],
    related: ["guacamayo-azul-amarillo", "amazona", "cacatua-cresta-amarilla"],
  },
  {
    slug: "cacatua-galah",
    name: "Cacatúa Galah",
    sci: "Eolophus roseicapilla",
    family: "cacatuas",
    status: "consultar",
    price: null,
    image: "/assets/images/species/cacatua-galah-1.jpg",
    photos: [
      "/assets/images/species/cacatua-galah-1.jpg",
      "/assets/images/species/cacatua-galah-2.jpg",
      "/assets/images/species/cacatua-galah-3.jpg",
    ],
    alt: "Cacatúa Galah de pecho rosado y dorso gris sobre una rama",
    intro:
      "También conocida como cacatúa de pecho rosa. Es activa, juguetona y algo más manejable que otras cacatúas, pero comparte con ellas una fuerte necesidad de compañía.",
    facts: {
      origen: "Australia",
      tamano: "35 cm aproximadamente",
      vida: "40 años o más",
      caracter: "Alegre, payaso, muy activo",
      ruido: "Medio-alto",
      social: "Alta",
      nivel: "Intermedio-avanzado",
    },
    sections: {
      caracteristicas:
        "<p>Plumaje rosado en pecho y cabeza, dorso gris y cresta clara y móvil que utiliza para comunicarse. Es una cacatúa de tamaño mediano, ágil y muy dada al juego acrobático.</p>",
      personalidad:
        "<p>Sociable y expresiva, con tendencia a buscar interacción de forma continua. Responde muy bien al entrenamiento y a los juegos, pero puede desarrollar dependencia si se refuerza el contacto físico constante desde el principio.</p>",
      cuidados:
        "<p>Necesita actividad diaria, control del peso —tiende a la obesidad con dietas grasas— y rutinas de descanso adecuadas. El polvo natural de su plumaje hace recomendable una buena ventilación y limpieza frecuente.</p>",
      alimentacion:
        "<p>Dieta baja en grasa: pienso adecuado, verdura abundante, algo de fruta y muy pocos frutos secos. Es una de las especies donde la dieta rica en semillas grasas causa más problemas metabólicos.</p>",
      alojamiento:
        "<p>Jaula amplia con zonas de escalada y juguetes robustos. Aprecia especialmente los elementos móviles: columpios, escaleras y cuerdas seguras.</p>",
      enriquecimiento:
        "<p>Juegos de destrucción, forrajeo y sesiones de trucos sencillos. Es una especie que disfruta aprendiendo y que se aburre con rapidez si el entorno no cambia.</p>",
      socializacion:
        "<p>Debe acostumbrarse a estar sola durante ratos y a entretenerse por sí misma, para evitar ansiedad por separación. Alternar interacción y autonomía desde el inicio es clave.</p>",
      salud:
        "<p>Vigilancia de peso, lipomas asociados a dietas grasas, picaje por aburrimiento y problemas respiratorios en ambientes cerrados con humo o aerosoles.</p>",
      adecuado:
        "<p>Puede encajar en hogares con experiencia intermedia dispuestos a dedicar tiempo diario, siempre que el nivel de ruido sea compatible con la vivienda.</p>",
      documentacion:
        "<p>La documentación depende del origen del ejemplar. Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a>.</p>",
      transporte:
        "<p>Traslado en transportín adecuado con control de temperatura y paradas planificadas. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Genera mucho polvo?", "Las cacatúas producen polvo de plumón. En personas con alergias respiratorias conviene valorarlo antes de decidir."],
      ["¿Puede quedarse sola muchas horas?", "No de forma habitual. Necesita compañía y estímulo diario; las ausencias largas y continuas no son compatibles con la especie."],
    ],
    related: ["cacatua-cresta-amarilla", "ninfa", "caique"],
  },
  {
    slug: "cacatua-cresta-amarilla",
    name: "Cacatúa de cresta amarilla",
    sci: "Cacatua galerita",
    family: "cacatuas",
    status: "consultar",
    price: null,
    image: "/assets/images/species/cacatua-cresta-amarilla-1.jpg",
    photos: [
      "/assets/images/species/cacatua-cresta-amarilla-1.jpg",
      "/assets/images/species/cacatua-cresta-amarilla-2.jpg",
      "/assets/images/species/cacatua-cresta-amarilla-3.jpg",
    ],
    alt: "Cacatúa de cresta amarilla con la cresta desplegada",
    intro:
      "Una cacatúa grande, inteligente y enormemente demandante. Es una de las especies con mayor tasa de abandono cuando se adquiere sin conocer sus necesidades reales.",
    facts: {
      origen: "Australia y Nueva Guinea",
      tamano: "45–50 cm",
      vida: "50 años o más",
      caracter: "Muy afectuosa, intensa, extremadamente social",
      ruido: "Muy alto",
      social: "Muy alta",
      nivel: "Avanzado",
    },
    sections: {
      caracteristicas:
        "<p>Plumaje blanco con cresta amarilla eréctil, pico robusto y gran capacidad de manipulación. Su fuerza y su curiosidad hacen que aprenda a abrir cierres y a desmontar accesorios con facilidad.</p>",
      personalidad:
        "<p>Busca contacto físico de forma casi permanente. Esa intensidad, que resulta encantadora al principio, es el origen de la mayoría de los problemas: ansiedad por separación, gritos prolongados y picaje cuando la demanda no se puede sostener.</p>",
      cuidados:
        "<p>Requiere rutinas muy estables, independencia entrenada desde el inicio y un entorno con estímulo constante. El manejo debe evitar reforzar el contacto corporal excesivo.</p>",
      alimentacion:
        "<p>Pienso de calidad, verdura variada, fruta moderada y muy pocos frutos secos. El control del peso es importante en la especie.</p>",
      alojamiento:
        "<p>Jaula muy resistente con cierres de seguridad, o voladero. Los accesorios deben renovarse con frecuencia porque los destruye rápidamente.</p>",
      enriquecimiento:
        "<p>Forrajeo intensivo, madera para destruir a diario, entrenamiento y juegos de solución de problemas. Sin esto, la especie desarrolla conductas repetitivas.</p>",
      socializacion:
        "<p>Es imprescindible enseñar autonomía: ratos en la jaula con actividad, tiempo sin contacto físico y refuerzo de la calma. Debe interactuar con varias personas del hogar.</p>",
      salud:
        "<p>Picaje y automutilación de origen conductual o médico, problemas respiratorios y sobrepeso. Requiere seguimiento veterinario especializado y evaluación temprana de cualquier cambio de conducta.</p>",
      adecuado:
        "<p>Sólo para hogares con experiencia sólida, tolerancia real al ruido y disponibilidad diaria durante décadas. En caso de duda, es preferible valorar otra especie.</p>",
      documentacion:
        "<p>Consulta la <a href=\"/documentacion-cites/\">página sobre CITES y documentación</a> antes de tomar una decisión.</p>",
      transporte:
        "<p>Transportín robusto con cierre seguro y planificación cuidadosa. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Por qué se dice que es difícil?", "Por la combinación de volumen sonoro, fuerza, longevidad y una necesidad de contacto muy superior a la de otras especies."],
      ["¿El picaje tiene solución?", "Requiere descartar primero causas médicas y después trabajar entorno, dieta y conducta. No existe una solución rápida."],
    ],
    related: ["cacatua-galah", "guacamayo-azul-amarillo", "amazona"],
  },
  {
    slug: "amazona",
    name: "Amazona",
    sci: "Amazona spp.",
    family: "amazonas",
    status: "consultar",
    price: null,
    image: "/assets/images/species/amazona-1.jpg",
    photos: [
      "/assets/images/species/amazona-1.jpg",
      "/assets/images/species/amazona-2.jpg",
      "/assets/images/species/amazona-3.jpg",
    ],
    alt: "Loro amazona de plumaje verde con detalles amarillos en la cabeza",
    intro:
      "Bajo el nombre de amazona se agrupan varias especies de loros americanos de tamaño medio, robustos, vocales y con mucho carácter.",
    facts: {
      origen: "América Central y del Sur",
      tamano: "33–40 cm según especie",
      vida: "40–60 años",
      caracter: "Seguro, teatral, sociable con manejo adecuado",
      ruido: "Medio-alto, con picos al amanecer y al atardecer",
      social: "Alta",
      nivel: "Intermedio-avanzado",
    },
    sections: {
      caracteristicas:
        "<p>Cuerpo compacto y predominantemente verde, con manchas amarillas, rojas o azules que varían según la especie. Las diferencias entre especies del género <em>Amazona</em> son relevantes en temperamento, tamaño y normativa, por lo que conviene identificar siempre la especie concreta.</p>",
      personalidad:
        "<p>Suelen ser aves expresivas y con personalidad marcada. Muchas disfrutan de la música y de la interacción vocal con la familia. En época hormonal pueden volverse territoriales, un comportamiento normal que se gestiona con manejo adecuado y no con castigo.</p>",
      cuidados:
        "<p>Rutina estable, control estricto del peso y buena higiene ambiental. Es un grupo con tendencia al sobrepeso cuando la dieta se basa en semillas.</p>",
      alimentacion:
        "<p>Pienso formulado, verdura fresca abundante y fruta en cantidad limitada. Las grasas deben estar muy controladas.</p>",
      alojamiento:
        "<p>Jaula amplia con perchas variadas y espacio para desplegar las alas. Aprecian los baños y la exposición a luz natural indirecta.</p>",
      enriquecimiento:
        "<p>Forrajeo, madera blanda, juegos sonoros y entrenamiento breve pero regular.</p>",
      socializacion:
        "<p>Conviene reforzar la interacción con distintas personas y respetar las señales corporales, especialmente durante los periodos hormonales.</p>",
      salud:
        "<p>Obesidad, lipomas, problemas hepáticos por dietas grasas y afecciones respiratorias son los aspectos más citados. Revisiones periódicas recomendables.</p>",
      adecuado:
        "<p>Buena opción para personas con algo de experiencia que buscan un ave sociable y expresiva, siempre que el ruido matinal y vespertino sea asumible.</p>",
      documentacion:
        "<p>Varias especies del género están reguladas. Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a> e identifica la especie exacta.</p>",
      transporte:
        "<p>Traslado planificado según distancia y clima. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Qué especie de amazona es mejor?", "Depende del hogar. Las diferencias de temperamento y volumen entre especies son notables; conviene analizarlo caso por caso antes de decidir."],
      ["¿Hablan mucho?", "Algunas amazonas imitan bien y son muy vocales, pero no debe darse por hecho en ningún ejemplar."],
    ],
    related: ["yaco-cola-roja", "eclectus", "conuro-del-sol"],
  },
  {
    slug: "eclectus",
    name: "Eclectus",
    sci: "Eclectus roratus",
    family: "eclectus",
    status: "consultar",
    price: null,
    image: "/assets/images/species/eclectus-1.jpg",
    photos: [
      "/assets/images/species/eclectus-1.jpg",
      "/assets/images/species/eclectus-2.jpg",
      "/assets/images/species/eclectus-3.jpg",
    ],
    alt: "Loro eclectus macho de plumaje verde intenso",
    intro:
      "El eclectus destaca por un dimorfismo sexual muy marcado y por unas necesidades dietéticas particulares. Suele ser más tranquilo que otras psitácidas de tamaño similar.",
    facts: {
      origen: "Islas de Oceanía y Nueva Guinea",
      tamano: "35–40 cm",
      vida: "30–50 años",
      caracter: "Tranquilo, observador, sensible al estrés",
      ruido: "Medio",
      social: "Media-alta",
      nivel: "Intermedio-avanzado",
    },
    sections: {
      caracteristicas:
        "<p>Los machos presentan plumaje verde brillante con pico anaranjado; las hembras, rojo intenso con tonos azulados y pico oscuro. La textura del plumaje es característica, casi capilar, y refleja con rapidez las carencias nutricionales.</p>",
      personalidad:
        "<p>Suele ser un ave calmada y algo menos exigente en contacto físico que otras psitácidas, aunque igualmente necesita interacción diaria. Reacciona mal al estrés continuado y a los cambios bruscos de rutina.</p>",
      cuidados:
        "<p>Necesita mucha fibra y humedad ambiental adecuada. Es una especie especialmente sensible a los excesos de vitaminas sintéticas cuando se combinan piensos muy suplementados con complementos adicionales.</p>",
      alimentacion:
        "<p>Alta proporción de verdura y fruta fresca, con menor dependencia del pienso que otras especies. La dieta debe diseñarse con asesoramiento veterinario para evitar tanto carencias como excesos.</p>",
      alojamiento:
        "<p>Jaula amplia, bien ventilada y con acceso a luz natural indirecta. Aprecia perchas de distintos diámetros y zonas de reposo tranquilas.</p>",
      enriquecimiento:
        "<p>Forrajeo con verdura escondida, madera blanda y juegos de manipulación. Prefiere una estimulación pausada frente a la actividad intensa.</p>",
      socializacion:
        "<p>Interacción diaria y calmada. Evita ambientes ruidosos o caóticos, que le generan estrés con facilidad.</p>",
      salud:
        "<p>Problemas relacionados con dietas desequilibradas, alteraciones del plumaje y sensibilidad digestiva. Revisión veterinaria especializada recomendable.</p>",
      adecuado:
        "<p>Buena elección para quien busca un ave menos ruidosa y más pausada, con disposición a cuidar la dieta con detalle.</p>",
      documentacion:
        "<p>Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a> para conocer los requisitos según origen.</p>",
      transporte:
        "<p>Especial atención a la temperatura y a la humedad durante el traslado. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Es cierto que macho y hembra parecen especies distintas?", "Sí. El dimorfismo es tan marcado que históricamente se describieron como especies diferentes."],
      ["¿Necesita una dieta especial?", "Requiere más verdura fresca y fibra que otras psitácidas, y conviene evitar la sobresuplementación."],
    ],
    related: ["amazona", "yaco-cola-roja", "caique"],
  },
  {
    slug: "caique",
    name: "Caique",
    sci: "Pionites spp.",
    family: "caiques",
    status: "consultar",
    price: null,
    image: "/assets/images/species/caique-1.jpg",
    photos: [
      "/assets/images/species/caique-1.jpg",
      "/assets/images/species/caique-2.jpg",
      "/assets/images/species/caique-3.jpg",
    ],
    alt: "Caique de cabeza negra y pecho blanco sobre una rama",
    intro:
      "Pequeño, atlético y extraordinariamente juguetón. El caique es un torbellino de energía en un cuerpo compacto.",
    facts: {
      origen: "Cuenca amazónica",
      tamano: "23 cm aproximadamente",
      vida: "25–35 años",
      caracter: "Muy activo, curioso, juguetón",
      ruido: "Medio: agudo y penetrante más que constante",
      social: "Alta",
      nivel: "Intermedio",
    },
    sections: {
      caracteristicas:
        "<p>Cuerpo compacto con pecho blanco y coloración viva en cabeza y flancos según la especie. Se desplaza saltando y trepando más que volando largas distancias.</p>",
      personalidad:
        "<p>Es una de las psitácidas más lúdicas. Se revuelca, salta y juega con casi cualquier objeto seguro. También puede ser algo brusco en el juego, por lo que conviene enseñar límites de mordida desde el principio.</p>",
      cuidados:
        "<p>Requiere mucho ejercicio y un entorno a prueba de accidentes: su curiosidad le lleva a explorar rincones peligrosos de la casa.</p>",
      alimentacion:
        "<p>Pienso de tamaño adecuado, verdura diaria, algo de fruta y frutos secos muy limitados.</p>",
      alojamiento:
        "<p>Jaula con mucho espacio horizontal, escaleras, columpios y juguetes rotativos.</p>",
      enriquecimiento:
        "<p>Es imprescindible: juguetes de manipulación, forrajeo y sesiones activas de juego con supervisión.</p>",
      socializacion:
        "<p>Puede ser territorial con otras aves. Las presentaciones deben ser graduales y supervisadas.</p>",
      salud:
        "<p>Accidentes domésticos, sobrepeso y problemas derivados del aburrimiento son los riesgos principales.</p>",
      adecuado:
        "<p>Adecuado para hogares activos que puedan supervisar su actividad y no busquen un ave tranquila de compañía pasiva.</p>",
      documentacion:
        "<p>Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a> según origen y especie.</p>",
      transporte:
        "<p>Transportín pequeño y seguro, con control de temperatura. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Es ruidoso?", "No grita de forma continua, pero sus llamadas son agudas y se oyen con claridad."],
      ["¿Es adecuado para niños?", "La convivencia con menores siempre debe ser supervisada; su juego brusco puede derivar en mordiscos."],
    ],
    related: ["conuro-del-sol", "cacatua-galah", "loro-senegal"],
  },
  {
    slug: "conuro-del-sol",
    name: "Conuro del sol",
    sci: "Aratinga solstitialis",
    family: "conuros",
    status: "consultar",
    price: null,
    image: "/assets/images/species/conuro-del-sol-1.jpg",
    photos: [
      "/assets/images/species/conuro-del-sol-1.jpg",
      "/assets/images/species/conuro-del-sol-2.jpg",
      "/assets/images/species/conuro-del-sol-3.jpg",
    ],
    alt: "Conuro del sol de plumaje amarillo y naranja",
    intro:
      "Colorido, cariñoso y muy sociable. Su principal condicionante es el volumen: es un ave pequeña con una voz desproporcionadamente potente.",
    facts: {
      origen: "Noreste de Sudamérica",
      tamano: "30 cm incluyendo la cola",
      vida: "20–30 años",
      caracter: "Afectuoso, activo, muy apegado",
      ruido: "Alto para su tamaño",
      social: "Alta",
      nivel: "Intermedio",
    },
    sections: {
      caracteristicas:
        "<p>Plumaje amarillo y anaranjado intenso en adultos, con tonos verdes en ejemplares jóvenes. Es ágil, ligero y muy expresivo con el cuerpo.</p>",
      personalidad:
        "<p>Busca contacto y compañía de forma constante. Suele adaptarse bien a la vida familiar, aunque puede vocalizar con fuerza cuando pierde de vista a sus personas de referencia.</p>",
      cuidados:
        "<p>Interacción diaria, juego y una rutina previsible de descanso. Es importante trabajar la tolerancia a los ratos de soledad.</p>",
      alimentacion:
        "<p>Pienso de tamaño adecuado, verdura diaria y fruta moderada. Las semillas deben ser un complemento, no la base.</p>",
      alojamiento:
        "<p>Jaula amplia para su tamaño, con juguetes y perchas de distintos grosores.</p>",
      enriquecimiento:
        "<p>Forrajeo, juguetes de destrucción pequeños y juegos de escondite. Disfruta explorando bajo mantas y tejidos seguros.</p>",
      socializacion:
        "<p>Se integra bien en la vida familiar si se le acostumbra a varias personas y a periodos de actividad autónoma.</p>",
      salud:
        "<p>Control de peso, atención a las corrientes de aire y revisiones periódicas. La especie es sensible a los cambios bruscos de temperatura.</p>",
      adecuado:
        "<p>Buena opción para hogares que puedan asumir un nivel sonoro alto en momentos puntuales y ofrecer compañía diaria.</p>",
      documentacion:
        "<p>Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a>.</p>",
      transporte:
        "<p>Traslados cortos y planificados, con temperatura controlada. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Es adecuado para un piso?", "Puede serlo, pero conviene valorar el aislamiento acústico: sus llamadas son muy potentes."],
      ["¿Necesita pareja?", "No es imprescindible si recibe compañía humana suficiente; la convivencia con otras aves debe valorarse individualmente."],
    ],
    related: ["caique", "ninfa", "agapornis"],
  },
  {
    slug: "loro-senegal",
    name: "Loro Senegal",
    sci: "Poicephalus senegalus",
    family: "loros-africanos",
    status: "consultar",
    price: null,
    image: "/assets/images/species/loro-senegal-1.jpg",
    photos: [
      "/assets/images/species/loro-senegal-1.jpg",
      "/assets/images/species/loro-senegal-2.jpg",
      "/assets/images/species/loro-senegal-3.jpg",
    ],
    alt: "Loro Senegal de cabeza gris y vientre amarillo",
    intro:
      "Un loro africano de tamaño medio-pequeño, tranquilo y de volumen contenido. Suele considerarse una de las psitácidas más manejables para hogares urbanos.",
    facts: {
      origen: "África occidental",
      tamano: "23–25 cm",
      vida: "25–35 años",
      caracter: "Independiente, observador, tranquilo",
      ruido: "Bajo-medio",
      social: "Media",
      nivel: "Intermedio",
    },
    sections: {
      caracteristicas:
        "<p>Cabeza gris, pecho verde y vientre amarillo o anaranjado según la subespecie. Es un ave compacta, de movimientos pausados y gran capacidad de observación.</p>",
      personalidad:
        "<p>Más independiente que otras psitácidas: disfruta de la compañía pero también pasa ratos entretenido por su cuenta. Tiende a vincularse con una persona concreta, algo que puede matizarse con socialización desde el inicio.</p>",
      cuidados:
        "<p>Rutina estable, baños regulares y estimulación diaria moderada. Es una especie que agradece la constancia más que la intensidad.</p>",
      alimentacion:
        "<p>Pienso de calidad, verdura fresca y fruta moderada, con grasas controladas.</p>",
      alojamiento:
        "<p>Jaula proporcionada a su tamaño con espacio para trepar y juguetes variados.</p>",
      enriquecimiento:
        "<p>Forrajeo y juguetes de manipulación; responde bien a los retos sencillos y repetibles.</p>",
      socializacion:
        "<p>Conviene que varias personas participen en su manejo desde el principio para evitar vínculos exclusivos.</p>",
      salud:
        "<p>Sobrepeso, carencias nutricionales y problemas respiratorios en ambientes con humo. Revisiones veterinarias periódicas.</p>",
      adecuado:
        "<p>Una de las opciones más razonables para quien busca una psitácida de compañía con volumen contenido y espacio limitado, siempre con compromiso a largo plazo.</p>",
      documentacion:
        "<p>Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a> según origen.</p>",
      transporte:
        "<p>Traslado sencillo con transportín adecuado y control térmico. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Es buena opción para vivir en piso?", "Su volumen moderado lo hace más compatible con la vida en piso que otras psitácidas, aunque sigue necesitando atención diaria."],
      ["¿Se lleva bien con otras aves?", "Puede ser territorial. Las convivencias deben valorarse y supervisarse individualmente."],
    ],
    related: ["yaco-cola-roja", "caique", "ninfa"],
  },
  {
    slug: "ninfa",
    name: "Ninfa (carolina)",
    sci: "Nymphicus hollandicus",
    family: "pequenas-psitacidas",
    status: "consultar",
    price: null,
    image: "/assets/images/species/ninfa-1.jpg",
    photos: [
      "/assets/images/species/ninfa-1.jpg",
      "/assets/images/species/ninfa-2.jpg",
      "/assets/images/species/ninfa-3.jpg",
    ],
    alt: "Ninfa gris con mejillas anaranjadas y cresta levantada",
    intro:
      "Una de las psitácidas más extendidas como ave de compañía: dócil, de tamaño manejable y con necesidades más asumibles que las de los grandes loros.",
    facts: {
      origen: "Australia",
      tamano: "30–33 cm incluyendo la cola",
      vida: "15–25 años",
      caracter: "Dócil, sociable, sensible",
      ruido: "Bajo-medio: silbidos más que gritos",
      social: "Media-alta",
      nivel: "Iniciación con asesoramiento",
    },
    sections: {
      caracteristicas:
        "<p>Cresta móvil, mejillas anaranjadas y una gran variedad de mutaciones de color. Es un ave ligera y de vuelo rápido que necesita espacio para ejercitarse.</p>",
      personalidad:
        "<p>Suele ser tranquila y afectuosa. Es sensible a los sustos nocturnos, un fenómeno frecuente en la especie que se reduce con una pequeña luz tenue y una ubicación protegida de la jaula.</p>",
      cuidados:
        "<p>Compañía diaria, ejercicio y control del polvo del plumón. Conviene mantener una rutina de descanso amplia.</p>",
      alimentacion:
        "<p>Mezcla adecuada o pienso específico, verdura fresca diaria y fruta ocasional. Las dietas exclusivamente de semillas provocan carencias frecuentes.</p>",
      alojamiento:
        "<p>Jaula amplia en horizontal, con perchas naturales y juguetes ligeros.</p>",
      enriquecimiento:
        "<p>Forrajeo sencillo, espejos evitables, juguetes de papel y sesiones de silbidos o entrenamiento suave.</p>",
      socializacion:
        "<p>Conviven bien en grupo si hay espacio suficiente, aunque la interacción con personas se reduce cuando hay varias aves.</p>",
      salud:
        "<p>Carencias nutricionales, problemas reproductivos en hembras con puesta crónica y afecciones respiratorias. Revisión veterinaria recomendable.</p>",
      adecuado:
        "<p>Buena primera psitácida para hogares informados, siempre entendiendo que sigue siendo un animal exigente en tiempo y cuidados.</p>",
      documentacion:
        "<p>Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a> para conocer qué aplica en cada caso.</p>",
      transporte:
        "<p>Transportín pequeño, ventilado y protegido de corrientes. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Es adecuada para principiantes?", "Es de las más asequibles en cuidados, pero requiere igualmente compromiso diario y atención veterinaria."],
      ["¿Por qué se asusta de noche?", "Los sustos nocturnos son habituales en la especie. Una luz tenue y una ubicación tranquila suelen reducirlos."],
    ],
    related: ["agapornis", "conuro-del-sol", "loro-senegal"],
  },
  {
    slug: "agapornis",
    name: "Agapornis",
    sci: "Agapornis spp.",
    family: "pequenas-psitacidas",
    status: "consultar",
    price: null,
    image: "/assets/images/species/agapornis-1.jpg",
    photos: [
      "/assets/images/species/agapornis-1.jpg",
      "/assets/images/species/agapornis-2.jpg",
      "/assets/images/species/agapornis-3.jpg",
    ],
    alt: "Pareja de agapornis de colores vivos sobre una percha",
    intro:
      "Pequeños, enérgicos y de carácter fuerte. Los agapornis concentran mucha personalidad en un tamaño reducido.",
    facts: {
      origen: "África",
      tamano: "13–17 cm",
      vida: "10–20 años",
      caracter: "Activo, decidido, territorial",
      ruido: "Medio: chillidos agudos frecuentes",
      social: "Media-alta",
      nivel: "Iniciación con asesoramiento",
    },
    sections: {
      caracteristicas:
        "<p>Cuerpo pequeño y compacto, cola corta y colores muy variados según especie y mutación. Son aves rápidas y muy activas.</p>",
      personalidad:
        "<p>Tienen un carácter decidido y pueden ser territoriales con otras aves. La creencia de que siempre deben vivir en pareja no es universal: depende de la especie, del ejemplar y del manejo.</p>",
      cuidados:
        "<p>Ejercicio diario, juguetes y supervisión estrecha fuera de la jaula por su tamaño y velocidad.</p>",
      alimentacion:
        "<p>Mezcla o pienso adecuado a su tamaño, verdura diaria y fruta ocasional.</p>",
      alojamiento:
        "<p>Jaula amplia con barrotes de separación reducida y accesorios resistentes; roen con intensidad.</p>",
      enriquecimiento:
        "<p>Papel, madera blanda, ramas seguras y forrajeo sencillo. Disfrutan transportando material.</p>",
      socializacion:
        "<p>Las presentaciones entre aves deben ser graduales y supervisadas. Con personas, requieren manejo diario y paciencia.</p>",
      salud:
        "<p>Puesta crónica en hembras, carencias nutricionales y lesiones por peleas territoriales.</p>",
      adecuado:
        "<p>Adecuados para hogares con espacio limitado que acepten un nivel sonoro agudo y puedan dedicar tiempo diario.</p>",
      documentacion:
        "<p>Consulta <a href=\"/documentacion-cites/\">CITES y documentación</a>.</p>",
      transporte:
        "<p>Transportín pequeño, seguro y protegido del frío. Ver <a href=\"/transporte-de-aves/\">transporte de aves</a>.</p>",
    },
    faq: [
      ["¿Deben vivir siempre en pareja?", "No siempre. Depende de la especie y del ejemplar; una convivencia mal planteada puede generar peleas."],
      ["¿Son ruidosos?", "Su sonido es agudo y frecuente, aunque de menor volumen que el de los grandes loros."],
    ],
    related: ["ninfa", "conuro-del-sol", "caique"],
  },
];

export const bySlug = (slug) => SPECIES.find((s) => s.slug === slug);
export const familyLabel = (slug) => (FAMILIES.find((f) => f.slug === slug) || {}).label || slug;
