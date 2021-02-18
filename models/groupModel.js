const mongoose = require("mongoose"),
    { Schema } = mongoose;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    theme: String,
    owner: String,
    created: Date,
    members: Array,
    memberCount: Number,
});

module.exports = mongoose.model("Group", groupSchema);
