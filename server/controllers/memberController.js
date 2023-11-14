const ApiError = require("../errors/apiError");
const { Member } = require("../models/index");

class MemberController {
  async createMember(request, response, next) {
    try {
      const { isAdmin, userId, roomId } = request.body;
      const member = await Member.create({ isAdmin, userId, roomId });
      return response.json(member);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getMembers(request, response, next) {
    try {
      const members = Member.findAll();
      return response.json(members);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new MemberController();
