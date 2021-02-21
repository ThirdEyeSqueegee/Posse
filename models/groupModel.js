const mongoose = require("mongoose"),
    { Schema } = mongoose;

const groupSchema = new Schema({
    name: String,
    theme: String,
    owner: String,
    created: Date,
    members: Array,
    memberCount: Number,
});

module.exports = mongoose.model("Group", groupSchema);
