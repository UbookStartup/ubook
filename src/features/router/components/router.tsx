import { BookPage } from '@/pages/book-page';
import { BooksPage } from '@/pages/books-page';
import { ProfilePage } from '@/pages/profile-page';
import { TestPage } from '@/pages/test-page';
import { HeaderLayout, SidebarLayout } from '@/shared/layouts';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private-route';

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/books" />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="login" element={<TestPage />} />
          <Route path="/" element={<SidebarLayout />}>
            <Route path="books" element={<BooksPage />} />
            <Route path="book/:bookId" element={<BookPage />} />
            <Route path="books/add_book" element={<TestPage />} />
            <Route path="books/genre" element={<TestPage />} />
            <Route path="books/author" element={<TestPage />} />
            <Route path="books/score" element={<TestPage />} />
            <Route path="profile/:userId" element={<ProfilePage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
