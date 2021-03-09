const Group = require("../models/groupModel");
const User = require("../models/userModel");

exports.createGroup = (req, res) => {
    Group.findOne({ name: req.body.name }, (err, group) => {
        if (err) throw err;
        if (group === null) {
            const newGroup = new Group(req.body);
            const date = Date();
            newGroup.set({ owner: req.session.user });
            newGroup.set({ created: date });
            newGroup.members.push(req.session.user);
            newGroup.save();
            req.session.currentGroup = req.params.id;
            User.findOne({ email: req.session.user.email }, (err, user) => {
                if (err) throw err;
                if (user !== null) {
                    user.groups.push(req.body.name);
                    user.save();
                }
            });
            res.status(200).redirect("../group.html");
        } else {
            res.status(404);
        }
    });
};

exports.getGroup = (req, res) => {
    Group.findOne({ name: req.body.name }, (err, group) => {
        if (err) throw err;
        if (group !== null) {
            req.session.currentGroup = group;
            res.status(200).json(group);
        } else {
            res.status(404);
        }
    });
};

exports.getCurrentGroup = (req, res) => {
    if (req.session.currentGroup !== null) {
        res.status(200).json(req.session.currentGroup);
    } else {
        res.status(404);
    }
};

exports.showGroup = (req, res) => {
    res.status(200).redirect("../group.html");
};

exports.updateGroup = (req, res) => {
    Group.findOneAndUpdate({ name: req.body.name }, req.body, (err, group) => {
        if (err) throw err;
        if (group !== null) {
            res.status(200).json(group);
        } else {
            res.status(404);
        }
    });
};

exports.deleteGroup = (req, res) => {
    Group.findOneAndDelete({ name: req.body.name }, (err, group) => {
        if (err) throw err;
        if (group !== null) {
            res.status(200).json(group);
        } else {
            res.status(404);
        }
    });
};

exports.joinGroup = async (req, res) => {
    const user = await User.findOne({ username: req.session.user.username });
    const group = await Group.findOne({ name: req.body.name });
    const member =
        (await user.groups.includes(req.body.name)) ||
        (await group.members.includes(req.session.user.name));
    console.log(member);
    if (!member) {
        user.groups.push(req.body.name);
        group.members.push(req.session.user);
        req.session.user.groups.push(req.body.name);
        req.session.currentGroup.members.push(req.session.user);
        user.save();
        group.save();
        res.status(200).json(group.id);
    } else {
        res.status(405);
    }
};
