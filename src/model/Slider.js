const mongoose = require("mongoose");



const SliderModelSchema = mongoose.Schema({
    image: {
        type: String, 
        required: true,
    },
    title: String,

});