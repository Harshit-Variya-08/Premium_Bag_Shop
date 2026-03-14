import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.js';
import upload from '../config/multer-config.js';
import productModel from '../models/productModel.js';
const router = express.Router();


//Every route have common url "product" in starting after given in this will apply 
router.post("/create",upload.single("image"),async (req,resp)=>
{
    let {name , price , discount , bgColor , panelColor, textColor}=req.body;
    let product = await productModel.create({
        
        image:req.file.buffer,
        name,
        price,
        discount,
        bgColor,
        panelColor,
        textColor

    })
    req.flash("success","Product Created successfully.");
    resp.redirect("/owners/admin");
})
export default router;