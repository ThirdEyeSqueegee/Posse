const Post = require("../models/postModel");
const Group = require("../models/groupModel");

// Create and add a new post to the current group and persist to MongoDB
exports.createPost = async (req, res) => {
    const group = await Group.findOne({ name: req.session.currentGroup.name });
    if (await group.isMember(req.session.user.username)) {
        const newPost = new Post({ content: req.body.postContent });
        const date = Date();
        newPost.author = req.session.user.name;
        newPost.created = date;
        group.posts.push(newPost);
        req.session.currentGroup = group;
        group.save();
    }
    res.status(200).redirect("../../group.html");
};
