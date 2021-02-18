const express = require("express"),
    registerController = require("../controllers/registerController"),
    router = express.Router();

router.post("/", registerController.handleRegistration);

module.exports = router;
