import { ProjectShort } from "@components/project/types";

export const projects: ProjectShort[] = [
  {
    title: 'Rento',
    url: 'https://rento.one/',
    description: 'Rento - сервис аренды недвижимости. Сайт претерпел редизайн и был переписан на современный стек. В данном проекте занималась разработкой архитектуры, написанием логики взаимодействия с бэком, написанием компонентов различной сложности для клиентского сайта и написанием админки для внутреннего использования.',
    image: '/public/projects/rento-new.jpg',
    'development-tools': ['React', 'Next.js', 'React-admin', 'TypeScript', 'Axios', 'Sass', 'EsLint', 'Prettier'],
    role: 'Frontend разработчик',
    dateStart: '12.2021',
    dateEnd: '11.2022',
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
  }
]