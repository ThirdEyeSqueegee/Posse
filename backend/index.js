const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const routes_handler = require("./routes/user.js");

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use("/", routes_handler);

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
