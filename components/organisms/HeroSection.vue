<script setup lang="ts">
import ContactModal from "~/components/molecules/ContactModal.vue";

const overlay = useOverlay();

const openModal = () => {
  const modal = overlay.create(ContactModal, {});
  modal.open();
};
</script>

<template>
  <div class="overflow-hidden">
    <div class="sm:grid grid-cols-2 justify-items-start gap-x-8 items-center py-12 mt-24 mb-12 container mx-auto px-4">
      <div class="flex flex-col gap-4 py-12 rounded">
        <h1 class="font-inter text-4xl text-center sm:text-start sm:text-7xl font-black">
          {{ $t("hero-title-1") }}
          <br />
          <span class="text-rose-500 whitespace-nowrap">{{ $t("hero-title-2") }}</span>
        </h1>

        <h2 class="text-neutral-400 text-center sm:text-start sm:text-xl font-semibold">
          {{ $t("hero-desc") }}
        </h2>

        <div class="font-inter flex gap-4 mt-2 flex-col items-center sm:flex-row">
          <UButton class="px-8 bg-rose-500 hover:bg-rose-400" size="xl" @click="openModal">{{
            $t("button-contact")
          }}</UButton>
          <UButton class="px-8 bg-sky-950 hover:bg-sky-800" size="xl" to="#projects">{{
            $t("button-projects")
          }}</UButton>
        </div>
      </div>

      <div class="hidden lg:block">
        <UCard class="bg-greybg w-fit h-fit">
          <img src="/hero.png" class="h-[40dvh] w-auto max-w-none" />
        </UCard>
      </div>
    </div>
  </div>
</template>
