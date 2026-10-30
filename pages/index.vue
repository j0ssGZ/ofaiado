---
// SEO Structured Data (required for search engine indexing)
const structuredData = {
  "@type": "LocalBusiness",
  "@id": "https://ofaiado.es/",
  "name": "O Faiado",
  "description": "Tienda especializada en antigüedades y artículos de segunda mano en Pontevedra, Galicia. También ofrecemos vaciados de viviendas y locales.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rúa Médico Germán Adrio Sobrido, 4",
    "postalCode": "36003",
    "addressLocality": "Pontevedra",
    "addressRegion": "Galicia",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoPrecision",
    "latitude": 42.2162,
    "longitude": -8.7581
  },
  "url": "https://ofaiado.es/",
  "sameAs": [
    "https://www.instagram.com/ofaiado_pontevedra/"
  ]
}

// SEO Meta Tags
const title = "Antigüedades y segunda mano en Pontevedra - O Faiado | Tienda de antigüedades, vaciados y locales"
const metaDescription = `Descubre nuestras antigüedades en Pontevedra. Tienda de segunda mano con artículos únicos, vaciados de viviendas y locales. Visita Rúa Médico Germán Adrio Sobrido, 4. Expertos en patrimonio histórico gallego.`

definePageMeta({
  title: title,
  meta: [
    { name: 'description', content: metaDescription },
    { name: 'lang', content: 'es' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { canonical: 'https://ofaiado.es/' }
  ]
})
---

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <header class="py-24 px-6 md:px-12 lg:px-20 max-w-none">
      <section class="max-w-full mx-auto">
        <!-- Logo with alt text for accessibility -->
        <div class="flex flex-wrap justify-center items-center gap-4 mb-12 animate-fade-up">
          <img 
            v-if="logo" 
            src="/logo.png" 
            :alt="`Logo de O Faiado - Antigüedades y segunda mano en Pontevedra. Logo de la tienda de antigüedades y vaciados.`"
            class="w-[200px] h-[200px] object-contain animate-fade-up-3"
          >
          <div class="text-center">
            <span v-if="!logo || loading" class="font-body font-serif text-xl md:text-2xl lg:text-3xl inline-block animate-fade-up-3" />
            <span :class="loading ? 'opacity-50' : 'opacity-100'" :style="{'font-family':'Playfair Display','font-weight':'400'}">O Faiado</span>
          </div>
        </div>

        <!-- Large H1 heading -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold text-espresso mb-8 px-4 animate-fade-up-2">
          Antigüedades y segunda mano
          <br />
          en Pontevedra
        </h1>

        <!-- Subheading with elegant styling -->
        <div class="text-center max-w-3xl mx-auto px-4 animate-fade-up-3">
          <p :class="{ 'font-body font-sans': true, 'text-espresso font-medium text-lg leading-loose': true }">
            Patrimonios y artículos de segunda mano en el corazón de Pontevedra. Descubre piezas únicas que cuentan historias.
          </p>
        </div>

        <!-- H2 with elegant styling -->
        <h2 class="sr-only">
          Tienda especializada en antigüedades, artículos de segunda mano y vaciados de viviendas en Pontevedra, Galicia
        </h2>
      </section>
    </header>

    <!-- Main Content -->
    <main class="flex-1 py-16 md:py-20 lg:py-32 px-4 md:px-8 lg:px-12 max-w-none overflow-hidden">
      <div class="max-w-7xl mx-auto space-y-24 animate-stagger-1">
        <!-- Introduction Section -->
        <section class="group cursor-default">
          <div class="flex flex-col md:flex-row gap-12 items-start">
            <!-- Left column -->
            <article class="max-w-prose text-base leading-relaxed mb-6 md:mb-0">
              <h3 class="text-3xl md:text-4xl font-bold text-espresso mb-8 px-4 animate-fade-up-2 inline-block">
                Nuestro Patrimonio Histórico Gallego
              </h3>

              <p class="leading-loose mb-6 animate-fade-up-3">
                Hemos dedicado nuestras vidas durante décadas a coleccionar, preservar y poner en valor el tesoro histórico 
                de Galicia. En O Faiado, buscamos piezas únicas que cuenten historias, transformando antigüedas en obras de arte 
                accesibles para todos los amantes de lo antiguo.
              </p>

              <p class="leading-loose animate-fade-up-4">
                Cada objeto que encontramos en un desahogo familiar o local vaciado añade valor cultural al patrimonio 
                municipal de Pontevedra. Desde mobiliario antiguo de madera taladrada hasta utensilios decorativos únicos 
                de todas las épocas, buscamos ese equilibrio entre historia y utilidad práctica. La antigüedad no debería 
                ser un lujo inaccesible para la comunidad local que nos acoge con su calidez gallega.
              </p>
            </article>

            <!-- Right column - decorative element -->
            <div class="hidden lg:block max-w-sm animate-fade-up-3">
              <i class="font-serif text-espresso opacity-60 text-9xl" style="font-size: 12rem;" />
              <i class="font-serif text-taupe opacity-40 mt-2 text-8xl" style="font-size: 10rem;" />
            </div>
          </div>

          <!-- Divider -->
          <hr class="w-full h-[3px] my-16 mx-auto border-0 bg-espresso opacity-40 animate-fade-up-3" />
        </section>

        <!-- Specialties Section -->
        <section class="group">
          <div class="flex flex-col md:flex-row gap-12 items-start">
            <!-- Left column -->
            <div class="max-w-prose mb-6 md:mb-0">
              <div class="animate-fade-up-2">
                <h3 :class="{ 'font-body': true, 'text-espresso': true, 'font-medium text-2xl lg:text-3xl font-bold mb-8 px-4 inline-block' }">
                  ¿Qué Ofrecemos?
                </h3>
              </div>

              <ul class="space-y-10 animate-fade-up-3">
                <li>
                  <span :class="{ 'font-body': true, 'color-sepia text-sm font-medium mb-2 block inline' }">Antigüedades</span>
                  <p :class="{ 'font-body': true, 'text-espresso leading-relaxed text-base mb-3 font-normal italic' }">
                    Muebles de madera, decoración clásica y piezas históricas para coleccionistas. Cada obra tiene su historia propia que espera ser descubierta.
                  </p>
                </li>

                <li>
                  <span :class="{ 'font-body': true, 'color-sepia text-sm font-medium mb-2 block inline' }">Artículos de Segunda Mano</span>
                  <p :class="{ 'font-body': true, 'text-espresso leading-relaxed text-base mb-3 font-normal italic' }">
                    Objetos únicos que pueden transformar la identidad visual de cualquier hogar o negocio local. Piezas con carácter, no genéricas.
                  </p>
                </li>

                <li>
                  <span :class="{ 'font-body': true, 'color-sepia text-sm font-medium mb-2 block inline' }">Vaciados de Viviendas</span>
                  <p :class="{ 'font-body': true, 'text-espresso leading-relaxed text-base mb-3 font-normal italic' }">
                    Piezas seleccionadas desde entornos vacíos, asegurando siempre calidad y originalidad. Los objetos que cuentan historias personales.
                  </p>
                </li>

                <li>
                  <span :class="{ 'font-body': true, 'color-sepia text-sm font-medium mb-2 block inline' }">Vaciados Locales</span>
                  <p :class="{ 'font-body': true, 'text-espresso leading-relaxed text-base mb-3 font-normal italic' }">
                    Espacios comerciales para transformar locales en puntos de encuentro cultural o tiendas con carácter histórico.
                  </p>
                </li>
              </ul>

              <p class="leading-loose mt-6 animate-fade-up-4">
                Tenemos una larga experiencia en el mercado de la antigüedad y segunda mano, con un ojo clínico para identificar 
                piezas valiosas que pocos reconocen. Nuestro criterio se basa tanto en el valor estético como en el potencial 
                histórico de cada artículo.
              </p>
            </div>

            <!-- Right column -->
            <div class="hidden lg:block max-w-sm animate-fade-up-3">
              <i class="font-serif text-espresso opacity-50 text-9xl" style="font-size: 14rem;" />
              <i class="font-serif text-tone opacity-30 mt-10 text-8xl" style="font-size: 11rem;" />
            </div>
          </div>

          <!-- Divider -->
          <hr class="w-full h-[3px] my-24 mx-auto border-0 bg-espresso opacity-40 animate-fade-up-3" />
        </section>

        <!-- Location Section -->
        <section class="group bg-taupe/5 p-1">
          <div class="bg-warm-ivory rounded-lg shadow-sm max-w-none animate-fade-up-2">
            <!-- Address display with elegant styling -->
            <div class="px-4 py-16 md:py-20">
              <div class="border-b border-[#8B5A3B]/10 pb-6 mx-4 mb-6 flex justify-between items-center">
                <!-- H3 as heading -->
                <h3 :class="{ 'font-body': true, 'text-espresso': true, 'font-medium text-start text-2xl lg:text-3xl font-bold inline-block' }">
                  Visita nuestra tienda
                </h3>

                <!-- Social icon right side -->
                <div class="flex items-center gap-4 ml-6 animate-fade-up-3">
                  <span :class="{ 'font-body': true, 'color-sepia': true, 'text-sm font-medium text-lg italic' }">
                    Síguenos en redes sociales. Instagram y Twitter disponibles para seguir nuestras novedades y publicaciones.
                  </span>
                </div>
              </div>

              <!-- Full address -->
              <p class="mb-6 text-espresso font-medium text-xl lg:text-2xl leading-relaxed px-4 md:px-8 animate-fade-up-4">
                <strong>Rúa Médico Germán Adrio Sobrido, 4</strong>
              </p>

              <p class="leading-loose mb-6 px-4 md:px-8 text-espresso font-normal text-lg italic animate-fade-up-5" v-if="true">
                Pontevedra, 36003, Galicia, España
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-col gap-4 max-w-xs mx-auto px-4 md:px-8 animate-fade-up-6">
                <NuxtLink 
                  v-if="true" 
                  :href="`https://share.google/WV4r8qxlds75khdTk`" 
                  target="_blank" 
                  class="bg-espresso text-white rounded-full py-4 px-8 font-medium text-lg text-center leading-loose block hover:scale-105 transition-transform duration-300 ease-cubic-bezier(0.24, 0, 0.33, 1) animate-fade-up-7"
                  style="min-height: 64px; width: fit-content;"
                >
                  ¿Quieres saber cómo llegar?
                </NuxtLink>

                <a 
                  v-if="true"
                  :href="`https://www.instagram.com/ofaiado_pontevedra/`" 
                  target="_blank"
                  rel="noopener nofollow"
                  class="bg-[#8B5A3B] text-white rounded-full py-4 px-8 font-medium text-lg text-center leading-loose block hover:scale-105 transition-transform duration-300 ease-cubic-bezier(0.24, 0, 0.33, 1) animate-fade-up-7"
                  style="min-height: 64px; width: fit-content;"
                >
                  Síguenos en Instagram
                </a>
              </div>

              <!-- Location note -->
              <p class="leading-loose mt-6 px-4 md:px-8 text-espresso font-normal text-sm italic animate-fade-up-5">
                ¡No te lo pierdas! Ven visitarnos para conocer nuestro patrimonio con toda la tranquilidad que merece.
              </p>

              <!-- Instagram description -->
              <div class="mt-6 max-w-xl mx-auto px-4 md:px-8 animate-fade-up-2">
                <h3 :class="{ 'font-body': true, 'text-espresso': true, 'font-medium text-lg lg:text-xl font-bold mb-4 inline-block' }">
                  Síguenos en Redes Sociales
                </h3>
                <p class="text-espresso text-base leading-normal italic" v-if="true">
                  Síguenos para ver novedades y conocer nuestro patrimonio único en el corazón de Pontevedra.
                </p>
              </div>
            </div>

            <!-- Decorative right side -->
            <div class="hidden lg:block px-8 py-16 animate-fade-up-3">
              <i class="font-serif text-espresso opacity-40 text-9xl" style="font-size: 14rem;" />
              <i class="font-serif text-[#8B5A3B] opacity-30 mt-12 text-8xl" style="font-size: 12rem;" />
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="group">
          <div class="bg-warm-ivory rounded-lg p-6 md:p-8 animate-fade-up-7">
            <div class="flex flex-col items-start gap-4 max-w-md mx-auto">
              <h3 :class="{ 'font-body': true, 'text-espresso': true, 'font-medium text-xl lg:text-2xl font-bold mb-6 inline-block' }">
                Contacto
              </h3>

              <p class="mb-4 leading-loose text-espresso font-normal italic animate-fade-up-4" v-if="true">
                ¿Tienes alguna pieza que quieras vender? ¡Pases de la puerta de la tienda o acércate a nuestra local!
              </p>

              <p :class="{ 'font-body': true, 'text-espresso font-normal italic mb-2': true }">
                Pasen por la tienda para ver nuestras existencias. Ven visitarnos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-espresso text-white py-12 px-4 md:px-8 overflow-hidden">
      <div class="flex flex-col items-center text-center animate-fade-up-3" :style="{ display: 'contents' }">
        <!-- Logo alt text in footer -->
        <span v-if="!logo || loading" class="font-body font-serif text-lg text-white/90 mb-4 inline-block" />
        
        <!-- Business name -->
        <h1 :class="{ 
          'font-body': true, 
          'text-white': true, 
          'font-medium text-xl lg:text-3xl font-bold mb-4 inline-block' 
        }">O Faiado</h1>

        <!-- Location -->
        <p class="mb-6 leading-normal italic">Pontevedra, Galicia</p>

        <!-- Design note for accessibility -->
        <span v-if="!logo || loading" :class="{ 
          'font-body': true, 
          'text-white text-sm opacity-60 mb-4 inline-block italic' 
        }">Logo placeholder</span>
      </div>

      <hr class="w-full h-[1px] mt-8 border-0 bg-white/30" />

      <!-- Footer bottom note -->
      <p class="mt-2 text-white/40 text-sm opacity-70 italic leading-normal">
        Patrimonio histórico y cultural de Pontevedra - Galicia, España
      </p>
    </footer>
  </div>
</template>

<script setup>
// Loading state placeholder
const loading = true;

// Logo image reference
const { 
  logo: src,
  alt: "Logo de O Faiado - Antigüedades y segunda mano en Pontevedra. Logo de la tienda de antigüedades y vaciados."
} = definePageMeta({
  asset: '/logo.png',
  meta: {
    title: title,
    description: `Descubre nuestras antigüedades en Pontevedra. Tienda de segunda mano con artículos únicos, vaciados de viviendas y locales.`,
    lang: 'es'
  }
});

// Wait for image to load or resolve
const loaded = ref(false);

async function setup() {
  // Resolve logo if it exists
  try {
    const url = await $fetch(`/api/v0.1/assets?asset=${src}`);
    src.value = url?.icon || '/logo.png';
  } catch (error) {
    src.value = '/logo.png';
  } else {
    loaded.value = true;
    src.value = '/logo.png';
  }

  // Initialize SEO metadata properly for browser rendering
}
</script>

<style scoped>
/* Font imports and variable definitions */
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda+Display&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

body {
  background-color: var(--color-warm-ivory);
  color: var(--color-body-text);
}

h1, h2, h3 {
  font-family: 'Bodoni Moda Display', sans-serif !important;
}

/* Focus styles for accessibility */
*:focus:focus-visible {
  outline: 3px solid var(--color-espresso);
  outline-offset: 4px !important;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.1s !important;
    scroll-behavior: auto !important;
  }
}
</style>
