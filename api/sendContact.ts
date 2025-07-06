interface ContactDTO {
  companyName: string;
  email: string;
  comment?: string;
}

export const sendContact = async (data: ContactDTO) => {
  return await $fetch("/api/send-contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
