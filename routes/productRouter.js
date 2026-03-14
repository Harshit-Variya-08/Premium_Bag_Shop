import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.js';
const router = express.Router();

//Every route have common url "product" in starting after given in this will apply 

router.get("/",isLoggedIn,(req,resp)=>    // here route will be =  /product/
{
    resp.send("Product  Routes ");
})

router.get("/:id",(req,resp)=> // here route will be = /product/:id 
{
    resp.send("Product Route with ID ")
})

export default router;