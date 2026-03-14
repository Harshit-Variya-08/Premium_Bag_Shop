import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

let isLoggedIn = async(req,resp,next)=>
    {
        if(!req.cookies.loginToken)
            {
                req.flash("error","You need to login first");
                return resp.redirect("/");
            }
        console.log(req.cookies.loginToken);
        let decode = jwt.verify(req.cookies.loginToken,process.env.JWT_KEY);
        let user = await userModel.findOne({email: decode.email}).select("-password");
        console.log(user.email);
        req.user = user;
        next();

    }

    export default isLoggedIn;