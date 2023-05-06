const express = require("express");
const router = express.Router();
const createNewPost = require("./function");
const post = require("./db/posts")

router.post("/", function (req, res) {
  // { postContent: 'Post from API', postCreatedBy: 'THunder Client' }

  createNewPost(req.body.postContent, req.body.postCreatedBy)
    .then(function (post) {
        res.send(post)
      //res.send("Post Created successfully");
    })
    .catch(function (error) {
      res.send("Error Creating Post");
    });
});
router.get("/", function (req, res) {
  post.find()
    .then(function (posts) {
      res.send(posts);
    })
    .catch(function (error) {
      res.send("Error getting posts: " + error);
    });
});
//Delete a post 
router.delete("/:postId", function (req, res) {
  post.deleteOne({_id: req.params.postId})
  .then(function(post){
    console.log(post)
    res.send("Deleted") ;
  })
  .catch(function(err){
    res.send("Error deleting: "+ err) ;
  })
});
 



module.exports = router;