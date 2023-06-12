import { Sidebar } from '@/features/sidebar';
import { Outlet } from 'react-router-dom';

export const SidebarLayout = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="scrollbar flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
