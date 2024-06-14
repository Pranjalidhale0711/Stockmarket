import React, { useEffect, useState } from "react";
import { getStockData } from "../Api/auth";
import Card from "../Utilis/Card";

export default function Sell() {
  const [userStockInfo, setUserStockInfo] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const data = await getStockData();
        console.log("selling");
        // console.log(data?.portfolio_user?.portfolio_user);
        setUserStockInfo(data?.portfolio_user?.portfolio_user);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  return (
    <div className="container   mx-auto p-4">
      <h1 className="text-5xl  my-3 flex font-extrabold mb-4 text-[#52057B] justify-center items-center">Sell Stocks</h1>
      <div className="">
        <p className="mb-2 md-3 text-grey-800 font-bold text-3xl">Balance: {userStockInfo.balance}</p>
        {userStockInfo?.portfolio?.map((stock, index) => (
          <div key={index} className="mb-4">
            <Card
              stockName={stock.stockName}
              stockQuantity={stock.stockRemainigQuantity}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
