<script setup>
// Perspective interaction adapted from Inspira UI CardContainer (MIT).
// See THIRD_PARTY_NOTICES.md. Touch and reduced-motion users get a still card.
defineProps({ category: { type: Object, required: true }, href: { type: String, required: true } });
const card = ref(null);
const reset = () => {
  card.value?.style.removeProperty("transform");
};
function tilt(event) {
  if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return reset();
  const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - left) / width - 0.5) * 5;
  const y = ((event.clientY - top) / height - 0.5) * -5;
  card.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
}
</script>

<template>
  <article class="collection-card" @pointermove="tilt" @pointerleave="reset" @pointercancel="reset">
    <a ref="card" class="collection-card-link" :href="href" target="_blank" rel="noopener noreferrer" :aria-label="`${category.title}: consultar piezas disponibles en Instagram`">
      <div class="collection-photo">
        <img
          :src="`/images/${category.image}-960.webp`"
          :srcset="`/images/${category.image}-480.webp 480w, /images/${category.image}-960.webp 960w`"
          sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 30vw, 380px"
          :alt="category.alt"
          width="960"
          height="1200"
          loading="lazy"
          decoding="async"
        />
        <span class="collection-number">{{ category.number }} / O FAIADO</span>
        <span class="collection-arrow"><DecorativeIcon name="diagonal" /></span>
      </div>
      <div class="collection-copy">
        <h3>{{ category.title }}</h3>
        <p>{{ category.text }}</p>
        <span class="collection-cta">Descubre nuestras piezas <DecorativeIcon name="right" /></span>
      </div>
    </a>
  </article>
</template>
