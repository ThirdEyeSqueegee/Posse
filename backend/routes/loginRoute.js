const express = require("express");
const loginController = require("../controllers/loginController");
const router = express.Router();

router.get("/login", loginController.get_login_page);
router.get("/register", loginController.get_registration_page);

module.exports = router;
