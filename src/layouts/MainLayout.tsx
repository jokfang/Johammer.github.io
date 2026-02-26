import React from 'react';
import { Outlet } from 'react-router-dom';
import { MenuBar } from '../components/MenuBar';

const MainLayout: React.FC = () => {
  return (
    <>
      <MenuBar />
      <main className="container mx-auto pt-20 px-4 md:px-0 mb-28">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
