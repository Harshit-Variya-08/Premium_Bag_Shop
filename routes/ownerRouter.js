import express from 'express';
const router = express.Router();

//Every route have common url "Owner" in starting after given in this will apply 

router.get("/",(req,resp)=>    // here route will be =  /owner/
{
    resp.send("Working Owner routes ");
})

router.get("/:id",(req,resp)=> // here route will be = /owner/:id 
{
    resp.send("Working owner Route with ID ")
})

export default router;