const express = require("express"),
    loginController = require("../controllers/loginController"),
    router = express.Router();

router.post("/", loginController.handleLogin);

module.exports = router;
