// import mongoose from "mongoose";
const mongoose = require("mongoose")


 async function connect(){
    try{
            mongoose.connect(process.env.MONGO_URL , {useNewUrlParser:true});
            console.log("CONNECTED TO DB");
    }catch (e){
        console.error(e);
    }
}


module.exports.connect = connect;
// module.exports.dbConnect 



