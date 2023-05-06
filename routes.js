const express = require("express");
const router = express.Router();
router.get("/hi",function(req,res ){
    console.log(req.query)
    if(req.query.name != undefined){
        res.send("Hello "+ req.query.name)

    }else{
        res.send("hello")
    }
    
    //Getting jskon data from request body 
    
    
})
router.post("/bye",function(req,res){
    console.log(req.body.height)
    res.send("Hey myan")
})
router.get("/",function(req,res ){
    res.send("BYe BYe")
    console.log("New request found")
    
})
router.post("/",function(req,res ){
    res.send("NEw post method")
    console.log("New request found")
    
})
module.exports = router;