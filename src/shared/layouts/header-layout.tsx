import { Header } from '@/features/header';
import { Outlet } from 'react-router-dom';

export const HeaderLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden px-7">
      <Header />
      <div className="scrollbar h-full overflow-auto pb-4">
        <Outlet />
      </div>
    </div>
  );
};
