export const uploadScreen = async (formData: FormData) => {
  const resp = await fetch(`/api/strapi/api/screens`, {
    method: "POST",
    body: formData,
  });
  return resp;
};
