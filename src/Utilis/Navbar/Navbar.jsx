import React, { useEffect, useState } from 'react'
import Sidebar_responsive from './Sidebar_responsive';
import { Link } from 'react-router-dom';

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isWideScreen = windowWidth > 1000;
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <>
    {isWideScreen ? (
        <>
          <nav className="navbar ">
          <Link to="/home" style={{ textDecoration: 'none' }}>
      <div className="logo text-[#47126b] bg-[#f5ecfe] pl-5" style={{ cursor: "pointer" }}>
       TradeWise
      </div>
    </Link >
            <ul className="nav-links  font-bold " style={{marginRight:"50px"}}>
              <li><a href="/buy" className='hover:underline'>Buy</a></li>
              <li><a href="/sell" className='hover:underline'>Sell</a></li>
              <li><a href="/profile" className='hover:underline'>Profile</a></li>
              <li><a href="/analysis" className='hover:underline'>Analysis</a></li>
              <li><a href="/news" className='hover:underline'>News</a></li>
              <li><a href="/sign-up" className="signup-btn">Sign up</a></li>
            </ul>
          </nav>
        </>
      ) : (
        <Sidebar_responsive />
      )}
      </>
  )
}

export default Navbar