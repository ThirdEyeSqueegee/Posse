const express = require("express"),
    editProfileController = require("../controllers/editProfileController.js"),
    router = express.Router();

router.post("/editProfile", editProfileController.editProfile);

module.exports = router;
