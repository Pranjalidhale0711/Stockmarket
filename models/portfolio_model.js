import mongoose, { Mongoose, Schema } from "mongoose";

const portfolioSchema = new mongoose.Schema({
    userId : {
        type:Schema.ObjectId,
        ref:"User",
    },
    portfolio:[{
        stockName:{
            type:String,
        },
        stockBuyingPrice:{
            type:String,
        },
        stockSellPrice:{
            type:String
        },
        stockPurchaseDate:{
            type:String
        },
        stockSellDate:{
            type:String,
        }
    }]
    
})
const Portfolio = mongoose.model('Portfolio', portfolioSchema);
  
export default Portfolio;