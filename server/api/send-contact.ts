interface ContactDTO {
  companyName: string;
  email: string;
  comment?: string;
}

export default defineEventHandler(async (event) => {
  const contactData = await readBody<ContactDTO>(event);

  if (contactData) {
    try {
      const result = await $fetch("https://api.unibackend.com/send/request", {
        method: "POST",
        body: JSON.stringify(contactData),
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error?.message);
      } else {
        throw error;
      }
    }
  }

  return { success: true };
});
