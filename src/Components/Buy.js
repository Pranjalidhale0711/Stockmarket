import React, { useState } from "react";
import Sidebar_responsive from "../Utilis/Sidebar_responsive";
import { buyStock, getStock } from "../Api/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Buy() {
  const [stockName, setStockName] = useState("");
  const [stockInfo, setStockInfo] = useState(null);
  const [stockQuantity, setStockQuantity] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await getStock(stockName);
      setStockInfo(response.stockInfo[0]);
    } catch (e) {
      console.log(e);
    }
  };
  const handleBuyStock = async () => {
    try {
      const res = await buyStock(stockName, stockInfo.low, stockQuantity);
      toast.success(res.message);
      console.log(res);
    } catch (e) {
      toast.error("Stock could not be Purchased");
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col w-full items-center p-4">
      {/* <Sidebar_responsive /> */}
      <div className="w-full max-w-md flex-grow p-4">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            className="border-2 border-lightpurple bg-purple-100 p-2.5 rounded-md mb-2 sm:mb-0 sm:mr-2 w-full sm:w-48"
            placeholder="Enter Stock Name"
            onChange={(e) => setStockName(e.target.value)}
          />
          <button
            className="p-2.5 bg-[#7743DB] text-white rounded-lg hover:bg-[#C3ACD0] hover:text-black mb-2 sm:mb-0 w-full sm:w-48"
            onClick={handleSubmit}
          >
            Get Details
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            className="border-2 my-2 border-lightpurple mr-2 bg-purple-100 p-2.5 rounded-md w-full sm:w-48"
            placeholder="Enter Quantity"
            onChange={(e) => setStockQuantity(e.target.value)}
          />
          <button
            onClick={handleBuyStock}
            className="p-2.5 bg-green-500  text-white rounded w-full sm:w-48"
          >
            Buy
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          {stockInfo && (
            <div className="text-black flex flex-col bg-[#7743DB] gap-5 p-2 rounded-md w-full sm:w-48">
              <p className="text-lg font-bold">Open: {stockInfo.open}</p>
              <p className="text-lg font-bold">Close: {stockInfo.close}</p>
              <p className="text-lg font-bold">Low: {stockInfo.low}</p>
              <p className="text-lg font-bold">High: {stockInfo.high}</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
  
}

export default Buy;
