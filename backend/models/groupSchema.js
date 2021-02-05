const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    owner: String,
    created: Date,
    members: Array,
    memberCount: Number,
});

module.exports = mongoose.model("Group", groupSchema);
