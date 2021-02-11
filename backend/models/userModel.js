const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
        unique: true,
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
        maxLength: 25,
    },
    interests: Array,
    joined: Date,
    groupsOwned: Array,
    isAdmin: Boolean,
    memberOf: Array,
    ownedCount: Number,
    membershipCount: Number,
});

userSchema.pre("save", (next) => {
    const saltRounds = 10;
    if (this.modifiedPaths().includes("password")) {
        bcrypt.hash(this.password, saltRounds, (err, hash) => {
            this.password = hash;
            next();
        });
    } else {
        next();
    }
});

module.exports = mongoose.model("User", userSchema);
