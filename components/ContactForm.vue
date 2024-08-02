<template>
  <UCard v-if="locale === 'ru'" :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header><span class="text-2xl font-bold">Обратная связь:</span></template>

    <UForm :schema="schema" :state="state" class="flex flex-col gap-4" @submit="onSubmit">
      <UFormGroup label="Название компании" name="name">
        <UInput v-model="state.name" color="gray" variant="outline" size="lg" />
      </UFormGroup>

      <UFormGroup label="Почта" name="email">
        <UInput v-model="state.email" color="gray" variant="outline" size="lg" />
      </UFormGroup>

      <UFormGroup label="Комментарий" name="comment">
        <UTextarea v-model="state.comment" color="gray" variant="outline" size="lg" />
      </UFormGroup>

      <div class="btn-cnt flex gap-2 justify-end">
        <UIButton variant="accent-btn" type="submit" size="sm">ok</UIButton>
        <UIButton variant="black-btn" size="sm" @onClick="onModalClose">cancel</UIButton>
      </div>
    </UForm>
  </UCard>
  <UCard v-else :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header><span class="text-2xl font-bold">Contact us:</span></template>

    <UForm :schema="schema" :state="state" class="flex flex-col gap-4" @submit="onSubmit">
      <UFormGroup label="Company name" name="name">
        <UInput v-model="state.name" color="gray" variant="outline" size="lg" placeholder="Name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" color="gray" variant="outline" size="lg" placeholder="Email" />
      </UFormGroup>

      <UFormGroup label="Comment" name="comment">
        <UTextarea v-model="state.comment" color="gray" variant="outline" size="lg" placeholder="Comment" />
      </UFormGroup>

      <div class="btn-cnt flex gap-2 justify-end">
        <UIButton variant="accent-btn" type="submit" size="sm">ok</UIButton>
        <UIButton variant="black-btn" size="sm" @onClick="onModalClose">cancel</UIButton>
      </div>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { useUserStore } from "~/store/user";

const userStore = useUserStore();

const { locale } = storeToRefs(userStore);
const { setModalOpen, setNotificationOpen } = userStore;

const schema = object({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
});

const state = ref({
  name: "",
  email: "",
  comment: "",
});

const onModalClose = () => {
  setModalOpen(false);
};

const onSubmit = async (e) => {
  const formData = e.data;
  onModalClose();
  setNotificationOpen(true);
};
</script>
