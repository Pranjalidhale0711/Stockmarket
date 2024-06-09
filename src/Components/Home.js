import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "../Utilis/sidebar";
import { FaWindowClose } from "react-icons/fa";
import Sidebar_responsive from "../Utilis/Sidebar_responsive";

const HomePage = () => {
  const [initialCredit, setinitialCredit] = useState(1000);
 

  if (localStorage.getItem("credits")==null) {
    localStorage.setItem("credits", initialCredit);
   
  }

  return (
    <>
      <Sidebar_responsive />
    </>
  );
};

export default HomePage;
