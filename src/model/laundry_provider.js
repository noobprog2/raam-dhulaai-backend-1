const mongoose = require("mongoose");
const validator = require('validator');


const LaundryProviderSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true , 'laundry name is required']
    }
})