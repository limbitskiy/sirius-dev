<template>
  <section class="form mb-12">
    <div v-if="locale === 'ru'" class="form-bg text-white">
      <div class="container py-16">
        <h2 class="section-title text-center">Есть вопросы?</h2>
        <h3 class="section-title text-center">Свяжитесь с нами</h3>
        <form class="w-full flex flex-col" @submit="handleSubmit">
          <div class="form-content flex flex-wrap my-6 gap-4 justify-center">
            <div class="form-start w-4/5 sm:w-2/5 flex flex-col gap-4 min-w-60 h-32 justify-between">
              <UIInput v-model="name" placeholder="ИМЯ" />
              <UIInput v-model="email" placeholder="EMAIL" />
            </div>
            <div class="form-end w-4/5 sm:w-2/5 min-w-60">
              <UITextarea v-model="comment" placeholder="КОММЕНТАРИЙ" />
            </div>
          </div>
          <input
            type="submit"
            value="отправить"
            class="cursor-pointer rounded-xl py-4 px-16 text-lg font-bold uppercase text-white transition-all w-4/5 sm:w-64 m-auto black-btn"
          />
        </form>
      </div>
    </div>
    <div v-else class="form-bg text-white">
      <div class="container py-16">
        <h2 class="section-title text-center">Send request</h2>
        <!-- <h3 class="section-title text-center">Свяжитесь с нами</h3> -->
        <form class="w-full flex flex-col" @submit="handleSubmit">
          <div class="form-content flex flex-wrap my-6 gap-4 justify-center">
            <div class="form-start w-4/5 sm:w-2/5 flex flex-col gap-4 min-w-60 h-32 justify-between">
              <UIInput v-model="name" placeholder="NAME" />
              <UIInput v-model="email" placeholder="EMAIL" />
            </div>
            <div class="form-end w-4/5 sm:w-2/5 min-w-60">
              <UITextarea v-model="comment" placeholder="PROJECT DETAILS" />
            </div>
          </div>
          <input type="submit" value="send" class="cursor-pointer rounded-xl py-4 px-16 text-lg font-bold uppercase text-white transition-all w-4/5 sm:w-64 m-auto black-btn" />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = userStore;

const name = ref("");
const email = ref("");
const comment = ref("");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name.value);
  console.log(email.value);
  console.log(comment.value);
};
</script>
