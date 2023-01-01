const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
const app = require("express");



const uri = "mongodb+srv://raamdhulaai:nepal123@cluster0.9pasa2c.mongodb.net/?retryWrites=true&w=majority";

async function connect(){

    try{
        await mongoose.connect(uri);
        console.log("connected to mongo db");
    }catch (e){
        console.error(e);
    }
    
}

connect();

// app.listen(8000 , ( ) => {
//     console.log("Server started on port 8000");
// });




