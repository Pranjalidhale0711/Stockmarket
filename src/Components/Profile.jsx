import React, { useEffect, useState } from "react";
import { getStockData, getUserDetails, updateProfile } from '../Api/auth';
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(null);
  const [newUserName, setNewUserName] = useState('');
  const [stockNames, setStockNames] = useState([]);
  const [stockRemainingQuantity, setStockRemainingQuantity] = useState([]);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const res = await getUserDetails();
        setUserName(res.response.userName);
        setEmail(res.response.email);
      } catch (e) {
        console.log(e);
      }
      try {
        const response = await getStockData();
        setBalance(response.portfolio_user.portfolio_user.balance);
        const tempStockNames = [];
        const tempStockRemainingQuantity = [];
        response.portfolio_user.portfolio_user.portfolio.forEach((name) => {
          tempStockNames.push(name.stockName);
          tempStockRemainingQuantity.push(name.stockRemainigQuantity);
        });
        setStockNames(tempStockNames);
        setStockRemainingQuantity(tempStockRemainingQuantity);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  const handleUpdateUserName = async () => {
    try {
      const res = await updateProfile(newUserName);
      console.log(res.response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetDetails = (stockName) => {
    navigate(`/details/${stockName}`);
  };

  return (
    <div className="flex flex-col  items-center  min-h-screen p-4 text-[#52057B]">
      <h1 className="text-4xl mt-6 text-5xl font-extrabold mb-4">Your Profile</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="text-3xl bg-white text-start font-bold mb-4" id="userName">
          Username: {userName}
        </div>
        <div className="text-3xl bg-white text-start font-bold mb-4" id="email">
          Gmail: {email}
        </div>
        <div className="flex bg-white flex-col ">
          <input
            type="text"
            className="border p-2 bg-white rounded max-w-sm mb-4"
            placeholder="Enter new username"
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded max-w-sm hover:bg-blue-700 mb-4"
            onClick={handleUpdateUserName}
          >
            Update Username
          </button>
        </div>
        <div className="text-2xl bg-white text-center font-bold mb-4">
          Balance: {balance}
        </div>
        <table className="min-w-full bg-white text-black rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-white border-b text-center text-sm md:text-base">Stock Name</th>
              <th className="py-2 px-4 bg-white border-b text-center text-sm md:text-base">Remaining Quantity</th>
              <th className="py-2 px-4 bg-white border-b text-center text-sm md:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockNames.map((name, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center text-sm md:text-base">{name}</td>
                <td className="py-2 px-4 border-b text-center text-sm md:text-base">{stockRemainingQuantity[index]}</td>
                <td className="py-2 px-4 border-b text-center text-sm md:text-base">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => { handleGetDetails(name); }}
                  >
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
