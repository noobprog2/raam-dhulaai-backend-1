const mongoose = require("mongoose");


const ServiceCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A service must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A service name must have less or equal then 40 characters'],
        minlength: [10, 'A service name must have more or equal then 10 characters']
    },
    priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
      },
    title: String ,
    description: {
        type: String, 
        default: null,
    },
    //imageCover: {
       // type: String,
       // required: [true, 'A service must have a cover image']
     // },
    price: {
        type: Number,
        required: [true, 'A service must have a price']
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
      startDates: [Date],
      ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
      },


})

module.exports = mongoose.model("Service" , ServiceCategorySchema);