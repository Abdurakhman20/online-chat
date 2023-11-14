const Router = require("express");
const router = new Router();
const userRouter = require("./userRoutes");
const roomRouter = require("./roomRoutes");
const messageRouter = require("./messageRoutes");
const memberRouter = require("./memberRoutes");

router.use("/user", userRouter);
router.use("/room", roomRouter);
router.use("/message", messageRouter);
router.use("/member", memberRouter);

module.exports = router;
