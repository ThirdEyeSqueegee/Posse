const express = require("express"),
    passport = require("passport"),
    registerController = require("../controllers/registerController"),
    router = express.Router();

router.post("/register", registerController.handleRegistration);

module.exports = router;
