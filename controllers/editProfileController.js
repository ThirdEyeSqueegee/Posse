const User = require("../models/userModel");

exports.editName = async (req, res) => {
    User.findOneAndUpdate(
        { username: req.session.user.username },
        { name: req.body.name },
        { new: true },
        (err, user) => {
            if (err) throw err;
            req.session.user.name = user.name;
            res.status(200).redirect("../profile.html");
        }
    );
};

exports.editUsername = async (req, res) => {
    console.log(req.body);
    User.findOneAndUpdate(
        { username: req.session.user.username },
        { username: req.body.username },
        { new: true },
        (err, user) => {
            if (err) throw err;
            req.session.user.username = user.username;
            res.status(200).redirect("../profile.html");
        }
    );
};

exports.editEmail = async (req, res) => {
    User.findOneAndUpdate(
        { username: req.session.user.username },
        { email: req.body.email },
        { new: true },
        (err, user) => {
            if (err) throw err;
            req.session.user.email = user.email;
            res.status(200).redirect("../profile.html");
        }
    );
};

exports.editPassword = async (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
        User.findOne({ username: req.session.user.username }, (err, user) => {
            if (err) throw err;
            user.set({ password: req.body.password });
            user.save();
            res.status(200).json("profile.html");
        });
    }
};
