import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function sidebar() {
  
  return (
<div className='flex items-start h-screen data-twe-animation-start sm:w-1/6 bg-[#7743DB]'>
  <div className='flex bg-[#7743DB] flex-col justify-center gap-9 my-4'>
    <Link to='/buy'>
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Buy</div>
    </Link>
    <Link to='/sell'>
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Sell</div>
    </Link>
    <div className="font-bold text-lg py-2 px-4 text-white  bg-[#7743DB] cursor-pointer hover:underline rounded-lg">News</div>
    <div className="font-bold text-lg py-2 px-4 text-white  bg-[#7743DB] cursor-pointer hover:underline rounded-lg">Profile</div>
  </div>
</div>


  )
}

export default sidebar