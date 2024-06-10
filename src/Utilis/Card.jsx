import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {handleSell} from '../Api/auth'

function Card({ stockName, stockQuantity }) {
  const navigate = useNavigate();
  const [sellQuantity, setSellQuantity] = useState(0);
  const [showSellInput, setShowSellInput] = useState(false);
  const handleGetdetails = () => {
    navigate(`/details/${stockName}`);
  };
  const handleSellStocks = () => {
    // Implement the sell functionality here
    console.log(`Selling ${stockQuantity} stocks of ${stockName}`);
    // Reset the sell quantity after selling
    if (showSellInput == false) setShowSellInput(true);
    else setShowSellInput(false);
    //  console.log()
  };

  const handleConfirmSell = async() => {
     console.log(sellQuantity)
     if(sellQuantity>stockQuantity)
      {
         toast.error("Dont have enough Stocks to Sell")
      }
      try{
        const response= await handleSell(stockName,stockQuantity);
        if (response?.error == null) {
           toast.success("Portfolio Updated Successfully");
        } else {
          toast.error(response.error);
        }
      }catch(e)
      {
        toast.error("Something Error Occured");
      }
   
  };
  return (
    <div className="max-w-sm p-6 sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          StockName: {stockName}
        </h5>
      </div>
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          StockQuantity: {stockQuantity}
        </h5>
      </div>
      <button
        onClick={() => handleGetdetails()}
        className="inline-flex items-center ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Get Details{" "}
      </button>
      <button
        onClick={handleSellStocks}
        className="inline-flex items-center ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {" "}
        Sell Stocks
      </button>
      {showSellInput && (
        <div>
          <input
            type="number"
            placeholder="Enter quantity to sell"
            onChange={(e)=>{
              setSellQuantity(e.target.value)
            }}
            className="border border-gray-300 rounded-md p-2 mb-2"
          />
          <button
            onClick={handleConfirmSell}
            className="bg-green-500 text-white px-4 py-2 rounded-md "
          >
            Confirm Sell
          </button>
        </div>
      )}
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

export default Card;
