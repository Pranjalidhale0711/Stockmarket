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
      const res =await buyStock(stockName,stockInfo.low,stockQuantity);
      toast.success(res.message);
      console.log(res);
    } catch (e) {
      toast.error("Stock could not be Purchased");
    console.log(e);
    }
  };

  return (
    <div className="">
      {/* <Sidebar_responsive /> */}
      <div className="flex-grow p-4">
        <div className="flex justify-center items-center">
          <input
            className="border-2 border-lightpurple bg-purple-100 p-2.5 rounded-md"
            placeholder="Enter Stock Name"
            onChange={(e) => setStockName(e.target.value)}
          />
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Get Details
          </button>
          <input
            className="border-2 border-lightpurple bg-purple-100 p-2.5 rounded-md"
            placeholder="Enter Quantity"
            onChange={(e) => setStockQuantity(e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center items-center mt-4">
          {stockInfo && (
            <div className="text-black flex-col gap-4 bg-blue-100 p-4 rounded-md">
              <p>Open: {stockInfo.open}</p>
              <p>Close: {stockInfo.close}</p>
              <p>Low: {stockInfo.low}</p>
              <p>High: {stockInfo.high}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleBuyStock}
            className="p-2 bg-green-500 text-white rounded"
          >
            Buy
          </button>
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
