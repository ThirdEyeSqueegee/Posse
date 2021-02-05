const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    username: {
        type: String,
        required: true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        maxLength: 50,
    },
    interests: Array,
    joined: Date,
    groupsOwned: Array,
    memberOf: Array,
    ownedCount: Number,
    membershipCount: Number,
});

module.exports = mongoose.model("User", userSchema);
