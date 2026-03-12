import dotenv from "dotenv"; //
dotenv.config(); // it will loads .env variables...

import mongoose from "mongoose";
// import dbgr from 'debug';
// const debug = dbgr("development");  // Not working in this pc properly
// import config from 'config';

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("Mongodb Connecteeed...");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
