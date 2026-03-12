import express from 'express';
const router = express.Router();

//Every route have common url "users" in starting after given in this will apply 

router.get("/",(req,resp)=>    // here route will be =  /users/
{
    resp.send("Working User Routes ");
})

router.get("/:id",(req,resp)=> // here route will be = /users/:id 
{
    resp.send("Working User Route with ID ")
})

export default router;