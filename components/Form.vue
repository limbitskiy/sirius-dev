<template>
  <section class="form">
    <div v-if="locale === 'ru'" class="bg-gray-200 relative">
      <div class="bg-squares absolute inset-0 z-0"></div>
      <div class="container py-16 relative z-10 w-full lg:w-[50%]">
        <h2 class="section-title text-center">Обратная связь</h2>
        <UIPill>
          <UForm :schema="schema" :state="state" class="flex flex-col justify-center gap-8" @submit="onSubmit">
            <div class="form-body space-y-4">
              <UFormGroup label="Название компании" name="name">
                <UInput v-model="state.name" color="gray" size="xl" />
              </UFormGroup>

              <UFormGroup label="Почта" name="email">
                <UInput v-model="state.email" color="gray" type="email" size="xl" />
              </UFormGroup>

              <UFormGroup label="Комментарий" name="comment">
                <UTextarea v-model="state.comment" color="gray" variant="outline" size="xl" />
              </UFormGroup>
            </div>

            <input
              type="submit"
              value="отправить"
              class="cursor-pointer rounded-xl py-2 px-4 text-lg font-bold uppercase text-white transition-all w-full lg:w-48 m-auto black-btn"
            />
          </UForm>
        </UIPill>
      </div>
    </div>
    <div v-else class="bg-gray-200 relative">
      <div class="bg-squares absolute inset-0 z-0"></div>
      <div class="container py-16 relative z-10 w-full lg:w-[50%]">
        <h2 class="section-title text-center">Send request</h2>
        <!-- <h3 class="section-title text-center">Свяжитесь с нами</h3> -->
        <UIPill>
          <UForm :schema="schema" :state="state" class="flex flex-col justify-center gap-8" @submit="onSubmit">
            <div class="form-body space-y-4">
              <UFormGroup label="Company name" name="name">
                <UInput v-model="state.name" color="gray" size="xl" />
              </UFormGroup>

              <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" color="gray" type="email" size="xl" />
              </UFormGroup>

              <UFormGroup label="Comment" name="comment">
                <UTextarea v-model="state.comment" color="gray" variant="outline" size="xl" placeholder="Comment" />
              </UFormGroup>
            </div>

            <input type="submit" value="send" class="cursor-pointer rounded-xl py-2 px-4 text-lg font-bold uppercase text-white transition-all w-full lg:w-48 m-auto black-btn" />
          </UForm>
        </UIPill>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = userStore;
const { setNotificationOpen } = userStore;

const schema = object({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  comment: string(),
});

const state = ref({
  name: "",
  email: "",
  comment: "",
});

const onSubmit = async () => {
  state.value = {
    name: "",
    email: "",
    comment: "",
  };
  setNotificationOpen(true);
};
</script>
