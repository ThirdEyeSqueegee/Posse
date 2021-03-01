const User = require("../models/userModel");

exports.handleRegistration = (req, res) => {
    User.findOne(req.body, (err, user) => {
        if (err) throw err;
        if (user === null) {
            const newUser = new User(req.body);
            const date = Date();
            newUser.set({ joined: date });
            newUser.save();
            res.status(200).redirect("/");
        } else {
            res.status(405).redirect("/");
        }
    });
};
