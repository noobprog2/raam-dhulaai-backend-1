const mongoose = require("mongoose");



const SliderSchema = mongoose.Schema({
    id,
    image: {
        type: String, 
        required: true,
    },
    discount: {
        type: String, 
        default: null,
    },
    title: String,

});


module.exports = mongoose.model("Slide" , SliderSchema);