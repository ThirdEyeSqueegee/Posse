const mongoose = require("mongoose"),
    bcrypt = require("bcrypt"),
    { Schema } = mongoose,
    saltRounds = 10;

const userSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    interests: Array,
    joined: Date,
    groupsOwned: Array,
    isAdmin: Boolean,
    memberOf: Array,
    ownedCount: Number,
    membershipCount: Number,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function (data) {
    return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model("User", userSchema);
