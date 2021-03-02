const Group = require("../models/groupModel");

exports.getCurrentUser = (req, res) => {
    if (req.session.user !== null) {
        res.status(200).json(req.session.user);
    } else {
        res.status(404);
    }
};
