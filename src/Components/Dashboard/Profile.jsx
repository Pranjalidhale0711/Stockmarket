import React, { useEffect, useState } from "react";
import { getStockData, getUserDetails } from "../../Api/auth";
import Navbar from "../../Utilis/Navbar/Navbar";
import { CgProfile } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

export default function Profile() {
const [userName, setUserName] = useState("");
 const [balance, setBalance] = useState(null);
  const [userStockInfo, setUserStockInfo] = useState([]);
  const [arraySell, setArraySell] = useState([]);
  const [arrayBuy, setArrayBuy] = useState([]);
  const func = async () => {
    try {
    const res = await getUserDetails();
    setUserName(res.response.userName);
    const response = await getStockData();
      console.log("response",response.portfolio_user?.portfolio_user);
      setUserStockInfo(response?.portfolio_user?.portfolio_user);
      console.log("entered",userStockInfo.portfolio)
      setBalance(response.portfolio_user.portfolio_user.balance);
      const tempStockNames = [];
      const tempStockRemainingQuantity = [];
      response.portfolio_user.portfolio_user.portfolio.forEach((name) => {
        tempStockNames.push(name.stockName);
        tempStockRemainingQuantity.push(name.stockRemainigQuantity);
      });

      console.log("entered",userStockInfo.portfolio)
      const newArraySell = [];
      const newArrayBuy=[];
      if (userStockInfo?.portfolio) {
        userStockInfo?.portfolio.map((filteredStock) => (
            <div key={filteredStock.stockName}>
              {/* console.log(singleStock.stockBuyDate) */}
              {filteredStock.stockBuyingPrice.forEach((singleStock) => {
                newArrayBuy.push({
                  stockName: filteredStock.stockName,
                  Quantity: singleStock.stockBuyQuantity,
                  Date: new Date(singleStock.stockBuyDate),
                  Price:singleStock.stockBuyPrice,
                  Type: "Buy",
                });
              })}
              {filteredStock.stockSell.forEach((singleStock) => {
                newArraySell.push({
                  stockName: filteredStock.stockName,
                  Quantity: singleStock.stockSellQuantity,
                  Date: new Date(singleStock.stockSellDate.replace(" ", "T")),
                  Price:singleStock.stockSellPrice,
                  Type: "Sell",
                });
              })}
            </div>
          ));
      }
      newArraySell.sort((a, b) => new Date(a.Date) - new Date(b.Date));
      newArrayBuy.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    newArraySell.reverse();
      newArrayBuy.reverse();
      setArraySell(newArraySell);
      setArrayBuy(newArrayBuy);
    } catch (e) {
      console.log(e);
    }
 
  };

  useEffect(() => {
   func();

  }, [arraySell,arrayBuy]);




  return (
    <>
      <Navbar />
      <section>
        <div
          className="row text-[#111a6f] font-extrabold text-5xl  flex items-center justify-center"
          style={{ height: "10vh", marginLeft: "0px" }}
        >
          Your Profile
        </div>
        <div className="row" style={{ minHeight: "20vh", marginLeft: "0px" }}>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="box text-2xl flex items-center justify-center "
              style={{ backgroundColor: "#cfb1ee", height: "12vh", width: "80%", border: "2px solid #2a0052" }} >
              <div
                className="flex items-center  justify-center" style={{ width: "50%", backgroundColor: "transparent" }} >
                <CgProfile
                  style={{ backgroundColor: "transparent", fontSize: "4rem" }}   />
              </div>
              <div className="flex flex-col" style={{width:"50%",backgroundColor: "#cfb1ee"}}>
              <div className="font-bold" style={{backgroundColor: "#cfb1ee"}}>Username:</div>
              <div style={{backgroundColor: "#cfb1ee"}}>{userName}</div>

              </div>
            </div>
          </div>

          <div
            className="col-md-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              className="box text-2xl flex items-center justify-center"
              style={{ backgroundColor: "#cfb1ee", height: "12vh", width: "80%" , border: "2px solid #2a0052"}}
            >
              <div
                className="flex items-center justify-center" style={{ width: "50%", backgroundColor: "transparent" }} >
                <MdAttachMoney
                  style={{ backgroundColor: "transparent", fontSize: "4rem" }}   />
              </div>
              <div className="flex flex-col" style={{width:"50%",backgroundColor: "#cfb1ee"}}>
              <div className="font-bold" style={{backgroundColor: "#cfb1ee"}}>Balance:</div>
              <div style={{backgroundColor: "#cfb1ee"}}>{balance==null?0:balance.toFixed(2)}</div>

              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              className="box text-2xl flex items-center justify-center"
              style={{ backgroundColor: "#cfb1ee", height: "12vh", width: "80%", border: "2px solid #2a0052" }}
            >
                <div
                className="flex items-center justify-center" style={{ width: "50%", backgroundColor: "transparent" }} >
                <GiReceiveMoney
                  style={{ backgroundColor: "transparent", fontSize: "4rem" }}   />
              </div>
              <div className="flex flex-col" style={{width:"50%",backgroundColor: "#cfb1ee"}}>
            

              {balance > 1000 ? (
                <span className="font-bold " style={{backgroundColor: "#cfb1ee"}}>Profit:</span>
              ) : (
                <span className="font-bold"style={{backgroundColor: "#cfb1ee"}}>Loss:</span>
              )}
              {<span style={{backgroundColor: "#cfb1ee"}}>{Math.abs(1000 - balance).toFixed(2)}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row "  style={{ minHeight: "50vh" }} >
          <div className="col-md-6 ">
    
        <table className="  bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Sr.No</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Stock Name</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Date</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Quantity</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Price</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Type</th>
          </tr>
        </thead>
        <tbody>
          {arrayBuy.map((item, index) => (
            <tr 
              key={index} 
              className="border-b"
            >
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4 text-center">{item.stockName}</td>
              <td className="py-2 px-4 text-center">{new Date(item.Date).toLocaleDateString()}</td>
              <td className="py-2 px-4 text-center">{item.Quantity}</td>
              <td className="py-2 px-4 text-center">{item.Price}</td>
              <td className="py-2 px-4 text-center">
                <span className={`px-2 py-1 text-center rounded ${item.Type === 'Sell' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                  {item.Type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
       <div className="col-md-6" >

    
      <table className=" bg-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Sr.No</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Stock Name</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Date</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Quantity</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Price</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-700">Type</th>
          </tr>
        </thead>
        <tbody>
          {arraySell.map((item, index) => (
            <tr 
              key={index} 
              className="border-b"
            >
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4 text-center">{item.stockName}</td>
              <td className="py-2 px-4 text-center">{new Date(item.Date).toLocaleDateString()}</td>
              <td className="py-2 px-4 text-center">{item.Quantity}</td>
              <td className="py-2 px-4 text-center">{item.Price}</td>
              <td className="py-2 px-4 text-center">
                <span className={`px-2 py-1 text-center rounded ${item.Type === 'Sell' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                  {item.Type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
          </div>
        </div>
      </section>
    </>
  );
}
