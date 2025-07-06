<script setup lang="ts">
import SubtitleAndDesc from "~/components/atoms/SubtitleAndDesc.vue";

defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <UCard class="bg-white">
    <div class="flex flex-col gap-2 items-start">
      <div class="bg-greybg rounded border border-neutral-200 text-accent w-10 h-10 grid place-items-center">
        <slot name="icon" />
      </div>
      <SubtitleAndDesc :subtitle="title" :desc="subtitle" />
    </div>
  </UCard>
</template>
