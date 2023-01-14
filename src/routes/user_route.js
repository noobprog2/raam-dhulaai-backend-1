const express  = require("express");
const router = express.Router();
const User = require("../model/User")



router.get("/" , (req , res) => {
    res.send("get req hit on user");
})

router.post("/" , (req , res) => {
    res.send("post req hit on user");

});

module.exports = router;