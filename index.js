
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require('dotenv');
const app = express();


dotenv.config();

const PORT = process.env.PORT
const uri = process.env.MONGO_URL;

async function connect(){

    try{

        await mongoose.connect(uri , );
        console.log("connected to mongo db");
    }catch (e){
        console.error(e);
    }
    
}

const route = express.Router();
// connect();

const ashishRouter = require("./config/routes");
const listenToGet = require("./config/server");

app.get('/ashish' , ashishRouter)
// listenToGet()

app.get("/" , (req , res) => {
    console.log("inside get")
     res.send({
        "name": "Welcome to raam dhulaai",
        "address" : "Imadol , Lalitpur"
     })
})



app.listen(PORT , ( ) => {
    console.log("Server started on port " + PORT);
});





