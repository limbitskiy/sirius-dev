<script setup lang="ts">
import SectionHeader from "~/components/molecules/SectionHeader.vue";
import TechPill from "~/components/molecules/TechPill.vue";
</script>

<template>
  <section id="it-development" class="bg-greybg border border-y-[var(--border-color)] border-x-transparent pt-28 pb-32">
    <div class="container mx-auto px-4">
      <SectionHeader :title="$t('tech-title')" :subtitle="$t('tech-subtitle')" />

      <div class="mt-12 grid gap-8 lg:grid-cols-4">
        <TechPill :title="$t('tech-pill-1-title')" :subtitle="$t('tech-pill-1-desc')">
          <template #icon>
            <Icon name="carbon:tree-view-alt" size="20" />
          </template>
        </TechPill>

        <TechPill :title="$t('tech-pill-2-title')" :subtitle="$t('tech-pill-2-desc')">
          <template #icon>
            <Icon name="material-symbols:bar-chart-4-bars" size="20" />
          </template>
        </TechPill>

        <TechPill :title="$t('tech-pill-3-title')" :subtitle="$t('tech-pill-3-desc')">
          <template #icon>
            <Icon name="material-symbols:code-rounded" size="20" />
          </template>
        </TechPill>

        <TechPill :title="$t('tech-pill-4-title')" :subtitle="$t('tech-pill-4-desc')">
          <template #icon>
            <Icon name="material-symbols:av-timer" size="20" />
          </template>
        </TechPill>
      </div>
    </div>
  </section>
</template>
