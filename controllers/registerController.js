const User = require("../models/userModel");

exports.handleRegistration = (req, res) => {
    const newUser = new User(req.body);
    newUser.save();
    console.log("saved user to DB");
    res.redirect("/");
};
