import express from 'express'
import Portfolio from '../models/portfolio_model.js'
import User from '../models/user_model.js'

export const Buy= async(req,res)=>{
    const {portfolio}=req.body;
    const user=User.find(req.decoded_token);
    console.log(req.decoded_token);
    const userId=req.decoded_token.id;
    // const portfolio_user=Portfolio.findById({userId});
    // console.log(portfolio_user.stockName);}
    const newPortfolio= new Portfolio({userId,portfolio})
    try {
        await  newPortfolio.save();
        res.status(201).json({ message: "Portfolio created successfully" });
      } catch (e) {
        res.status(500).json({ message: "Internal server error" });
      }
}
export const findPortfolio= async(req,res)=>{
    const {portfolio}=req.body;
    const user=User.find(req.decoded_token);
    console.log(req.decoded_token);
    const userId=req.decoded_token.id;
    // console.log(portfolio_user.stockName);}
    // const newPortfolio= new Portfolio({userId,portfolio})
    try {
        
        const portfolio_user=Portfolio.findById({userId});
        console.log(portfolio_user.stockName);
        res.status(201).json({ message: "Portfolio created successfully" });
      } catch (e) {
        res.status(500).json({ message: "Internal server error" });
      }
}

export const Sell=()=>{
    
}
