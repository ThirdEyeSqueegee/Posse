const express = require("express"),
    postController = require("../controllers/postController"),
    router = express.Router();

router.get("/getPost", postController.getPost);

router.post("/createPost", postController.createPost);

router.delete("/deletePost", postController.deletePost);

module.exports = router;
