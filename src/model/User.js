// const mongoose = require('mongoose');
import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: {
        type: String , 
        required: true,
        
    }, 
    email: {
        type : String ,
        required: true
    },
    phone: Stirng, 
    password: {
        type: String,
        reuired :true,
    },
})