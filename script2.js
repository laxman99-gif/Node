const express = require("express")
console.log(express)
const httpServer = express();
httpServer.get("/",function(req,res ){
    res.send("Hello there")
    console.log("New request found")
})
httpServer.listen(3000, function(){
    console.log("server listenening on port 3000")
})