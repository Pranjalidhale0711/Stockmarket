import express from 'express'
import { signIn,signUp} from '../controllers/auth_controllers.js'
import {fetchUser}  from '../controllers/auth_controllers.js';
import { checkAuthorization } from '../middleware/ValidateUser.js';


const router=express.Router();
router.post("/signin",signIn);
router.post("/signup",signUp);
router.post("/fetchUser",checkAuthorization,fetchUser);




export default router;