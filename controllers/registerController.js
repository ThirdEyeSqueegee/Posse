const User = require("../models/userModel");

exports.handleRegistration = (req, res) => {
    const newUser = new User(req.body);
    newUser.save();
    res.redirect("/");
};
