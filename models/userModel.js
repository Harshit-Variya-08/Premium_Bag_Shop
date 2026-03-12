import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    cart : {
            type: Array , 
            default : []        
    },
    isAdmin : Boolean,
    orders : {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String
})
const userModel = mongoose.model("user",userSchema,"user");

export default userModel;