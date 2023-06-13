import { SidebarButtonProps } from '../components/sidebar-button';

// TODO Добавить в путь кнопки профиля userId из будущего стора

export const sidebarButtons: SidebarButtonProps[] = [
  { title: 'Мои книги', path: '/books', icon: 'arrow' },
  { title: 'Добавить книгу', path: '/books/add_book', icon: 'plus' },
  { title: 'Профиль', path: '/profile/:userId', icon: 'arrow' },
];

export const sidebarButtonsSearch: SidebarButtonProps[] = [
  { title: 'Жанрам', path: '/books/genre', icon: 'arrow' },
  { title: 'Авторам', path: '/books/author', icon: 'arrow' },
  { title: 'Оценкам', path: '/books/score', icon: 'arrow' },
];
