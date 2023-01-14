const mongoose = require("mongoose");


const ServiceCategorySchema = mongoose.Schema({
    name: String,
    image: {
        type: String , 
    },
    discountPercentage:{
        type: String , 
        default: null,
    },
    title: String ,
    description: {
        type: String, 
        default: null,
    },
    price:{

        type: String,
        default: null,
    }
    


})

module.exports = mongoose.model("ServiceCategory" , ServiceCategorySchema);