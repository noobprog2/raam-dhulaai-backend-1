
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const CustomErrorHandler = require("./src/middleware/error_handler")


const userRouter = require("./src/routes/user_route");

const bodyParser = require("body-parser");
const authRouter= require("./src/routes/auth_route"); 
app.use(bodyParser.json());

app.use('/user', userRouter);







module.exports=app;

//gauyrasdasasd