const mongoose = require("mongoose");
const url =
    "mongodb+srv://admin:posse3301@possedb.ozzii.mongodb.net/PosseDB?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

// Set up MongoDB connection
mongoose.connect(url, options).then(
    () => {
        console.log("Successfully connected to database");
    },
    (err) => {
        console.log("Failed to connect to database");
    }
);

db = mongoose.connection;

module.exports = db;
