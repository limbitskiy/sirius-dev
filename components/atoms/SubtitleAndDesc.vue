<script setup lang="ts">
defineProps<{
  subtitle: string;
  desc: string;
}>();
</script>

<template>
  <h4 class="font-bold">{{ subtitle }}</h4>
  <p>{{ desc }}</p>
</template>
