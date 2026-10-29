export const profile = {
  name: "Косов Максим Александрович",
  short: "Максим Косов",
  email: "maksym.kosov20@gmail.com",
  telegram: "MaksymKosov",
  telegramUrl: "https://t.me/MaksymKosov",
  height: 185,
  weight: 82,
};

export const nav = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/services", label: "Услуги" },
  { href: "/contact", label: "Контакты" },
];

export type Service = {
  slug: string;
  title: string;
  tag: string;
  lead: string;
  description: string;
  points: string[];
  formats: { name: string; text: string }[];
  steps: { title: string; text: string }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "boxing",
    title: "Персональные тренировки",
    tag: "Классический бокс · Тайский бокс",
    lead: "Бокс и муай-тай от мастера спорта: онлайн и в зале.",
    description:
      "Индивидуальная работа с чемпионом страны и мастером спорта. Строю программу под ваш уровень и цель: с нуля до выступлений на соревнованиях, или просто форма, выносливость и уверенность в себе.",
    points: [
      "Стойка, дистанция, работа ног и защита",
      "Серии ударов руками и ногами, локти и колени в тайском боксе",
      "Работа на лапах, в парах и на мешке",
      "Общая физическая подготовка и кардио",
      "Подготовка к спаррингам и соревнованиям",
      "Разбор техники по видео в онлайн-формате",
    ],
    formats: [
      {
        name: "Офлайн",
        text: "Живые тренировки в зале: лапы, спарринги, коррекция техники на месте.",
      },
      {
        name: "Онлайн",
        text: "Видеосвязь, персональный план и разбор вашего видео. Подходит из любой точки мира.",
      },
    ],
    steps: [
      { title: "Знакомство", text: "Обсуждаем цель, опыт, здоровье и расписание." },
      { title: "Программа", text: "Составляю план под ваш уровень и сроки." },
      { title: "Тренировки", text: "Работаем, отслеживаем прогресс и корректируем нагрузку." },
      { title: "Результат", text: "Фиксируем достижения и ставим следующую цель." },
    ],
    cta: "Записаться на тренировку",
  },
  {
    slug: "csharp",
    title: "Обучение C# .NET 8.0",
    tag: "От чайника до гуру",
    lead: "Научу программировать на C# и .NET 8.0 с нуля и до уровня профи.",
    description:
      "Пошаговый путь от первого «Hello, World» до проектирования архитектуры реальных приложений. Только практика: на каждом этапе вы пишете код и получаете обратную связь.",
    points: [
      "Основы: типы, управляющие конструкции, методы, коллекции",
      "ООП: классы, наследование, интерфейсы, SOLID",
      "LINQ, делегаты, события, обобщения",
      "Асинхронность: async/await, Task, потоки",
      "ASP.NET Core 8: Web API, Minimal API, Middleware",
      "Entity Framework Core, SQL и работа с базами данных",
      "Тестирование, Git, Docker и основы архитектуры",
    ],
    formats: [
      {
        name: "Индивидуально",
        text: "Личные занятия по видеосвязи, темп и программа подстраиваются под вас.",
      },
      {
        name: "Практика на проекте",
        text: "Собираем собственный проект для портфолио и разбираем код как на ревью.",
      },
    ],
    steps: [
      { title: "Уровень", text: "Определяем, с чего начинаем и куда хотим прийти." },
      { title: "Основы", text: "Синтаксис, ООП и привычка писать чистый код." },
      { title: "Практика", text: "Web API, базы данных, реальные задачи." },
      { title: "Уровень Pro", text: "Архитектура, тесты, подготовка к собеседованиям." },
    ],
    cta: "Записаться на обучение",
  },
  {
    slug: "merch",
    title: "Kosmos Мерч",
    tag: "Футболки · Худи",
    lead: "Одежда для тех, кто тренируется и не сдаётся.",
    description:
      "Футболки и худи с моей символикой. Удобный крой для зала и повседневной жизни. Для заказа напишите мне, подберём размер и цвет.",
    points: [
      "Футболки: плотный хлопок, свободная посадка",
      "Худи: тёплые, мягкие, с капюшоном",
      "Размеры от S до XXL",
      "Принты в стиле бокса и уличной культуры",
    ],
    formats: [
      { name: "Футболки", text: "Лёгкие и дышащие, для тренировок и города." },
      { name: "Худи", text: "Плотные и тёплые, на каждый день." },
    ],
    steps: [
      { title: "Выбор", text: "Выбираете модель, цвет и размер." },
      { title: "Заказ", text: "Пишете мне в Telegram или на почту." },
      { title: "Оплата", text: "Согласуем удобный способ оплаты." },
      { title: "Доставка", text: "Отправляю заказ и сообщаю трек-номер." },
    ],
    cta: "Заказать мерч",
  },
];

export const achievements = [
  { badge: "МС", title: "Мастер спорта по боксу", text: "Высшая квалификация в классическом боксе." },
  { badge: "🏆", title: "Чемпион Страны", text: "Победа на национальном первенстве." },
  { badge: "★", title: "Многократный чемпион областей", text: "Стабильные победы на региональных турнирах." },
];

export const timeline = [
  {
    period: "Детство",
    title: "Гимнастика и единоборства",
    text: "Контактные единоборства и гимнастика сформировали координацию, гибкость и характер бойца.",
  },
  {
    period: "Юность",
    title: "Паркур, фриран и воркаут",
    text: "Вёл свой блог с паркуром и фрираном, долгое время занимался уличным воркаутом.",
  },
  {
    period: "Спорт",
    title: "Мастер спорта, чемпион Страны",
    text: "Классический бокс, тайский бокс, титулы чемпиона Страны и многократного чемпиона областей.",
  },
  {
    period: "После 2022",
    title: "Болгария · Польша · Турция",
    text: "Златни Пясци, Вроцлав и Анталья: новые страны, новые люди и опыт, который делает сильнее.",
  },
  {
    period: "Сегодня",
    title: "Россия: тренер и преподаватель",
    text: "Провожу тренировки по боксу и тайскому боксу, обучаю C# и .NET 8.0, развиваю свой мерч.",
  },
];

export const skills = [
  { name: "Классический бокс", url: "https://ru.wikipedia.org/wiki/Бокс" },
  { name: "Тайский бокс", url: "https://ru.wikipedia.org/wiki/Муай-тай" },
  { name: "Гимнастика", url: "https://ru.wikipedia.org/wiki/Гимнастика" },
  { name: "Паркур", url: "https://ru.wikipedia.org/wiki/Паркур" },
  { name: "Фриран", url: "https://ru.wikipedia.org/wiki/Фриран" },
  { name: "Воркаут", url: "https://ru.wikipedia.org/wiki/Воркаут" },
  { name: "C#", url: "https://ru.wikipedia.org/wiki/C_Sharp" },
  { name: ".NET 8.0", url: "https://ru.wikipedia.org/wiki/.NET" },
  { name: "ASP.NET Core", url: "https://ru.wikipedia.org/wiki/ASP.NET_Core" },
  { name: "Тренерство", url: "https://ru.wikipedia.org/wiki/Тренер" },
];

export type Photo = { src: string; alt: string; caption: string; pos: string };

// Зал и ринг: главная страница, сетка 3×2
export const gymPhotos: Photo[] = [
  { src: "/photos/team-gym.jpg", alt: "Команда в зале у ринга", caption: "Команда", pos: "object-[50%_40%]" },
  { src: "/photos/samuraj-trio.jpg", alt: "Максим с бойцами на фоне баннера Samuraj", caption: "Турнир Samuraj", pos: "object-[50%_35%]" },
  { src: "/photos/corner.jpg", alt: "Работа в углу ринга перед боем", caption: "Угол ринга", pos: "object-[50%_30%]" },
  { src: "/photos/sparring.jpg", alt: "Спарринг в зале Samuraj", caption: "Спарринг", pos: "object-[60%_40%]" },
  { src: "/photos/training.jpg", alt: "Работа с боксёром в углу ринга", caption: "Тренировка", pos: "object-center" },
  { src: "/photos/samuraj.jpg", alt: "Победители турнира с кубками", caption: "Победы", pos: "object-center" },
];

// Вне ринга: страница «Обо мне», лента
export const lifePhotos: Photo[] = [
  { src: "/photos/moscow-square.jpg", alt: "На Красной площади", caption: "Москва", pos: "object-[50%_30%]" },
  { src: "/photos/moscow-bridge.jpg", alt: "На мосту с видом на Кремль", caption: "Кремль на закате", pos: "object-[50%_70%]" },
  { src: "/photos/kosmos-gang.jpg", alt: "Максим у граффити Kosmos Gang", caption: "Kosmos Gang", pos: "object-[50%_70%]" },
  { src: "/photos/boxing-club.jpg", alt: "Boxing Club: мерч на фоне гор", caption: "Boxing Club", pos: "object-[50%_75%]" },
  { src: "/photos/buggy.jpg", alt: "Путешествие на багги по пустыне", caption: "Пустыня", pos: "object-center" },
  { src: "/photos/winter.jpg", alt: "Зимняя прогулка", caption: "Зима", pos: "object-[50%_25%]" },
  { src: "/photos/style.jpg", alt: "Селфи в лифте", caption: "Стиль", pos: "object-[50%_30%]" },
];
