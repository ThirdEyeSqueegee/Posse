const express = require("express"),
    groupController = require("../controllers/groupController"),
    router = express.Router();

router.post("/createGroup", groupController.createGroup);

router.post("/getGroup", groupController.getGroup);

router.get("/:id", groupController.showGroup);

router.post("/updateGroup", groupController.updateGroup);

router.delete("/deleteGroup", groupController.deleteGroup);

module.exports = router;
