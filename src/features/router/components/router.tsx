import { PrivateRoute } from './private-route';
import { TestPage } from '@/pages/testPage/test-page';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/welcome" />} />
      <Route element={<PrivateRoute />}>
        <Route path="/welcome" element={<TestPage />} />
      </Route>
    </Routes>
  );
};
