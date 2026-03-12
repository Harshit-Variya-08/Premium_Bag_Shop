import express from 'express';
const app = express();
import db from './config/mongoose-connection.js';
import cookieParser from 'cookie-parser';
import path from 'path';

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.set("view engine","ejs");


// Routers  start...
    import userRouter from './routes/userRoutes.js'
    import ownerRouter from './routes/ownerRouter.js'
    import productRouter from './routes/productRouter.js'
    app.use("/user",userRouter);
    app.use("/owner",ownerRouter);
    app.use("/product",productRouter);
// Routers End...


app.get("/",(req,resp)=>
{
    resp.send("HOme page");
})
app.listen(3200);