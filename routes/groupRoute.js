const express = require("express"),
    groupController = require("../controllers/groupController"),
    router = express.Router();

router.post("/createGroup", groupController.createGroup);

router.get("/getGroup", groupController.getGroup);

router.put("/updateGroup", groupController.updateGroup);

router.delete("/deleteGroup", groupController.deleteGroup);

module.exports = router;
