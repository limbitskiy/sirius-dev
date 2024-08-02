<template>
  <Loading v-if="loading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UIUpButton />

  <UModal :modelValue="modalOpen" @close="onModalClose">
    <ContactForm />
  </UModal>

  <UModal :modelValue="notificationOpen" @close="onNotificationClose">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <span class="text-2xl font-bold">Thank you!</span>
      </template>
      <p>We recieved your message. You will be contacted shortly</p>
      <template #footer>
        <div class="btn-cnt flex gap-2 justify-end">
          <UIButton variant="accent-btn" size="sm" @click="onNotificationClose">ok</UIButton>
        </div>
      </template>
    </UCard>
  </UModal>

  <USlideover v-model="menuOpen">
    <div class="p-4 flex-1 relative">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="() => setMenuOpen(false)"
      />
      <div class="mob-menu-content absolute inset-1 grid place-items-center">
        <MobileMenu />
      </div>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const store = useUserStore();

const { loading, modalOpen, notificationOpen, menuOpen } = storeToRefs(store);
const { setModalOpen, setNotificationOpen, setMenuOpen } = store;

const onModalClose = () => {
  setModalOpen(false);
};

const onNotificationClose = () => {
  setNotificationOpen(false);
};
</script>
