import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "../Utilis/sidebar";
import { FaWindowClose } from "react-icons/fa";
import Sidebar_responsive from "../Utilis/Sidebar_responsive";
import Tradeimage from '../Assets/stockimage.avif';
import Lottie from "lottie-react"
import animation from '../Assets/animation.json';

const HomePage = () => {

  return (
    <div className="flex flex-col h-screen">
    <h1 className="text-4xl sm:text-7xl m-2 font-bold mt-9 font mb-4 text-[#52057B] text-center text-decoration-line: ">TradeWise</h1>
    <div className="flex flex-col sm:flex-row items-center justify-center flex-1 px-4 py-8">
      <div className="text-center sm:max-w-[50%] sm:text-left sm:mr-4">
        <div className="mb-4 ml-3">
        <p className="mb-2 text-3xl sm:text-5xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #B030B0, #602080, #202060)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          Skill up and practice zero-risk trading on our free TradeWise account.
        </p>
          <p className="mb-2 sm:text-3xl text-2xl text-[#202060] font-bold">
            New to trading and a bit hesitant? Our TradeWise account is the perfect way to explore all of our instruments and test your trading strategies using entirely virtual funds - with zero risk.
          </p>
        </div>
      </div>
      <div className="hidden sm:block">
        <Lottie animationData={animation} className="sm:max-w-1/2" />
      </div>
    </div>
  </div>
  
   
  );
};

export default HomePage;