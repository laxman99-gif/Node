const express = require("express")
console.log(express)
const routes = require("./routes");
const httpServer = express();
httpServer.use(routes)

// httpServer.get("/",function(req,res ){
//     res.send("Hello there i am laxman")
//     console.log("New request found")
    
// })
// httpServer.post("/",function(req,res ){
//     res.send("NEw post method")
//     console.log("New request found")
    
// })
httpServer.listen(3000, function(){
    console.log("server listenening on port 3000")
})