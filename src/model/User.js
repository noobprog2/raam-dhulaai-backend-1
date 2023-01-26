const mongoose = require('mongoose');
// import mongoose, { mongo } from "mongoose"


const userSchema = new mongoose.Schema({
    name: {
        type: String , 
        required: true,
        
    }, 
    email: {
        type : String ,
        required: true,
        unique: true
    },
    phone: String, 
    password: {
        type: String,
        required :true,
        minlength: 6
    },
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }
})


module.exports = mongoose.model("User" , userSchema)