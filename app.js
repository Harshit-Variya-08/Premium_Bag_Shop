import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import flash from 'connect-flash';
import session from "express-session";

// Other In-built middleware applied
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave:false,
  saveUninitialized: false,
  secret:"nosecret"
  // secret: process.env.EXPRESS_SESSION_SECRET,
}));
app.use(flash());
app.set("view engine", "ejs");
  
// Connection with Mongodb , in it dotenv also initiailzed first 
import db from "./config/mongoose-connection.js";

// Routers  1.User 2.Owner 3.Product ...
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRouter.js";
import productRouter from "./routes/productRouter.js";
import indexRouter from './routes/index.js';
app.use("/users", userRouter);
app.use("/owners", ownerRouter);
app.use("/product", productRouter);
app.use("/",indexRouter);



app.listen(3200);
