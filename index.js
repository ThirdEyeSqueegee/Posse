const cors = require("cors"),
    express = require("express"),
    session = require("express-session"),
    db = require(__dirname + "/config.js"),
    port = process.env.port || 3301,
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
    session({
        secret: "It's forty-two",
        saveUninitialized: false,
        resave: false,
    })
);

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
