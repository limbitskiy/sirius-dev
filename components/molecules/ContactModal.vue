<script setup lang="ts">
import * as z from "zod/v4";
import type { FormSubmitEvent } from "@nuxt/ui";
import { sendContact } from "~/api";

const emit = defineEmits<{
  close: [];
}>();

const { t: $t } = useI18n();

const schema = z.object({
  companyName: z.string($t("contact-form-required-field")),
  email: z.string($t("contact-form-required-field")).email({ error: $t("contact-form-email-not-validated") }),
  comment: z.string().optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  companyName: undefined,
  email: undefined,
  comment: undefined,
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await sendContact(event.data);
    toast.add({ title: $t("contact-form-success"), description: $t("contact-form-success-desc"), color: "success" });
  } catch (error) {
    let errMessage = $t("generic-error");

    if (error instanceof Error) {
      errMessage = error.message;
    }

    toast.add({ title: $t("contact-form-error"), description: errMessage, color: "error" });
  } finally {
    emit("close");
  }
}
</script>

<template>
  <UModal :title="$t('contact-form-title')" :description="$t('contact-form-subtitle')">
    <template #body>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormField :label="$t('contact-form-company-name')" name="companyName">
          <UInput v-model="state.companyName" class="w-full" />
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField :label="$t('contact-form-comment')" name="comment">
          <UTextarea v-model="state.comment" class="w-full" />
        </UFormField>

        <div class="font-inter flex justify-end gap-2">
          <UButton type="submit" variant="ghost" color="neutral" @click="() => emit('close')">{{
            $t("contact-form-cancel")
          }}</UButton>
          <UButton type="submit" class="bg-rose-500 hover:bg-rose-400">{{ $t("contact-form-submit") }}</UButton>
        </div>
      </UForm>
    </template>
  </UModal>
</template>
