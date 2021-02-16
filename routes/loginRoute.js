const express = require("express"),
    passport = require("passport"),
    loginController = require("../controllers/loginController"),
    router = express.Router();

router.post("/login", loginController.handleLogin);

module.exports = router;
