const Group = require("../models/groupModel"),
    User = require("../models/userModel");

exports.getCurrentUser = async (req, res) => {
    if (req.session.user !== null) {
        res.status(200).json(req.session.user);
    } else {
        res.status(404);
    }
};

exports.getUserGroups = async (req, res) => {
    if (req.session.user !== null) {
        groups = [];
        for (let i = 0; i < req.session.user.groups.length; i++) {
            const group = await Group.findById(req.session.user.groups[i]);
            const elem = {};
            elem[req.session.user.groups[i]] = group.name;
            groups.push(elem);
        }
        res.status(200).send(groups);
    } else {
        res.status(404);
    }
};

exports.deleteUser = async (req, res) => {
    await User.findOneAndDelete(req.session.user);
    res.status(200).json("login.html");
};
