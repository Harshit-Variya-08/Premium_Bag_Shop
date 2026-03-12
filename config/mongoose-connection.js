import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/scatch")
  .then((res) => {
    console.log("Mongodb Connecteeed...");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
