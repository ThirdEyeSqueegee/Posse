const User = require("../models/userModel");

// Update only user-entered fields of user object in MongoDB
exports.editProfile = (req, res) => {
    changes = {};
    for (const [key, value] of Object.entries(req.body)) {
        if (value !== "") changes[key] = value;
    }
    User.findOneAndUpdate(
        { username: req.session.user.username },
        changes,
        { new: true },
        (err, user) => {
            if (err) throw err;
            req.session.user = user;
            res.status(200).json("profile.html");
        }
    );
};
