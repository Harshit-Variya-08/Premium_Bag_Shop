import express from 'express';
const router = express.Router();

//Every route have common url "Owner" in starting after given in this will apply 

import ownerModel from '../models/ownerModel.js';

if(process.env.NODE_ENV == "development")
    {
        router.post("/create",async (req,resp)=>    // here route will be =  /owner/
        {
            let owner= await ownerModel.find();
            if(owner.length > 0) return resp.status(503).send("You Don't have permission to create new owner");
                
            // let {name ,email ,password} = req.body;
            let createdOwner = await ownerModel.create({
                fullname: req.body.name,
                email: req.body.email,
                password: req.body.password
                
            })

        //    resp.send("Can create owner in development env.. ");
            resp.send(createdOwner);
        })


    }

export default router;