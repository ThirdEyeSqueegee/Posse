const express = require("express"),
    groupController = require("../controllers/groupController"),
    router = express.Router();

router.get("/getCurrentGroup", groupController.getCurrentGroup);

router.get("/:id", groupController.getGroupById);

router.post("/createGroup", groupController.createGroup);

router.post("/getGroup", groupController.getGroup);

router.post("/joinGroup", groupController.joinGroup);

module.exports = router;
