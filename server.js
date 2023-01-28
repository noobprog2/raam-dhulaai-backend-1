const dotenv = require('dotenv');
const mongoose = require("mongoose");
const app = require('./index');
const connect = require("./config/database")
dotenv.config({path: './.env'});
mongoose.set("strictQuery", false);
const uri = process.env.MONGO_URL;
connect.connect();

const port = process.env.PORT ||9999;
app.listen(port , ( ) => {
    console.log("Server started on port " + port);
});