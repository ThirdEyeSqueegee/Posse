const cors = require("cors"),
    express = require("express"),
    session = require("express-session"),
    db = require("./config"),
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
    logoutRoute = require("./routes/logoutRoute"),
    groupRoute = require("./routes/groupRoute"),
    postRoute = require("./routes/postRoute"),
    userRoute = require("./routes/userRoute"),
    editRoute = require("./routes/editRoute");

app.use("/", express.static("public", { index: "login.html" }));
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/group", groupRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/edit", editRoute);

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});
