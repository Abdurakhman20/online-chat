const Router = require("express");
const memberController = require("../controllers/memberController");

const router = new Router();

router.post("/createMember", memberController.createMember);
router.get("/getMembers", memberController.getMembers);

module.exports = router;
