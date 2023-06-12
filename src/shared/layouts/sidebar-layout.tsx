import { Sidebar } from '@/features/sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const SidebarLayout = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
