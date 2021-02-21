const User = require("../models/userModel");

exports.handleLogin = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;
        if (user !== null && user.validatePassword(req.body.password)) {
            req.session.loggedIn = true;
            req.session.user = user.name;
            res.status(200).redirect("home.html");
        } else {
            req.session.loggedIn = false;
            res.status(405).redirect("/");
        }
    });
};
