const express = require("express");
const userRouter = require("./userRoute");
const groupRouter = require("./groupRoute");
const loginRouter = require("./loginRoute");
const chatRouter = require("./chatRoute");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("GET REQUEST FOR HOME PAGE --BOILERPLATE STATEMENT--");
});
router.use("/user", userRouter);
router.use("/group", groupRouter);
router.use("/auth", loginRouter);
// router.user("/chat", chatRouter); TODO: chat routing/controller

module.exports = router;
