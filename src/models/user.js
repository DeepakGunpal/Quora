import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    creditScore:{
        type:Number,
        required:true
    },
},{timestamps:true,timeseries:true});

export default mongoose.model('user', userSchema);