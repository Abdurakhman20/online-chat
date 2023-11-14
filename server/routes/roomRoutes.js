const Router = require("express");
const roomController = require("../controllers/roomController");

const router = new Router();

router.post("/createRoom", roomController.createRoom);
router.get("/getRooms", roomController.getRooms);

module.exports = router;
