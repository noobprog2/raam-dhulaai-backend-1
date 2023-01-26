
const express = require("express");

const router = express.Router();



router.get("/ashish" , (req , res) => {
    res.send("Ashish sent from route");
    console.error(err);
})


module.exports = router;


//change

