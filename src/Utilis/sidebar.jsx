import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function sidebar() {
  
  return (
<div className='flex min-h-[calc(100vh-17px)] bg-[#7743DB]  items-start'>
  <div className='flex bg-[#7743DB] flex-col justify-center gap-10 w-full '>
  <Link to='/home' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Home</div>
    </Link>
    <Link to='/buy' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Buy</div>
    </Link>
    <Link to='/sell' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Sell</div>
    </Link>

    <Link to='/profile' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Profile</div>
    </Link>
    <Link to='/analysis' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Analysis</div>
    </Link>
    <Link to='/news' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">News</div>
    </Link>
  </div>
</div>


  )
}

export default sidebar