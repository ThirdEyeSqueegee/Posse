const mongoose = require("mongoose"),
    { Schema } = mongoose;

const postSchema = new Schema({
    content: String,
    author: String,
    created: Date,
});

module.exports = mongoose.model("Post", postSchema);
