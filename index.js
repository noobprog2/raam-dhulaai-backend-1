const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");

const app = express();



const uri = "mongodb+srv://raamdhulaai:nepal123@cluster0.9pasa2c.mongodb.net/?retryWrites=true&w=majority";

const PORT = 3000
async function connect(){

    try{
        await mongoose.connect(uri);
        console.log("connected to mongo db");
    }catch (e){
        console.error(e);
    }
    
}

connect();
app.get("/" , (req , res) => {
    console.log("inside get")
     res.send("Ashish")
})

app.listen(PORT , ( ) => {
    console.log("Server started on port $PORT");
});





