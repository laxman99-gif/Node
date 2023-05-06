const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    content : String,
    createdAt : Date,
    createdBy: String

})
const post = mongoose.model("post",postSchema)
module.exports= post 