const express = require("express"),
    logoutController = require("../controllers/logoutController"),
    router = express.Router();

router.post("/", logoutController.handleLogout);

module.exports = router;
