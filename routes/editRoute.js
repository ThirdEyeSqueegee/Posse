const express = require("express"),
    editProfileController = require("../controllers/editProfileController.js"),
    router = express.Router();


router.post("/editName", editProfileController.editName);
router.post("/editUsername", editProfileController.editUsername);
router.post("/editEmail", editProfileController.editEmail);

module.exports = router;