<script setup lang="ts">
import PageHeader from "~/components/organisms/PageHeader.vue";
import PageFooter from "~/components/organisms/PageFooter.vue";
</script>

<template>
  <PageHeader />

  <slot name="hero" />

  <slot name="tech" />

  <slot name="architecture" />

  <slot name="projects" />

  <PageFooter />
</template>
