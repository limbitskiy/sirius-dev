<script setup lang="ts">
import PageTemplate from "~/components/templates/PageTemplate.vue";
import HeroSection from "~/components/organisms/HeroSection.vue";
import TechSection from "~/components/organisms/TechSection.vue";
import ArchitectureSection from "~/components/organisms/ArchitectureSection.vue";
import ProjectsSection from "~/components/organisms/ProjectsSection.vue";
</script>

<template>
  <PageTemplate>
    <template #hero>
      <HeroSection />
    </template>

    <template #tech>
      <TechSection />
    </template>

    <template #architecture>
      <ArchitectureSection />
    </template>

    <template #projects>
      <ProjectsSection />
    </template>
  </PageTemplate>
</template>
