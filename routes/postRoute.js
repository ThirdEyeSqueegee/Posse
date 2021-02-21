const express = require("express"),
    postController = require("../controllers/postController"),
    router = express.Router();

router.post("/createPost", postController.createPost);

router.get("/getPost", postController.getPost);

router.delete("/deletePost", postController.deletePost);

module.exports = router;
