<script setup>
defineProps({
  name: { type: String, required: true },
});
</script>

<template>
  <svg
    class="symbol-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path
      v-if="name === 'star'"
      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"
    />
    <path v-else-if="name === 'diagonal'" d="M5 19 19 5M7 5h12v12" />
    <path v-else-if="name === 'right'" d="M4 12h16m-6-6 6 6-6 6" />
    <path v-else-if="name === 'up'" d="M12 20V4m-6 6 6-6 6 6" />
  </svg>
</template>
