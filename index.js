const express = require("express")
console.log(express)
const mongoose = require("mongoose")

const routes = require("./index");
const httpServer = express();
httpServer.use(express.json());//middleware to show json content
httpServer.use(routes)

// httpServer.get("/",function(req,res ){
//     res.send("Hello there i am laxman")
//     console.log("New request found")
    
// })
// httpServer.post("/",function(req,res ){
//     res.send("NEw post method")
//     console.log("New request found")
    
// })const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/db-name")
  
  .then(function () {
    console.log("Connected!!");
    // const Post = require("./db.posts");
    // post.created({
    //   content : "Laxman Bio",
    // createdAt : Date.now(),
    // createdBy: "Laxman",

    // }).then(function(post){
    //   console.log("Post Created")
    // }).then(function(error){
    //   console.log("Error Crating post"+RangeError)

    // })
    httpServer.listen(3000, function(){
        console.log("server listenening on port 3000")
    })

  })
  .catch(function (e) {
    console.log("Error connecting: " + e.toString());
  });