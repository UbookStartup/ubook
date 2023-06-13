import { SidebarButtonProps } from '../components/sidebar-button';

// TODO Добавить в путь кнопки профиля userId из будущего стора

export const sidebarButtons: SidebarButtonProps[] = [
  { title: 'Мои книги', path: '/books', icon: 'arrow' },
  { title: 'Добавить книгу', path: '/books/add_book', icon: 'plus' },
  { title: 'Жанры', path: '/books/genre', icon: 'arrow' },
  { title: 'Авторы', path: '/books/author', icon: 'arrow' },
  { title: 'Оценки', path: '/books/score', icon: 'arrow' },
  { title: 'Профиль', path: '/profile/:userId', icon: 'arrow' },
];
