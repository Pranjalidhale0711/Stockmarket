import React, { useEffect, useState } from "react";
import { getStockData, getUserDetails, updateProfile } from '../Api/auth'
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(null);
  const [newUserName, setNewUserName] = useState('');
  const [stockNames,setStockNames]=useState([]);
  const [stockRemainingQuantity,setStockremainingQuantity]=useState([]);
  const [balance,setBalance]=useState(null);

  useEffect(()=>{
    const func=async()=>{
      // console.log("hi");
      try{
        const res= await getUserDetails();
        // console.log(res.response);
        setUserName(res.response.userName);
        setEmail(res.response.email);
      }catch(e)
      {
        // console.log(e);
      }
      try{
        const response=await getStockData()
        // console.log(response.portfolio_user.portfolio_user.portfolio);
        stockNames.length=0;
        stockRemainingQuantity.length=0;
        setBalance(response.portfolio_user.portfolio_user.balance);
        response.portfolio_user.portfolio_user.portfolio.map((name)=>{
          let temp = stockNames;
          temp.push(name.stockName);
          let temp2 = stockRemainingQuantity;
          temp2.push(name.stockRemainigQuantity);
          setStockNames(temp);
          setStockremainingQuantity(temp2);
          // console.log("name is ",temp);
          
         
        })
      }catch(e)
      {

      }
      }
    func();
  
  })
  const handleUpdateUserName=async()=>{
    try{
      const res= await updateProfile(newUserName);
      console.log(res.response);
     
    }catch(e)
    {
      console.log(e);
    }
  }
  const handleGetDetails=(stockName)=>{
    navigate(`/details/${stockName}`);
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
      <h1 className="text-5xl mt-9 font-extrabold mb-4 text-[#52057B]">Your Profile</h1>

      </div>
        <div className="flex flex-col items-start text-black p-4 space-y-4">
      
      <div className="text-4xl text-gray-800 items-center justify-center font-bold" id="userName">Username:{userName}</div>
      <div className="text-4xl text-gray-800 font-bold " id="email">Gmail:{email}</div>
      <input type="text" className="border p-2  rounded"placeholder="Enter new username"onChange={(e) => setNewUserName(e.target.value)}/>
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleUpdateUserName}>Update Username </button>
      <div className="text-gray-800 text-3xl font-bold">Balance :{balance}</div>
      <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-right">Stock Name</th>
          <th className="py-2 px-4 border-b text-right">Remaining Quantity</th>
          <th className="py-2 px-4 border-b text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {stockNames.map((name, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b text-center">{name}</td>
            <td className="py-2 px-4 border-b text-right">{stockRemainingQuantity[index]}</td>
            <td className="py-2 px-4 border-b text-right">
              <button className="bg-blue-500 text-white px-4 py-2 rounded ml-auto" onClick={()=>{handleGetDetails(name)}} >
                Get Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  
  );
}
