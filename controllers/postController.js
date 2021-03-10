const Post = require("../models/postModel");
const Group = require("../models/groupModel");

exports.createPost = async (req, res) => {
    const newPost = new Post({ content: req.body.postContent });
    const date = Date();
    newPost.author = req.session.user.name;
    newPost.created = date;
    await Group.findOne(
        { name: req.session.currentGroup.name },
        (err, group) => {
            if (err) throw err;
            if (group !== null) {
                group.posts.push(newPost);
                req.session.currentGroup = group;
                group.save();
            }
        }
    );
    res.status(200).redirect("../../group.html");
};

exports.getAllPosts = async (req, res) => {
    const group = await Group.findOne({ name: req.body.name });
    for (post in group.posts) {
        console.log(post);
    }
};
