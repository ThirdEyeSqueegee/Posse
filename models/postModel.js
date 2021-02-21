const mongoose = require("mongoose"),
    { Schema } = mongoose,
    autoIncrementId = require("mongoose-sequence")(mongoose);

const postSchema = new Schema({
    text: String,
    author: String,
    group: String,
    created: Date,
});

postSchema.plugin(autoIncrementId, { inc_field: "id" });

module.exports = mongoose.model("Post", postSchema);
