const Router = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const { check } = require("express-validator");

const router = new Router();

router.post(
  "/registration",
  [
    check("name", 'The "name" field must not be empty').notEmpty(),
    check("email", "Incorrect email format").isEmail(),
    check(
      "password",
      "Password length must be between 4 and 32 characters"
    ).isLength({ min: 4, max: 32 }),
  ],
  userController.registration
);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.checkIsAuthorized);

module.exports = router;
