const mongoose = require("mongoose"),
    bcrypt = require("bcrypt"),
    { Schema } = mongoose,
    saltRounds = 10;

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    joined: Date,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await bcrypt.hash(this.password, saltRounds);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function (data) {
    return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model("User", userSchema);
