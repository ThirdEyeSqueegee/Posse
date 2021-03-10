const User = require("../models/userModel");

exports.handleLogin = async (req, res) => {
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) throw err;
        if (user !== null) {
            const valid = await user.validatePassword(req.body.password);
            if (valid) {
                req.session.loggedIn = true;
                req.session.user = user;
                res.status(200).redirect("home.html");
            } else {
                req.session.loggedIn = false;
                res.status(405).redirect("/");
            }
        } else {
            req.session.loggedIn = false;
            res.status(405).redirect("/");
        }
    });
};
