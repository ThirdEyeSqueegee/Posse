const User = require("../models/userModel"),
    failedLogin = require("../public/assets/js/failedLogin");

exports.handleLogin = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        console.log(user);
        if (err) throw err;
        if (user !== null && user.validatePassword(req.body.password)) {
            req.session.loggedIn = true;
            //res.redirect("/home")
        } else {
            res.redirect("/");
        }
    });
};
