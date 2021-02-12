const express = require("express");
const bcrypt = require("bcrypt");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/get_data/:user_id", userController.user_get_data);
router.post("/update_data/:user_id", userController.user_post_data);
router.delete("/remove_user/:user_id", userController.user_delete_data);
router.post("/auth", userController.user_auth);
router.post("/register", userController.user_registration);

module.exports = router;
