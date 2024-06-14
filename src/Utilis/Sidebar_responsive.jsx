import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import Sidebar from './sidebar';
function Sidebar_responsive() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleMenuClick = () => {
      // Toggle the visibility of the sidebar
      setShowSidebar(!showSidebar);
    };
  
    return (
      <div className="min-h-screen">
        <div className=''>
          {!showSidebar ? (
            <IoMenu style={{ fontSize: '4em', color: '#7743DB' }} className='w-17 h-17' onClick={handleMenuClick} />
          ) : (
            <FaWindowClose  style={{ fontSize: '4em', color: '#7743DB' }} className='w-17 h-17' onClick={handleMenuClick} />
          )}
          {showSidebar && <Sidebar />}
        </div>
      </div>
    );
}

export default Sidebar_responsive