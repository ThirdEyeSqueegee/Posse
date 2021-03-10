const express = require("express"),
    userController = require("../controllers/userController"),
    router = express.Router();

router.get("/getCurrentUser", userController.getCurrentUser);

router.get("/getUserGroups", userController.getUserGroups);

router.get("/deleteUser", userController.deleteUser);

module.exports = router;
