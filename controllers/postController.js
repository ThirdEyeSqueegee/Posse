const Post = require("../models/postModel");
const Group = require("../models/groupModel");

exports.createPost = (req, res) => {
    const newPost = new Post(req.body);
    const date = Date();
    newPost.set({ author: req.session.user });
    newPost.set({ created: date });
    Group.findOne({ name: req.session.currentGroup.name }, (err, group) => {
        if (err) throw err;
        if (group !== null) {
            group.posts.push(newPost);
            group.save();
        }
    });
    res.status(200).redirect("../../group.html");

};

exports.getPost = (req, res) => {
    Post.findOne({ id: req.params.id }, (err, post) => {
        if (err) throw err;
        if (post !== null) {
            res.status(200).json(post);
        } else {
            res.status(404);
        }
    });
};

exports.deletePost = (req, res) => {
    Post.findOneAndDelete({ id: req.params.id }, (err, post) => {
        if (err) throw err;
        if (post !== null) {
            res.status(200).json(post);
        } else {
            res.status(404);
        }
    });
};

exports.getAllPosts = (req, res) => {
    // TODO: Retrieve all posts in a group
};
