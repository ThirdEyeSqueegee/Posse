const express = require("express"),
    postController = require("../controllers/postController"),
    router = express.Router();

router.get("/getAllPosts", postController.getAllPosts);

router.post("/createPost", postController.createPost);

module.exports = router;
