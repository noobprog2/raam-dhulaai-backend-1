
const express = require("express")
const app = express()



function listenToGet(){
    app.get("/" , (req , res) => {
        console.log("inside get")
         res.send("Get method called")
    })
}


module.exports = listenToGet;



