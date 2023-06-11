import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isAuth = true; // mock
  return isAuth ? <Outlet /> : <Navigate to="/welcome" />;
};
