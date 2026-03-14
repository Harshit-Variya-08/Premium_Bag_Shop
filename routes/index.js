import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.js';
import productModel from '../models/productModel.js';
const router = express.Router();

router.get("/",(req,resp)=>
{
    let error = req.flash("error");
    resp.render("index",{error});
})
router.get("/shop",isLoggedIn, async (req,resp)=>
{
    let data = await productModel.find();
    resp.render("shop",{products:data});
})

export default router;