import { Header } from '@/features/header';
import { Outlet } from 'react-router-dom';

export const HeaderLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
