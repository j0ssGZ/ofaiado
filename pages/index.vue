<script setup>
const logo = "/images/logo.png";
const heroImage = "/images/antique-still-life.jpg";
const instagram = "https://www.instagram.com/ofaiado_pontevedra/";
const maps = "https://share.google/WV4r8qxlds75khdTk";
const categories = [
  {
    number: "01",
    title: "Antigüedades",
    text: "Muebles con oficio, objetos de otras épocas y pequeños tesoros que siguen teniendo mucho que contar.",
    image: "objetos-con-historia",
    alt: "Objetos de metal, marcos y curiosidades en un espacio de antigüedades",
  },
  {
    number: "02",
    title: "Segunda mano",
    text: "Piezas que merecen seguir en uso. Una forma más personal y consciente de vestir tu casa.",
    image: "maquina-escribir",
    alt: "Máquina de escribir vintage sobre un escritorio de madera con libros",
  },
  {
    number: "03",
    title: "Objetos singulares",
    text: "Decoración, curiosidades y ese hallazgo inesperado que no sabías que estabas buscando.",
    image: "ceramica",
    alt: "Composición de ambiente con cerámica blanca y detalles decorativos",
  },
];
useHead({
  htmlAttrs: { lang: "es" },
  title: "Antigüedades y vaciados en Pontevedra | O Faiado",
  meta: [
    {
      name: "description",
      content:
        "En O Faiado encontrarás antigüedades, muebles y objetos de segunda mano en Pontevedra. También realizamos vaciados de viviendas o locales. ¡Visítanos!",
    },
    {
      property: "og:title",
      content: "Antigüedades y vaciados en Pontevedra | O Faiado",
    },
    {
      property: "og:description",
      content:
        "En O Faiado encontrarás antigüedades, muebles y objetos de segunda mano en Pontevedra. También realizamos vaciados de viviendas o locales. ¡Visítanos!",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_ES" },
    { property: "og:url", content: "https://ofaiado.es/" },
  ],
  link: [
    { rel: "canonical", href: "https://ofaiado.es/" },
    { rel: "icon", type: "image/png", href: logo },
    { rel: "apple-touch-icon", href: logo },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Store"],
        name: "O Faiado",
        url: "https://ofaiado.es/",
        sameAs: [instagram],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rúa Médico Germán Adrio Sobrido, 4",
          postalCode: "36003",
          addressLocality: "Pontevedra",
          addressRegion: "Galicia",
          addressCountry: "ES",
        },
      }),
    },
  ],
});
</script>

<template>
  <div>
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <div class="top-strip">
      COSAS DE ANTES. UNA MIRADA NUEVA. <span>PONTEVEDRA, GALICIA</span>
    </div>
    <header class="site-header wrap">
      <a href="#" class="brand" aria-label="O Faiado, inicio"
        ><img
          :src="logo"
          alt="O Faiado · Antigüedades"
          width="116"
          height="116"
      /></a>
      <nav aria-label="Navegación principal">
        <a href="#descubre">La tienda</a><a href="#vaciados">Vaciados</a
        ><a href="#visitanos">Visítanos</a>
      </nav>
      <a
        :href="instagram"
        target="_blank"
        rel="noopener noreferrer"
        class="header-social"
        aria-label="Instagram de O Faiado"
        ><svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          /></svg
        ><span>Instagram</span><span><DecorativeIcon name="diagonal" /></span></a
      >
    </header>

    <main id="contenido">
      <section class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="tiny-star"><DecorativeIcon name="star" /></span> ANTIGÜEDADES · SEGUNDA MANO
          </p>
          <a class="hero-service-tag" href="#vaciados">
            <DecorativeIcon name="star" />
            Vaciados de viviendas y locales
            <DecorativeIcon name="diagonal" />
          </a>
          <h1>
            Piezas con<br />pasado.<br /><em>Historias<br />por vivir.</em>
          </h1>
          <p class="hero-description">
            En O Faiado encontrarás antigüedades, muebles y objetos de segunda mano
            en Pontevedra. También realizamos vaciados de viviendas o locales.
            ¡Visítanos!
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#vaciados"
              >Vaciados de viviendas y locales <span><DecorativeIcon name="diagonal" /></span></a
            ><a
              class="text-link"
              href="#descubre"
              >Ver la tienda <span><DecorativeIcon name="right" /></span></a
            >
          </div>
          <a class="hero-location" :href="maps" target="_blank" rel="noopener noreferrer" aria-label="Cómo llegar a O Faiado en Pontevedra">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" /></svg
            ><span>Rúa Médico Germán Adrio Sobrido, 4 · Pontevedra</span>
          </a>
        </div>
        <div class="hero-visual">
          <div class="photo-frame">
            <img
              :src="heroImage"
              alt="Composición de ambiente con una cómoda antigua, libros, un reloj y cerámica"
              width="1122"
              height="1402"
              fetchpriority="high"
            />
          </div>
          <div class="round-seal">
            <span>EL VALOR DE</span><b>otra<br /><em>vida</em></b
            ><span>LO AUTÉNTICO</span>
          </div>
          <div class="photo-caption">
            <span>LA BELLEZA ESTÁ EN LA HISTORIA</span
            ><span>Imagen de ambiente</span>
          </div>
        </div>
      </section>

      <div class="values-band">
        <div class="wrap">
          <span>Objetos con carácter</span><i><DecorativeIcon name="star" /></i
          ><span>Segundas oportunidades</span><i><DecorativeIcon name="star" /></i
          ><span>Comercio de aquí</span><i><DecorativeIcon name="star" /></i><span>Mucho por descubrir</span>
        </div>
      </div>

      <section id="descubre" class="discover wrap section-space">
        <RevealOnScroll class="section-heading">
          <p class="eyebrow">01 / EL UNIVERSO O FAIADO</p>
          <div class="heading-row">
            <h2>Para quienes miran<br /><em>un poco más allá.</em></h2>
            <p>
              No todo lo especial tiene que ser nuevo. Nos gustan las maderas
              con huella, los detalles inesperados y las piezas que hacen que
              una casa se sienta tuya.
            </p>
          </div>
        </RevealOnScroll>
        <div class="collection-grid">
          <RevealOnScroll
            v-for="(category, index) in categories"
            :key="category.number"
            :delay="index * 90"
          >
            <CollectionCard :category="category" :href="instagram" />
          </RevealOnScroll>
        </div>
        <p class="collection-caption">
          <span>UNA MIRADA A LO QUE NOS INSPIRA</span>
          <span>Imágenes de ambiente · Consulta las piezas disponibles en tienda.</span>
        </p>
        <p class="small-note">
          Cada visita puede traer una sorpresa. Consulta por Instagram qué hay
          disponible o pásate por la tienda.
        </p>
      </section>

      <section id="vaciados" class="clearance">
        <div class="wrap clearance-inner">
          <RevealOnScroll class="clearance-intro">
            <p class="eyebrow">02 / HACEMOS ESPACIO</p>
            <h2>
              Un nuevo comienzo<br />para tu espacio.<br /><em
                >Y para tus objetos.</em
              >
            </h2>
            <p>
              ¿Necesitas vaciar una vivienda o un local en Pontevedra? Cuéntanos
              qué necesitas. Te ayudamos a valorar los objetos y a organizar el
              vaciado, buscando una segunda vida para las piezas que todavía
              tienen camino por delante.
            </p>
            <a
              class="button primary"
              :href="instagram"
              target="_blank"
              rel="noopener noreferrer"
              >Hablemos de tu vaciado <span><DecorativeIcon name="diagonal" /></span></a
            >
          </RevealOnScroll>
          <div class="steps">
            <article>
              <span>01</span>
              <div>
                <h3>Cuéntanos tu caso</h3>
                <p>
                  Escríbenos por Instagram o acércate a la tienda. Unas fotos
                  del espacio y de los objetos nos ayudan a empezar.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Vemos las posibilidades</h3>
                <p>
                  Comentamos contigo qué piezas hay y qué necesitas retirar para
                  acordar cómo proceder.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Damos el siguiente paso</h3>
                <p>
                  Organizamos los detalles del vaciado contigo y buscamos nuevas
                  oportunidades para los objetos aprovechables.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="instagram" class="instagram-section wrap section-space">
        <div class="instagram-panel">
          <div class="instagram-copy">
            <p class="eyebrow">03 / SIGUE LA PISTA</p>
            <h2>Los mejores hallazgos<br /><em>no avisan.</em></h2>
            <p>
              Un mueble con personalidad. Un detalle para ese rincón. Una pieza
              que te recuerda a casa. Sigue nuestro perfil y descubre lo que
              vamos compartiendo.
            </p>
            <a
              class="button light"
              :href="instagram"
              target="_blank"
              rel="noopener noreferrer"
              ><svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                /></svg
              >Síguenos en Instagram <span><DecorativeIcon name="diagonal" /></span></a
            ><span class="instagram-handle">@ofaiado_pontevedra</span>
          </div>
          <a
            class="instagram-art"
            :href="instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver el Instagram de O Faiado"
            ><div class="social-sheet">
              <span>EL PRÓXIMO HALLAZGO</span
              ><svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                aria-hidden="true"
              >
                <rect x="16" y="16" width="68" height="68" rx="20" />
                <circle cx="50" cy="50" r="17" />
                <circle
                  cx="72"
                  cy="29"
                  r="4"
                  fill="currentColor"
                  stroke="none"
                /></svg
              ><strong>Puede estar<br /><em>esperándote.</em></strong
              ><span>O FAIADO · PONTEVEDRA <DecorativeIcon name="diagonal" /></span>
            </div>
            <span class="art-star"><DecorativeIcon name="star" /></span></a
          >
        </div>
      </section>

      <section id="visitanos" class="visit wrap">
        <div class="visit-heading">
          <p class="eyebrow">04 / NOS VEMOS EN LA TIENDA</p>
          <h2>Ven sin prisa.<br /><em>Sal con una historia.</em></h2>
        </div>
        <div class="visit-info">
          <span class="location-label">O FAIADO · ANTIGÜEDADES</span>
          <address>
            Rúa Médico Germán<br />Adrio Sobrido, 4<span
              >36003 · Pontevedra, Galicia</span
            >
          </address>
          <a
            class="button primary"
            :href="maps"
            target="_blank"
            rel="noopener noreferrer"
            >Cómo llegar <span><DecorativeIcon name="diagonal" /></span></a
          >
          <p>
            ¿Vienes a por algo concreto? Escríbenos antes por Instagram y lo
            comentamos.
          </p>
        </div>
      </section>
      <section class="faq wrap">
        <p class="eyebrow">ANTES DE VENIR</p>
        <details>
          <summary>
            ¿Cómo puedo consultar si una pieza está disponible?<span>+</span>
          </summary>
          <p>
            Escríbenos a
            <a :href="instagram" target="_blank" rel="noopener noreferrer"
              >@ofaiado_pontevedra</a
            >
            con una foto o una descripción de lo que buscas. Te contamos si lo
            tenemos y resolvemos tus dudas.
          </p>
        </details>
        <details>
          <summary>
            ¿Puedo consultar por objetos que quiero vender?<span>+</span>
          </summary>
          <p>
            Sí. Envíanos algunas fotos por Instagram o ven a hablar con nosotros
            a la tienda. Podemos ver las piezas contigo y comentar las
            posibilidades.
          </p>
        </details>
        <details>
          <summary>
            ¿Hacéis vaciados de viviendas y locales?<span>+</span>
          </summary>
          <p>
            Sí, puedes consultarnos por vaciados en Pontevedra. Cuéntanos dónde
            está el espacio, qué necesitas retirar y, si puedes, envíanos unas
            fotos para valorar el caso.
          </p>
        </details>
      </section>
    </main>
    <footer class="site-footer">
      <div class="wrap footer-main">
        <a href="#" aria-label="Volver al inicio"
          ><img :src="logo" alt="O Faiado" width="110" height="110"
        /></a>
        <p>Lo de siempre.<br /><em>Como nunca.</em></p>
        <a :href="instagram" target="_blank" rel="noopener noreferrer"
          >Instagram <span><DecorativeIcon name="diagonal" /></span></a
        >
      </div>
      <div class="wrap footer-bottom">
        <span>© {{ new Date().getFullYear() }} O Faiado</span
        ><span>Antigüedades y segunda mano en Pontevedra</span
        ><a href="#">Volver arriba <DecorativeIcon name="up" /></a>
      </div>
    </footer>
  </div>
</template>
