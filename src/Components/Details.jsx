import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStockData } from "../Api/auth";
import CardDetails from "../Utilis/CardDetails";

function Details() {
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
    <div>
      {userStockInfo?.portfolio
        ?.filter((stock) => stock.stockName === stockName)
        .map((filteredStock) => (
          <div className="mb-4" key={filteredStock.stockName}>
         
            {filteredStock.stockBuyingPrice.map((singleStock,index) => (
            //   console.log(singleStock.stockBuyQuantity);
            //   console.log(singleStock.stockBuyPrice);
            //   console.log(singleStock.stockBuyDate);
              <div key={index} className="mb-4">
               <CardDetails
                  stockName={stockName}
                  stockQuantity={singleStock.stockBuyQuantity}
                  stockBuyPrice={singleStock.stockBuyPrice}
                  stockBuyDate={singleStock.stockBuyDate}
                />
                
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Details;
