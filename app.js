import express from "express";
const app = express();
import cookieParser from "cookie-parser";

// Other In-built middleware applied
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

// Connection with Mongodb , in it dotenv also initiailzed first 
import db from "./config/mongoose-connection.js";

// Routers  1.User 2.Owner 3.Product ...
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRouter.js";
import productRouter from "./routes/productRouter.js";
app.use("/user", userRouter);
app.use("/owner", ownerRouter);
app.use("/product", productRouter);




app.get("/", (req, resp) => {
  resp.render("index");
});
app.listen(3200);
