import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.js';
const router = express.Router();

router.get("/",(req,resp)=>
{
    let error = req.flash("error");
    resp.render("index",{error});
})
router.get("/shop",isLoggedIn,(req,resp)=>
{
    resp.render("shop");
})

export default router;