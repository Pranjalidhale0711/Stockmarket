import React, { useEffect, useState } from "react";
import { getStockData } from "../Api/auth";
import Card from "../Utilis/Card";

export default function Sell() {
  const [userStockInfo, setUserStockInfo] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const data = await getStockData();
        // console.log("jiijij");
        // console.log(data?.portfolio_user?.portfolio_user);
        setUserStockInfo(data?.portfolio_user?.portfolio_user);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Portfolio</h1>
      <div className="">
        <p className="mb-2">Balance: {userStockInfo.balance}</p>
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
