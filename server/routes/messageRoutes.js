const Router = require("express");
const messageController = require("../controllers/messageController");

const router = new Router();

router.post("/createMessage", messageController.createMessage);
router.get("/getMessages", messageController.getMessages);

module.exports = router;
