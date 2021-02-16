const passport = require("passport");

exports.handleLogin = (req, res) => {
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
        (req, res) => {
            res.redirect("/home");
        };
};
