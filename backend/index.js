const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const socketio = require("socket.io");
const db = require("./config.js");
const universalRouter = require("./routes/universalRoute");

const app = express();
const port = process.env.port || 3301;

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/", universalRouter);

//db(); caught a bug - db() does not need to be called

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
