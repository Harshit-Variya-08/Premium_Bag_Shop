import express from 'express';
const router = express.Router();
import {registerUser,loginUser} from '../controllers/authController.js'

//Every route have common url "users" in starting after given in this will apply 

router.get("/",(req,resp)=>    // here route will be =  /users/
{
    resp.send("Working User Routes ");
})

router.post("/register",registerUser)
router.post("/login",loginUser);

export default router;