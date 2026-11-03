<script setup>
// Inspired by Inspira UI's Blur Reveal; keep all content in the static HTML.
const props = defineProps({ delay: { type: Number, default: 0 } });
const element = ref(null);
let observer;
let animation;
let preference;
const stopMotion = () => {
  observer?.disconnect();
  animation?.cancel();
};
onMounted(() => {
  preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches || !("IntersectionObserver" in window)) return;
  preference.addEventListener("change", stopMotion);
  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    animation = element.value.animate(
      [
        { opacity: 0.35, transform: "translateY(22px)", filter: "blur(3px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
      ],
      { duration: 650, delay: props.delay, easing: "cubic-bezier(.2,.65,.3,1)" },
    );
  }, { threshold: 0.08 });
  observer.observe(element.value);
});
onBeforeUnmount(() => {
  stopMotion();
  preference?.removeEventListener("change", stopMotion);
});
</script>

<template>
  <div ref="element"><slot /></div>
</template>
