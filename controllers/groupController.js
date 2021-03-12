const Group = require("../models/groupModel");
const User = require("../models/userModel");

// Create a group, persist to MongoDB, and update session objects
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
        } else res.status(404);
    });
};

// Get all groups that partially or exactly match the user-entered string
exports.getGroups = async (req, res) => {
    Group.find(
        { name: { $regex: req.body.name, $options: "i" } },
        (err, groups) => {
            if (err) throw err;
            if (groups !== null) res.status(200).json(groups);
            else res.status(404);
        }
    );
};

// Get the current group
exports.getCurrentGroup = async (req, res) => {
    if (req.session.currentGroup !== null)
        res.status(200).json(req.session.currentGroup);
    else res.status(404);
};

// Get the group with the given ID
exports.getGroupById = async (req, res) => {
    const group = await Group.findById(req.params.id);
    req.session.currentGroup = group;
    res.status(200).redirect("../group.html");
};

// Join a group and update group, user, and session objects
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
    } else res.status(200).json({ joined: false });
};
