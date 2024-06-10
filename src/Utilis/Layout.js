// Layout.js
import React from 'react';
import Sidebar_responsive from '../Utilis/Sidebar_responsive';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar_responsive />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Layout;
