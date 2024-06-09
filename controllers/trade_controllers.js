import express from "express";
import Portfolio from "../models/portfolio_model.js";
import User from "../models/user_model.js";
import axios from "axios";

export const Buy = async (req, res) => {
  const { stockName, stockBuyingPrice, stockBuyQuantity } = req.body;
  const user = User.find(req.decoded_token);
  console.log(req.decoded_token);
  const userId = req.decoded_token.id;
  try {
    const portfolio_user =await  Portfolio.findOne({userId:userId });
    // console.log(portfolio_user);
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const currentDate = `${year}-${month}-${day} ${hours}:${minutes}:00`;
    console.log("current date is", currentDate);
    const stock = portfolio_user.portfolio.find(
      (stock) => stock.stockName === stockName
    );
    if (stock == null) {
      console.log("i am here");
      portfolio_user.portfolio.push({
        stockName:stockName,
        stockBuyingPrice: [{ stockBuyQuantity:stockBuyQuantity, stockBuyPrice:stockBuyingPrice, currentDate:currentDate }],
        stockSell: [],
        stockRemainigQuantity: stockBuyQuantity,
      });
     
      await portfolio_user.save();
    }
    else{
      console.log("hi inside else")
      stock.stockBuyingPrice.push({stockBuyQuantity:stockBuyQuantity, stockBuyPrice:stockBuyingPrice, currentDate:currentDate });
      stock.stockRemainigQuantity += stockBuyQuantity;
      await portfolio_user.save();
    }
    return res.status(200).json({ message: "Portfolio created successfully", portfolio:portfolio_user });
    
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Portfolio not found for the given userId" });
    
  }

  

  // if (portfolio_user) {

  // await portfolio_user.save();
  // }

  // try {
  // } catch (e) {
  //   res.status(500).json({ message: "Internal server error" });
  // }
};
export const findPortfolio = async (req, res) => {
  const { portfolio } = req.body;
  const user = User.find(req.decoded_token);
  console.log(req.decoded_token);
  const userId = req.decoded_token.id;
  // console.log(portfolio_user.stockName);}
  // const newPortfolio= new Portfolio({userId,portfolio})
  try {
    const portfolio_user = Portfolio.findById({ userId });
    console.log(portfolio_user.stockName);
    res.status(201).json({ message: "Portfolio created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Sell = () => {
  
};

// export const Buy = async (req, res) => {
//   const stock_name = req.headers["stockname"];
//   const dateObj = new Date();
//   dateObj.setDate(dateObj.getDate() - 1);

//   const year = dateObj.getFullYear();
//   const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
//   const day = dateObj.getDate().toString().padStart(2, "0");
//   let hours = dateObj.getHours().toString().padStart(2, "0");
//   let minutes = dateObj.getMinutes().toString().padStart(2, "0");

//   const formattedDate = `${year}-${month}-${day}`;
//   const dateObj2 = new Date();
//   dateObj2.setDate(dateObj2.getDate() - 2);
//   const year2 = dateObj2.getFullYear();
//   const month2 = (dateObj2.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
//   const day2 = dateObj2.getDate().toString().padStart(2, "0");

//   const formattedDate2 = `${year2}-${month2}-${day2}`;

//   let currentDate = `${year}-${month}-${day} 13:30:00`;
//   // console.log(formattedDate2)

//   try {
//     const response = await axios.get(
//       `https://financialmodelingprep.com/api/v3/historical-chart/1min/${stock_name}?from=${formattedDate2}&to=${formattedDate}&apikey=ucpqV91anbJoHZCiFMI7R3aQIB1kCJpj`
//     );
//     const realtimedata = response.data.filter(
//       (item) => item.date == currentDate
//     );
//     // console.log(realtimedata);
//     res
//       .status(201)
//       .json({ message: "Data fetched successfully", realtimedata });
//   } catch (e) {
//     // console.log("Stock market is down at this moment");
//     res.status(500).json({ message: "Stock market is closed currently" });
//   }
// };
