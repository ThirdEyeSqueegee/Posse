const express = require("express");
const bcrypt = require("bcrypt");
const { response } = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("<h1>Hello, World!</h1>");
});

const test_user = {
    username: "user",
    hashed_password: bcrypt.hashSync("pass", 10),
};

router.post("/login", function (req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    console.log(user, pass);
    if (
        user === test_user.username &&
        bcrypt.compareSync(pass, test_user.hashed_password)
    )
        res.send({ is_valid: true });
    else res.send({ is_valid: false });
});

module.exports = router;
