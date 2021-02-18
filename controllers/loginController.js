const User = require("../models/userModel");

exports.handleLogin = (req, res) => {
    const currentUser = User.findOne(req.body.email);
    if (
        currentUser !== null &&
        currentUser.validatePassword(req.body.password)
    ) {
        // TODO: Implement sessions and user authentication
    } else {
        // ToDO: Handle bad login
    }
};
