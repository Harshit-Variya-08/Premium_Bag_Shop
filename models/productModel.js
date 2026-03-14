import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image : Buffer,
    name : String,
    price : String,
    discount : {
        type : Number,
        default :0
    },
    bgColor : String,
    panelColor : String,
    textColor : String

})

const productModel = mongoose.model("product",productSchema);
export default productModel;
