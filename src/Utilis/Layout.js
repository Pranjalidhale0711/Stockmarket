import React from 'react';

import Sidebar from './sidebar.jsx'; 
import Sidebar_responsive from './Sidebar_responsive.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar_responsive/>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Layout;
