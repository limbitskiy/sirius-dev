<script setup lang="ts">
import SiriusLogo from "~/components/atoms/SiriusLogo.vue";
import SocialIcons from "~/components/atoms/SocialIcons.vue";
import ContactModal from "~/components/molecules/ContactModal.vue";

const overlay = useOverlay();

const openModal = () => {
  const modal = overlay.create(ContactModal, {});
  modal.open();
};
</script>

<template>
  <footer id="footer" class="bg-greybg">
    <div class="py-12">
      <div
        class="container flex flex-col gap-8 items-center justify-between h-full mx-auto px-4 lg:flex-row lg:items-start"
      >
        <div class="flex flex-col gap-4 items-start max-w-sm lg:w-1/3">
          <SiriusLogo />
          <div>
            <p>{{ $t("footer-text") }}</p>
          </div>
          <UButton class="font-inter px-8 bg-rose-500 hover:bg-rose-400" size="xl" @click="openModal">{{
            $t("button-contact")
          }}</UButton>
        </div>

        <div class="flex flex-col items-center gap-8 max-w-sm lg:flex-row lg:w-full lg:justify-end lg:items-start">
          <div>
            <h4 class="font-bold mb-2">{{ $t("russia-adress-title") }}</h4>
            <p>{{ $t("russia-adress-text") }}</p>
          </div>
          <div>
            <h4 class="font-bold mb-2">{{ $t("serbia-adress-title") }}</h4>
            <p>Sirius-dev D.O.O.Fruškogorska 1, office 2-VIII,Novi Sad, Republic of Serbia,21102</p>
          </div>
        </div>
      </div>
    </div>

    <div class="border border-t-[var(--border-color)] border-b-transparent border-x-transparent">
      <div class="container mx-auto flex items-center justify-between p-4">
        <div>
          <span class="text-neutral-400 text-xs">{{ $t("copyright") }}</span>
        </div>

        <div class="social-icons-cnt">
          <SocialIcons />
        </div>
      </div>
    </div>
  </footer>
</template>
