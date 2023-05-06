const express = require("express");
const router = express.Router();
const createNewPost = require("./function");

router.post("/", function (req, res) {
  // { postContent: 'Post from API', postCreatedBy: 'THunder Client' }

  createNewPost(req.body.postContent, req.body.postCreatedBy)
    .then(function (post) {
      res.send("Post Created successfully");
    })
    .catch(function (error) {
      res.send("Error Creating Post");
    });
});

module.exports = router;