
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require('dotenv');
const app = express();
const dbConnect = require("./config/database")

dotenv.config();

const port = process.env.PORT ;
const uri = process.env.MONGO_URL;



const route = express.Router();
dbConnect.connect();

const ashishRouter = require("./config/routes");
const listenToGet = require("./config/server");

app.get('/ashish' , ashishRouter)
// listenToGet()

app.get("/" , (req , res) => {
    console.log("inside get")
     res.send({
        "name": "Welcome to rajjjam dhulaai",
        "address" : "Imadol , Lalitpur"
     })
})

 

app.listen(port , ( ) => {
    console.log("Server started on port " + port);
});





