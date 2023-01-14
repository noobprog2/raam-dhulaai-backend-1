const mongoose = require('mongoose');
// import mongoose, { mongo } from "mongoose"


const userSchema = new mongoose.Schema({
    name: {
        type: String , 
        required: true,
        
    }, 
    email: {
        type : String ,
        required: true
    },
    phone: String, 
    password: {
        type: String,
        required :true,
    },
})


module.exports = mongoose.model("User" , userSchema)