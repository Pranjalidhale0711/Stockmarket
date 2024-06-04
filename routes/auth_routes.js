import express from 'express'
import { signin,signup} from '../controllers/auth_controllers.js'
import {fetchUser}  from '../controllers/auth_controllers.js';
import { checkAuthorization } from '../middleware/ValidateUser.js';


const router=express.Router();
router.post("/signin",signin);
router.post("/signup",signup);
router.post("/fetchUser",checkAuthorization,fetchUser);




export default router;