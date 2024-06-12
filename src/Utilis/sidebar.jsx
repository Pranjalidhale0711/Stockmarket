import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function sidebar() {
  
  return (
<div className='flex min-h-screen bg-[#7743DB] sm:min-h-screen items-start'>
  <div className='flex bg-[#7743DB] flex-col justify-center gap-9 w-full '>
  <Link to='/home' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Home</div>
    </Link>
    <Link to='/buy' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Buy</div>
    </Link>
    <Link to='/sell' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Sell</div>
    </Link>
    <div className="font-bold text-lg py-2 px-4 text-white  bg-[#7743DB] cursor-pointer hover:underline rounded-lg">News</div>
    <Link to='/profile' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Profile</div>
    </Link>
    <Link to='/analysis' className="w-full">
      <div className="font-bold text-lg py-2 px-4 text-white hover:underline bg-[#7743DB]">Analysis</div>
    </Link>
  </div>
</div>


  )
}

export default sidebar