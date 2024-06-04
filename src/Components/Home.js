import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Lottie from "lottie-react";
import home from "../Assets/home.json";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerOffset = window.innerHeight * 0.75; // Adjust as needed
      setIsVisible(scrollTop > triggerOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex min-h-screen min-w-screen items-center  justify-start ml-20">
        <div className="flex flex-col w-1/2  ">
          <div className="font-extrabold text-transparent sm:text-lg md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Skill up and Practice on Our Platform with Zero Risk
          </div>
          <div className="font-bold  text-xl  text-[#52057B]">
            New to trading? Hesitating to invest directly in stocks? Don't
            worry, we are here to assist you. Practice investment risk-free.
          </div>
      
        </div>
        <div className="max-w-lg w-[50vw]">
          <Lottie animationData={home} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
