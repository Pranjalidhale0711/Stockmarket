import React, { useEffect, useState } from "react";
import Details from "./Details";
import { useParams } from "react-router-dom";
import { getStockData } from "../Api/auth";

import CardDetailsSell from "../Utilis/CardDetailsSell";
import CardDetailsBuy from "../Utilis/CardDetailsBuy";

function Profile() {
  const { stockName } = useParams();
  const [userStockInfo, setUserStockInfo] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const data = await getStockData();
        console.log("jiijij");
        console.log(data?.portfolio_user?.portfolio_user);
        setUserStockInfo(data?.portfolio_user?.portfolio_user);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);
  return (
    <div className="flex">
   {/* {console.log(userStockInfo?.portfolio)} */}
      {userStockInfo?.portfolio&&
      userStockInfo?.portfolio
       .map((filteredStock) => (
          <div className="mb-4" key={filteredStock.stockName}>
            {filteredStock.stockBuyingPrice.map((singleStock, index) => (
              // console.log(singleStock.stockBuyQuantity)
              //   console.log(singleStock.stockBuyPrice);
              //   console.log(singleStock.stockBuyDate);
              <div  key={index} className="mb-4">
                <CardDetailsBuy
                  stockName={stockName}
                  stockQuantity={singleStock.stockBuyQuantity}
                  stockBuyPrice={singleStock.stockBuyPrice}
                  stockBuyDate={singleStock.stockBuyDate}
                  />
              </div>
            ))}
            {filteredStock.stockSell.map((singleStock, index) => (
              //   console.log(singleStock.stockBuyQuantity);
              //   console.log(singleStock.stockBuyPrice);
              //   console.log(singleStock.stockBuyDate);
              <div key={index} className="mb-4">
                <CardDetailsSell
                  stockName={stockName}
                  stockSellQuantity={singleStock.stockSellQuantity}
                  stockSellPrice={singleStock.stockSellPrice}
                  stockSellDate={singleStock.stockSellDate}
                  />
                 
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Profile;
