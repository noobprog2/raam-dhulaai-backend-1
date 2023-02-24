// import mongoose from "mongoose";
const mongoose = require("mongoose")


 async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
       
        }); 
        console.log('MongoDB connected');
      } catch (error) {
        console.error('MongoDB connection error:');
        console.error(error.message);
        // Exit process with failure
        process.exit(1);
      }
    };


module.exports.connect = connect;
// module.exports.dbConnect 

