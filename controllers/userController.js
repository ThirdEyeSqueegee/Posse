const Group = require("../models/groupModel"),
    User = require("../models/userModel");

exports.getCurrentUser = (req, res) => {
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

exports.deleteUser = (req, res) => {
    User.findOneAndDelete(req.session.user, (err, user) => {
        if (err) throw err;
        req.session.destroy();
        res.status(200).json("login.html");
    });
};

exports.leaveGroup = async (req, res) => {
    const user = await User.findOne({ username: req.session.user.username });
    const group = await Group.findOne({ name: req.session.currentGroup.name });
    if (
        (await user.isMember(group.id)) &&
        (await group.isMember(user.username))
    ) {
        user.groups.pull(group.id);
        group.members.pull(user.username);
        req.session.user = user;
        req.session.currentGroup = group;
        user.save();
        group.save();
        res.status(200).json("home.html");
    } else {
        res.status(200).json({ member: false });
    }
};
