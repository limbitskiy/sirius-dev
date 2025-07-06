export default defineEventHandler(async (_) => {
  return [
    {
      id: "torgashev",
      title: {
        en: "Torgashev",
        ru: "Torgashev",
      },
      desc: {
        en: "Torgashev is an intelligent service that negotiates with hotels on behalf of travelers using artificial intelligence. A user submits a link to their selected hotel (on Booking, Airbnb, or any other platform), and the AI negotiator secures a personalized discount and better booking terms. The product helps travelers save on accommodation by automating the process of getting the best deals.",
        ru: "Torgashev — интеллектуальный сервис, который ведет переговоры с отелями от имени путешественников с использованием искусственного интеллекта. Пользователь отправляет ссылку на выбранный им отель (на Booking, Airbnb или любой другой платформе), а посредник на базе искусственного интеллекта обеспечивает персонализированную скидку и лучшие условия бронирования. Продукт помогает путешественникам экономить на размещении, автоматизируя процесс получения лучших предложений.",
      },
      image: "torgashev.png",
    },
    {
      id: "m3",
      title: {
        ru: "Система аналитики недвижимости",
        en: "Real Estate analytics system",
      },
      desc: {
        ru: "Подробная информация по 20+ миллионам объектов недвижимости, включая историю по собственникам, обременениям и проверкам. Поддержана быстрая фильтрация по 80+ параметрам, в т.ч. по связанным объектам. Загрузка и выгрузка любых выборок, визуализация на карте.",
        en: "Detailed information on 20+ million real estate objects, including history by owners, encumbrances and inspections. Fast filtering by 80+ parameters is supported, including by related objects. Download and unload any selections and visualize objects on the map.",
      },
      image: "m3.png",
    },
    {
      id: "admin-view",
      title: {
        ru: "Система управления структурой данных",
        en: "Database management system",
      },
      desc: {
        ru: "Создание многоуровневой структуры сущностей, с произвольным набором полей. По каждому полю можно настроить правила выборки и обновления данных, параметры доступа, справочные данные, а также правила визуализации",
        en: "Web interface to create multilayer entities with arbitrary set of attributes. Each attribute has rules on data selection and update, permissions, references and web visualization.",
      },
      image: "admin-view.png",
    },
    {
      id: "advessio",
      title: {
        ru: "Платформа для размещения рекламы",
        en: "Ads platform",
      },
      desc: {
        ru: "Оптимизация рекламных объявлений и ставок в режиме реального времени для тысяч веб-сайтов, с обработкой более 100 тыс.запросов в секунду. Deep learning алгоритмы обеспечили рост выручки на 20+%",
        en: "Real-time analytics and bidding on thousands of web sites with processing 100K+ requests per second. Deep learning algorithms have provided 20% revenue growth on ads placements.",
      },
      image: "advessio.png",
    },
    {
      id: "constructor",
      title: {
        ru: "Конструктор для создания веб-сайтов",
        en: "Website building system",
      },
      desc: {
        ru: "Создание многостраничных сайтов на базе стандартных VUE-компонент, с настройкой бизнес-логики для любых элементов экрана. Поддерживаются составные компоненты и вложенные страницы",
        en: "Multi-page sites creation based on standard vue/react components, with business logic customization for any screen elements. Composite components and nested pages are supported",
      },
      image: "constructor.png",
    },
    {
      id: "unirender",
      title: {
        ru: "Юнирендер",
        en: "UniRender engine",
      },
      desc: {
        ru: "Backend-driven рендерер для управления стандартными компонентами через унифицированную конечную точку. Открытый исходный код по лицензии MIT, простая настройка за 1 минуту",
        en: "Backend-driven Frontend Render to manage standard components via unified endpoint. Open source under MIT license, easy setup in 1 minute",
      },
      link: "https://gitlab.com/unibackend-org/unirender-package",
      image: "/unirender.png",
    },
  ];
});
