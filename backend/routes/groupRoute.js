const express = require("express");
const groupController = require("../controllers/groupController");
const router = express.Router();

router.get("/get_data/:group_id", groupController.group_get_data);
router.post("/update_data/:group_id", groupController.group_post_data);
router.delete("/remove_group/:group_id", groupController.group_delete_data);
router.post("/create_group", groupController.group_create);

module.exports = router;
