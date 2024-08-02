export default defineEventHandler(async (event) => {
  return {
    ru: [
      //   {
      //     id: 0,
      //     text: "Главная",
      //   },
      {
        id: 1,
        text: "Наши технологии",
        href: "#it-development",
      },
      {
        id: 2,
        text: "Проекты",
        href: "#projects",
      },
      {
        id: 3,
        text: "Контакты",
        href: "#footer",
      },
    ],
    en: [
      {
        id: 0,
        text: "IT development",
        href: "#it-development",
      },
      {
        id: 1,
        text: "Special offer",
        href: "#special-offer",
      },
      {
        id: 2,
        text: "Featured projects",
        href: "#projects",
      },
      {
        id: 3,
        text: "Blog",
        href: "/blog",
      },
      {
        id: 4,
        text: "Contacts",
        href: "#footer",
      },
    ],
  };
});
