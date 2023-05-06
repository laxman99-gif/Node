// importing express
const express = require("express");
const mongoose = require("mongoose");

const routesFromAnotherFile = require("./routes");
const cors = require("cors")
const httpServer = express();

// middleware to parse json body
httpServer.use(express.json());
httpServer.use(cors())
httpServer.use(routesFromAnotherFile);


mongoose
  .connect(
    //"mongodb+srv://cfc-demo-user:asdfasdf1@cluster0.i35rvgk.mongodb.net/cfc-db",
    // locally
    "mongodb://127.0.0.1:27017/db-name"
    //https://github.com/arjunQ21/posts-app-frontend.git{},
  )
  .then(function () {
    console.log("Connected to DB!!");
    httpServer.listen(3000, function () {
      console.log("Server listening on port 3000");
    });
  })
  .catch(function (e) {
    console.log("Error connecting: " + e.toString());
  });
