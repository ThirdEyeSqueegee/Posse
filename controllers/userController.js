const User = require("../models/userModel");

exports.getCurrentUser = (req, res) => {
    if (req.session.user !== null) {
        res.status(200).json(req.session.user);
    } else {
        res.status(404);
    }
};

exports.getUserGroups = (req, res) => {
    if (req.session.user !== null) {
        res.status(200).json(req.session.user);
    } else {
        res.status(404);
    }
};
