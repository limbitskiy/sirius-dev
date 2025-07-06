<script setup lang="ts">
import SectionHeader from "~/components/molecules/SectionHeader.vue";
import ArchPill from "~/components/molecules/ArchPill.vue";
import SubtitleAndDesc from "~/components/atoms/SubtitleAndDesc.vue";
</script>

<template>
  <section class="py-32">
    <div class="container mx-auto px-4">
      <SectionHeader :title="$t('arch-title')" :subtitle="$t('arch-subtitle')" />

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <ArchPill :title="$t('arch-pill-1-title')">
          <template #content>
            <div class="grid-cols-[40px_auto] gap-4 sm:grid">
              <div class="bg-white rounded border border-neutral-200 w-10 h-10 grid place-items-center mb-2 sm:mb-0">
                <Icon name="proicons:layers" size="26" />
              </div>
              <div class="flex flex-col items-start">
                <SubtitleAndDesc :subtitle="$t('arch-pill-1-item-1-title')" :desc="$t('arch-pill-1-item-1-desc')" />
              </div>
            </div>

            <div class="grid-cols-[40px_auto] gap-4 sm:grid">
              <div class="bg-white rounded border border-neutral-200 w-10 h-10 grid place-items-center mb-2 sm:mb-0">
                <Icon name="material-symbols:settings-slow-motion-outline-rounded" size="26" />
              </div>
              <div class="flex flex-col items-start">
                <SubtitleAndDesc :subtitle="$t('arch-pill-1-item-2-title')" :desc="$t('arch-pill-1-item-2-desc')" />
              </div>
            </div>

            <div class="grid-cols-[40px_auto] gap-4 sm:grid">
              <div class="bg-white rounded border border-neutral-200 w-10 h-10 grid place-items-center mb-2 sm:mb-0">
                <Icon name="material-symbols:calendar-clock-rounded" size="26" />
              </div>
              <div class="flex flex-col items-start">
                <SubtitleAndDesc :subtitle="$t('arch-pill-1-item-3-title')" :desc="$t('arch-pill-1-item-3-desc')" />
              </div>
            </div>
          </template>
        </ArchPill>

        <ArchPill :title="$t('arch-pill-2-title')">
          <template #content>
            <div class="grid-cols-[40px_auto] gap-4 sm:grid">
              <div class="bg-white rounded border border-neutral-200 w-10 h-10 grid place-items-center mb-2 sm:mb-0">
                <Icon name="mynaui:layers-one" size="26" />
              </div>
              <div class="flex flex-col items-start">
                <SubtitleAndDesc :subtitle="$t('arch-pill-2-item-1-title')" :desc="$t('arch-pill-2-item-1-desc')" />
              </div>
            </div>

            <div class="grid-cols-[40px_auto] gap-4 sm:grid">
              <div class="bg-white rounded border border-neutral-200 w-10 h-10 grid place-items-center mb-2 sm:mb-0">
                <Icon name="material-symbols:database-outline" size="26" />
              </div>
              <div class="flex flex-col items-start">
                <SubtitleAndDesc :subtitle="$t('arch-pill-2-item-2-title')" :desc="$t('arch-pill-2-item-2-desc')" />
              </div>
            </div>

            <div class="grid-cols-[40px_auto] gap-4 sm:grid">
              <div class="bg-white rounded border border-neutral-200 w-10 h-10 grid place-items-center mb-2 sm:mb-0">
                <Icon name="material-symbols:document-scanner-outline" size="26" />
              </div>
              <div class="flex flex-col items-start">
                <SubtitleAndDesc :subtitle="$t('arch-pill-2-item-3-title')" :desc="$t('arch-pill-2-item-3-desc')" />
              </div>
            </div>
          </template>
        </ArchPill>
      </div>
    </div>
  </section>
</template>
