// src/components/Layout/Layout.tsx
import React, { FC } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
         <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;