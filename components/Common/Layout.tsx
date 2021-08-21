import React from 'react';
import Navbar from '../CoreComponents/Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
