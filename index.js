
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require('dotenv');
const app = express();
const connect = require("./config/database")
const CustomErrorHandler = require("./src/middleware/error_handler")

dotenv.config();


const uri = process.env.MONGO_URL;



const route = express.Router();
connect.connect();

const ashishRouter = require("./config/routes");
const userRouter = require("./src/routes/user_route");
const listenToGet = require("./config/server");
const bodyParser = require("body-parser");
const authRouter= require("./src/routes/auth_route");
app.use(bodyParser.json());

//app.get('/ashish' , ashishRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter);
// listenToGet()

app.get("/" , (req , res) => {
    console.log("inside get")
     res.send({
        "name": "Welcome to rajjjam dhulaai",
        "address" : "Imadol , Lalitpur"
     })
})

//app.use(CustomErrorHandler); 



module.exports=app;

