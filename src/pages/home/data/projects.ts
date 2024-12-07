import { ProjectShort } from "@components/project/types";

export const projects: ProjectShort[] = [
  {
    title: 'BriskMeal',
    url: 'https://www.briskmeal.ru/',
    github: 'https://github.com/natalya-vd/BriskMeal/tree/develop',
    description: 'BriskMeal - групповой учебный проект. Команда состояла из 5 человек - 3 frontend-разработчика, 1 backend-разработчик и 1 fullstack-разработчик. Работали по Agile. В данном проекте занималась бэкенд разработкой АПИ для пользовательского сайта и созданием админ-панели для наполнения контента сайта (фронт и бэк).',
    image: '/public/projects/briskmeal.jpg',
    'development-tools': [ 'Vue', 'Sass', 'Axios', 'Bootstrap', 'Laravel', 'Laravel UI', 'MySQL', 'Docker'],
    role: 'Fullstack разработчик',
    dateStart: '12.2022',
    dateEnd: '02.2023',
    type: 'training'
  },
  {
    title: 'Rento',
    url: 'https://rento.one/',
    description: 'Rento - сервис аренды недвижимости. Сайт претерпел редизайн и был переписан на современный стек. В данном проекте занималась разработкой архитектуры, написанием логики взаимодействия с бэком, написанием компонентов различной сложности для клиентского сайта и написанием админки для внутреннего использования.',
    image: '/public/projects/rento-new.jpg',
    'development-tools': ['React', 'Next.js', 'React-admin', 'TypeScript', 'Axios', 'Sass', 'EsLint', 'Prettier'],
    role: 'Frontend разработчик',
    dateStart: '12.2021',
    dateEnd: '11.2022',
    type: 'commercial'
  },
  {
    title: 'Rento',
    url: 'https://rento.one/',
    description: 'Первая версия сайта. Написана на php и twig. Занималась версткой страниц, написанием валидации форм и отправки данных на бэк, интегрированием модальных окон и слайдеров Bootstrap',
    image: '/public/projects/rento-old.jpg',
    'development-tools': ['Twig', 'JavaScript', 'jQuery', 'Sass'],
    role: 'Frontend разработчик',
    dateStart: '06.2021',
    dateEnd: '05.2022',
    type: 'commercial'
  }
]