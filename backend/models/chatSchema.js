const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: {
        type: String,
        maxLength: 500,
    },
    sentAt: Date,
});

const chatSchema = new Schema({
    messages: {
        type: Map,
        to: [messageSchema],
    },
});

module.exports = mongoose.model("Chat", chatSchema);
