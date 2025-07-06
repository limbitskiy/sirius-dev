<script setup lang="ts">
import SectionHeader from "~/components/molecules/SectionHeader.vue";
import EmblaCarousel from "~/components/atoms/EmblaCarousel.vue";

interface Project {
  id: number;
  image: string;
  title: { en: string; ru: string };
  text?: string;
}

const { data: projects } = await useFetch<Project[]>("/api/projects");
</script>

<template>
  <section id="projects" class="border border-y-[var(--border-color)] border-x-transparent">
    <div class="container mx-auto border border-x-[var(--border-color)] border-y-transparent pt-32 pb-16">
      <div class="px-4">
        <SectionHeader class="mb-8" :title="$t('projects-title')" :subtitle="$t('projects-subtitle')" centered />
      </div>

      <!-- <div class="text-center">
        <UButton class="font-inter bg-sky-950 hover:bg-sky-800 mb-8" trailing-icon="i-lucide-arrow-right" size="xl">{{
          $t("button-all-projects")
        }}</UButton>
      </div> -->

      <EmblaCarousel v-if="projects" :items="projects" :options="{ loop: true }" />
    </div>
  </section>
</template>
