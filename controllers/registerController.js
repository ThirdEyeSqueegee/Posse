const passport = require("passport"),
    User = require("../models/userModel");

exports.handleRegistration = (req, res) => {
    User.register(
        User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
        }),
        req.body.password,
        (err) => {
            if (err) {
                console.log("Error creating user");
            }
            res.redirect("/login");
        }
    );
};
