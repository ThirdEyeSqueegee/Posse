const bodyParser = require("body-parser"),
    cors = require("cors"),
    express = require("express"),
    passport = require("passport"),
    path = require("path"),
    LocalStrategy = require("passport-local").Strategy,
    db = require(__dirname + "/config.js"),
    User = require(__dirname + "/models/userModel");

const port = process.env.port || 3301;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("/public"));
//app.use(express.session({ secret: "forty two" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var homeRoute = require("./routes/homeRoute"),
    loginRoute = require("./routes/loginRoute"),
    registerRoute = require("./routes/registerRoute");

app.use("/", express.static("public", { index: "login.html" }));
app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
