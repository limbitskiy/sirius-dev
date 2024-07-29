export default defineEventHandler(async (event) => {
  const timezone = await readBody(event);

  if (timezone) {
    setCookie(event, "timezone", timezone, { path: "/" });
  }
  return { success: true };
});
