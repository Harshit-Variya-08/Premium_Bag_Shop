import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.js';
import productModel from '../models/productModel.js';
import userModel from '../models/userModel.js';
const router = express.Router();

router.get("/",(req,resp)=>
{
    let error = req.flash("error");
    resp.render("index",{error,login:false  });
})

router.get("/addtocart/:id",isLoggedIn,async(req,resp)=>
{
    // console.log(req.user);
    let productId = req.params.id;
    let user = await userModel.findOne({email:req.user.email});
    user.cart.push(productId);
    await user.save();
    req.flash("success","Added to cart");
    resp.redirect("/shop");
})
router.get("/cart",isLoggedIn, async (req,resp)=>
{
    let user = await userModel.findOne({email:req.user.email}).populate("cart");
    let Finalprice=[];
    user.cart.map((product)=>
    {
        let singlePrice = Number(product.price) + 20 -Number(product.discount);
        Finalprice.push(singlePrice);
    })
    console.log(Finalprice);
    resp.render("cart",{login:true,user ,Finalprice})
})
router.get("/shop",isLoggedIn, async (req,resp)=>
{
    let data = await productModel.find();
    let success=req.flash("success");
    resp.render("shop",{products:data , login:true , success});
})

export default router;