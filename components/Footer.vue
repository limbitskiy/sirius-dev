<template>
  <footer id="footer" class="footer bg-black text-gray-300 text-lg grey-gradient relative text-center lg:text-start">
    <div class="bg-squares absolute inset-0 z-0"></div>
    <div v-if="locale === 'ru'" class="container relative z-10 px-4">
      <div class="footer-main flex items-center justify-between flex-col lg:flex-row">
        <div class="footer-start flex-1 py-12">
          <div class="footer col flex flex-col gap-6 max-w-60 items-center lg:items-start">
            <Logo variant="white" />
            <p>Быстрая разработка гибких B2B систем на современных технологиях</p>
            <UIButton variant="accent-btn" @click="onContactBtn"> связаться </UIButton>
          </div>
        </div>
        <div class="footer-end flex flex-1 items-center justify-between flex-col lg:flex-row gap-8 lg:gap-0">
          <div class="footer-col">
            <span class="text-2xl text-white">Российский офис</span>
            <p class="mt-4">
              Новодмитровская ул., 2 <br />
              корпус 1, 12 этаж
              <br />
              Москва, Россия,
              <br />
              127015
            </p>
            <!-- <a class="text-white underline" href="#"> на карте </a> -->
          </div>
          <div class="footer-col mb-8 lg:mb-0">
            <span class="text-2xl text-white">Европейский офис</span>
            <p class="mt-4">
              Sirius-dev D.O.O. <br />
              Fruškogorska 1, office 2-VIII, <br />
              Novi Sad, Republic of Serbia, <br />
              21102
            </p>
            <!-- <a class="text-white underline" href="#"> на карте </a> -->
          </div>
        </div>
      </div>
      <div class="footer-bottom flex flex-col md:flex-row items-center justify-between border-t border-gray-400 py-4">
        <SocialIcons />
        <div class="copyright">
          <span class="text-sm">Created and maintained by Sirius Dev</span>
        </div>
      </div>
    </div>
    <div v-else class="container relative z-10 px-4">
      <div class="footer-main flex items-center justify-between flex-col lg:flex-row">
        <div class="footer-start flex-1 py-12">
          <div class="footer col flex flex-col gap-6 max-w-[350px] items-center lg:items-start">
            <Logo variant="white" />
            <p>
              Next-generation AI technology <br />
              to build flexible and high performance <br />
              backend-driven apps and systems
            </p>
            <UIButton variant="accent-btn" @click="onContactBtn"> send request </UIButton>
          </div>
        </div>
        <div class="footer-col mb-8 lg:mr-8 lg:mb-0">
          <span class="text-2xl text-white">Contacts</span>
          <p class="mt-4">
            Sirius-dev D.O.O. <br />
            Fruškogorska 1, office 2-VIII, <br />
            Novi Sad, Republic of Serbia, <br />
            21102
          </p>
          <!-- <a class="text-white underline" href="#"> show on map </a> -->
        </div>
      </div>
      <div class="footer-bottom flex flex-col md:flex-row items-center justify-between border-t border-gray-400 py-4">
        <SocialIcons />
        <div class="copyright">
          <span class="text-sm">Created and maintained by Sirius Dev</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = storeToRefs(userStore);
const { setModalOpen } = userStore;

const onContactBtn = () => {
  setModalOpen(true);
};
</script>
