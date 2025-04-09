export default defineEventHandler(async (event) => {
  return {
    ru: [
      {
        id: 0,
        title: "Torgashev",
        desc: "Torgashev — интеллектуальный сервис, который ведет переговоры с отелями от имени путешественников с использованием искусственного интеллекта. Пользователь отправляет ссылку на выбранный им отель (на Booking, Airbnb или любой другой платформе), а посредник на базе искусственного интеллекта обеспечивает персонализированную скидку и лучшие условия бронирования. Продукт помогает путешественникам экономить на размещении, автоматизируя процесс получения лучших предложений.",
        image: "torgashev.png",
      },
      {
        id: 1,
        title: "Система аналитики недвижимости",
        desc: "Подробная информация по 20+ миллионам объектов недвижимости, включая историю по собственникам, обременениям и проверкам. Поддержана быстрая фильтрация по 80+ параметрам, в т.ч. по связанным объектам. Загрузка и выгрузка любых выборок, визуализация на карте.",
        image: "m3.png",
      },
      {
        id: 2,
        title: "Платформа для размещения рекламы",
        desc: "Оптимизация рекламных объявлений и ставок в режиме реального времени для тысяч веб-сайтов, с обработкой более 100 тыс.запросов в секунду. Deep learning алгоритмы обеспечили рост выручки на 20+%",
        image: "advessio.png",
      },
      {
        id: 3,
        title: "Система управления структурой данных",
        desc: "Создание многоуровневой структуры сущностей, с произвольным набором полей. По каждому полю можно настроить правила выборки и обновления данных, параметры доступа, справочные данные, а также правила визуализации",
        image: "admin-view.png",
      },
      {
        id: 4,
        title: "Конструктор для создания веб-сайтов",
        desc: "Создание многостраничных сайтов на базе стандартных VUE-компонент, с настройкой бизнес-логики для любых элементов экрана. Поддерживаются составные компоненты и вложенные страницы",
        image: "constructor.png",
      },
    ],
    en: [
      {
        id: 0,
        title: "Torgashev",
        desc: "Torgashev is an intelligent service that negotiates with hotels on behalf of travelers using artificial intelligence. A user submits a link to their selected hotel (on Booking, Airbnb, or any other platform), and the AI negotiator secures a personalized discount and better booking terms. The product helps travelers save on accommodation by automating the process of getting the best deals.",
        image: "m3.png",
      },
      {
        id: 1,
        title: "Tokling.com",
        desc: "Multiplayer word battles and AI-driven video feed to practise 42 foreign languages. Scalable to hundreds of millions users",
        link: "https://tokling.com",
        image: "/tokling.png",
      },
      {
        id: 2,
        title: "UniRender engine",
        desc: "Backend-driven Frontend Render to manage standard components via unified endpoint. Open source under MIT license, easy setup in 1 minute.",
        link: "https://gitlab.com/unibackend-org/unirender-package",
        image: "/unirender.png",
      },
      {
        id: 3,
        title: "Database management system",
        desc: "Web interface to create multilayer entities with arbitrary set of attributes. Each attribute has rules on data selection and update, permissions, references and web visualization.",
        image: "/admin-view.png",
      },
      {
        id: 4,
        title: "Ads platform",
        desc: "Real-time analytics and bidding on thousands of web sites with processing 100K+ requests per second. Deep learning algorithms have provided 20% revenue growth on ads placements.",
        image: "/advessio.png",
      },
    ],
  };
});
