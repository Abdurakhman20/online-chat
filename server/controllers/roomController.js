const ApiError = require("../errors/apiError");
const { Room } = require("../models/index");

class RoomController {
  async createRoom(request, response, next) {
    try {
      const { name, userId } = request.body;
      const room = await Room.create({ name, userId });
      return response.json(room);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getRooms(request, response, next) {
    try {
      const rooms = await Room.findAll();
      return response.json(rooms);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new RoomController();
