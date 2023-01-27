const mongoose = require('mongoose');
const validator = require('validator');
// import mongoose, { mongo } from "mongoose"

//practicing 
const userSchema = new mongoose.Schema({
    name: {
        type: String , 
        required: [true,'Please enter your name!']
        
    }, 
    email: {
        type : String ,
        required: [true,'Please enter your email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,'Please provide a valid email']
    },
    phone: String, 
    password: {
        type: String,
        required :[true,'Please enter your password!'],
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