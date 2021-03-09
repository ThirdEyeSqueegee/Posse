const mongoose = require("mongoose"),
    { Schema } = mongoose,
    autoIncrementId = require("mongoose-sequence")(mongoose);

const postSchema = new Schema({
    name: String,
    author: String,
    created: Date,
});

postSchema.plugin(autoIncrementId, { inc_field: "id" });

module.exports = mongoose.model("Post", postSchema);
