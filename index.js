const cors = require("cors"),
    express = require("express"),
    path = require("path"),
    db = require(__dirname + "/config.js");

const port = process.env.port || 3301,
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const registerRoute = require("./routes/registerRoute"),
    loginRoute = require("./routes/loginRoute"),
    homeRoute = require("./routes/homeRoute"),
    userRoute = require("./routes/userRoute");

app.use("/", express.static("public", { index: "login.html" }));
app.use("/register", registerRoute);
app.use("/login", loginRoute);
//app.use("/home", homeRoute);
//app.use("/profile", profileRoute)

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
