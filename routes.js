const express = require("express");
const router = express.Router();
router.get("/",function(req,res ){
    res.send("Hello there i am laxman")
    console.log("New request found")
    
})
router.post("/",function(req,res ){
    res.send("NEw post method")
    console.log("New request found")
    
})
module.exports = router;