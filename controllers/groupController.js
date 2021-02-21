const e = require("cors");
const Group = require("../models/groupModel");

exports.createGroup = (req, res) => {
    Group.findOne(req.body, (err, group) => {
        if (err) throw err;
        if (group === null) {
            const newGroup = new Group(req.body);
            newGroup.set({ owner: req.session.user });
            newGroup.save();
            res.status(201).json(group);
        } else {
            res.status(404);
        }
    });
};

exports.getGroup = (req, res) => {
    Group.findOne(req.body, (err, group) => {
        if (err) throw err;
        if (group !== null) {
            res.status(200).json(group);
        } else {
            res.status(404);
        }
    });
};

exports.updateGroup = (req, res) => {
    Group.findOneAndUpdate(
        req.body.groupName,
        req.body,
        { new: true },
        (err, group) => {
            if (err) throw err;
            if (group !== null) {
                res.status(200).json(group);
            } else {
                res.status(404);
            }
        }
    );
};

exports.deleteGroup = (req, res) => {
    Group.findOneAndDelete(req.body, (err, group) => {
        if (err) throw err;
        if (group !== null) {
            res.status(200).json(group);
        } else {
            res.status(404);
        }
    });
};
