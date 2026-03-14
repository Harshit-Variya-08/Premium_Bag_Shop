import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';


export let registerUser = async (req,resp)=> // here route will be = /users/:id 
{
    let {fullname, email, password, } = req.body;

    let findUser =await userModel.findOne({email});
    if(findUser) return resp.status(401).send("Account Already exists");

    bcrypt.genSalt(10,(err,salt)=>
    {
        console.log(salt);
        bcrypt.hash(password,salt,async(err,hash)=>
        {
            if(err)
                {
                return resp.send(err);
                }
            
            let createdUser = await userModel.create({
                fullname,
                email,
                password:hash
            });
            console.log(process.env.JWT_KEY);
           let token =  generateToken(createdUser);
            resp.cookie("registerToken",token);
                resp.send("User created Successfullly");
        })
    });
    
    // resp.send(createdUser);
}

//===================================================================
export let loginUser = async(req,resp)=>
    {
        let {email,password} = req.body;
        let user = await userModel.findOne({email});
        if(!user) return resp.send("Email Or password incorrect");

        bcrypt.compare(password,user.password,(err,result)=>
        {
            if(result)
                {

                    let token = generateToken(user);
                    resp.cookie("loginToken",token);
                    resp.send("You can login");
                }
                else
                {
                    return resp.send("Password is incorrect");
                }

        })
    }

    //======================================================
    export let logout = (req,resp)=>
        {
            resp.clearCookie("loginToken");
            resp.clearCookie("registerToken");
            req.flash("error","Log out Completeed")
            resp.redirect("/");
            // resp.send("logout completed");
        }
