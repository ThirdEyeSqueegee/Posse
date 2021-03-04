const User = require("../models/userModel");

exports.editName = (req, res) => {
    User.findOne({name: req}, (err, user) => {
        if (err) throw err;
        else{
        user.set({name:req});
        user.save();
        res.status(200).redirect("./home.html");
        }
    });
};

exports.editUsername = (req, res) => {
    User.findOne({username: req}, (err, user) => {
        if (err) throw err;
        else{
        user.set({username:req});
        user.save();
        res.status(200).redirect("./home.html");
        }
    });
};

exports.editEmail = (req, res) => {
    User.findOne({email:req}, (err, user) => {
        if (err) throw err;
        else{
        user.set({email:req});
        user.save();
        res.status(200).redirect("./home.html");
        }
    });
};
