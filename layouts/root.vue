<template>
  <div class="min-h-screen flex flex-col">
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
/* Theme colors as CSS variables */
:root {
  --color-sepia: #8B5A3B;
  --color-espresso: #4E342A;
  --color-antique-gold: #D4AF37;
  --color-warm-ivory: #F5EBD8;
  --color-taupe: #D2B48C;
  --color-body-text: #2c3e50;
}

body {
  background-color: var(--color-warm-ivory);
  color: var(--color-body-text);
  font-family: 'Playfair Display', 'Bodoni Moda Display', serif;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: 'Bodoni Moda Display', 'Playfair Display', serif;
}
</style>
