import { PrivateRoute } from './private-route';
import { TestPage } from '@/pages/test-page';
import { HeaderLayout, SidebarLayout } from '@/shared/layouts';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/books" />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="login" element={<TestPage />} />
          <Route path="/" element={<SidebarLayout />}>
            <Route path="books" element={<TestPage />} />
            <Route path="books/add_book" element={<TestPage />} />
            <Route path="books/genre" element={<TestPage />} />
            <Route path="books/author" element={<TestPage />} />
            <Route path="books/score" element={<TestPage />} />
            <Route path="profile/:userId" element={<TestPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
