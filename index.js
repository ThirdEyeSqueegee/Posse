const bodyParser = require("body-parser"),
    cors = require("cors"),
    express = require("express"),
    path = require("path"),
    db = require(__dirname + "/config.js"),
    User = require(__dirname + "/models/userModel");

const port = process.env.port || 3301;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("/public"));

var homeRoute = require("./routes/homeRoute"),
    userRoute = require("./routes/userRoute");

app.use("/", express.static("public", { index: "login.html" }));
app.use("/user", userRoute);

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
