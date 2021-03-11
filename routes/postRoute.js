const express = require("express"),
    postController = require("../controllers/postController"),
    router = express.Router();

router.post("/createPost", postController.createPost);

module.exports = router;
