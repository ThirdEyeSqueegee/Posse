const express = require("express"),
    userController = require("../controllers/userController"),
    router = express.Router();

router.get("/getCurrentUser", userController.getCurrentUser);

module.exports = router;
