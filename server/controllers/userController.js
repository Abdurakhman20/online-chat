const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const { validationResult } = require("express-validator");
const ApiError = require("../errors/apiError");

const generateJwt = (id, email, role, name) => {
  return jwt.sign({ id, email, role, name }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(request, response, next) {
    try {
      const errors = validationResult(request);
      const { email, password, role, name } = request.body;
      if (!errors.isEmpty()) {
        return response
          .status(400)
          .json({ message: "Registration error!", errors });
      }
      const candidate = await User.findOne({
        where: {
          email,
        },
      });
      if (candidate) {
        return next(
          ApiError.badRequest("User with this email address already exists!")
        );
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        email,
        role,
        name,
        password: hashPassword,
      });
      const token = generateJwt({
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      });
      return response.json({ token });
    } catch (error) {
      console.log(error);
    }
  }
  async login(request, response, next) {
    try {
      const { email, password } = request.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.internal("User with this email not found!"));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.internal("incorrect password!"));
      }
      const token = generateJwt(user.id, user.email, user.role, user.name);
      return response.json({ token });
    } catch (error) {
      console.log(error);
    }
  }
  async checkIsAuthorized(request, response, next) {
    const { id, email, name, role } = request.user;
    const token = generateJwt(id, email, role, name);
    return response.json({ token });
  }
}

module.exports = new UserController();
