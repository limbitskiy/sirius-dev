<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  centered?: boolean;
}>();
</script>

<template>
  <div :class="['text-center', centered ? '' : 'sm:text-start']">
    <h3 class="text-3xl font-inter font-black sm:text-5xl">{{ title }}</h3>
    <p class="text-neutral-400 font-semibold mt-2 sm:text-lg">{{ subtitle }}</p>
  </div>
</template>
