const Group = require("../models/groupModel");

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
