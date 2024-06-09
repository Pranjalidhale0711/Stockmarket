import express from 'express'
import {Sell,Buy, findPortfolio} from '../controllers/trade_controllers.js'
import { checkAuthorization } from '../middleware/ValidateUser.js';

const router=express.Router();
router.post("/buy",checkAuthorization,Buy);
router.post("/findPortfolio",checkAuthorization,findPortfolio);
router.post("/sell",checkAuthorization,Sell);

export default router;