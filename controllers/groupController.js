const Group = require("../models/groupModel");
const User = require("../models/userModel");

exports.createGroup = async (req, res) => {
    Group.findOne({ name: req.body.name }, async (err, group) => {
        if (err) throw err;
        if (group === null) {
            const newGroup = new Group(req.body);
            const date = Date();
            newGroup.owner = req.session.user.username;
            newGroup.created = date;
            newGroup.members.push(req.session.user.username);
            newGroup.memberCount = 1;
            newGroup.save();
            req.session.currentGroup = newGroup;
            await User.findOne(
                { email: req.session.user.email },
                (err, user) => {
                    if (err) throw err;
                    if (user !== null) {
                        user.groups.push(newGroup.id);
                        req.session.user.groups.push(newGroup.id);
                        user.save();
                    }
                }
            );
            res.status(200).redirect("../group.html");
        } else {
            res.status(404);
        }
    });
};

exports.getGroup = async (req, res) => {
    Group.findOne(
        { name: { $regex: req.body.name, $options: "i" } },
        (err, group) => {
            if (err) throw err;
            if (group !== null) {
                req.session.currentGroup = group;
                res.status(200).json(group);
            } else {
                res.status(404);
            }
        }
    );
};

exports.getCurrentGroup = async (req, res) => {
    if (req.session.currentGroup !== null) {
        res.status(200).json(req.session.currentGroup);
    } else {
        res.status(404);
    }
};

exports.getGroupById = async (req, res) => {
    const group = await Group.findById(req.params.id);
    req.session.currentGroup = group;
    res.status(200).redirect("../group.html");
};

exports.joinGroup = async (req, res) => {
    const user = await User.findOne({ username: req.session.user.username });
    const group = await Group.findOne({ name: req.body.name });
    const member =
        (await user.isMember(group.id)) ||
        (await group.isMember(user.username));
    if (!member) {
        user.groups.push(group.id);
        group.members.push(user.username);
        group.memberCount++;
        req.session.user.groups.push(group.id);
        req.session.currentGroup.members.push(user.username);
        user.save();
        group.save();
        res.status(200).json(group);
    } else {
        res.status(200).json({ joined: false });
    }
};
