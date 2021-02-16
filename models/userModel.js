const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 5,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        maxLength: 75,
    },
    interests: Array,
    joined: Date,
    groupsOwned: Array,
    isAdmin: Boolean,
    memberOf: Array,
    ownedCount: Number,
    membershipCount: Number,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
