const mongoose = require("mongoose"),
    { Schema } = mongoose;

const groupSchema = new Schema({
    name: String,
    description: String,
    owner: String,
    created: Date,
    members: Array,
    memberCount: Number,
    posts: Array,
});

// Check if the given user is a member of group
groupSchema.methods.isMember = async function (user) {
    return this.members.includes(user);
};

module.exports = mongoose.model("Group", groupSchema);
