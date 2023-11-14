const ApiError = require("../errors/apiError");
const { Message } = require("../models/index");

class MessageController {
  async createMessage(request, response, next) {
    try {
      const { message_text, userId, roomId } = request.body;
      const message = await Message.create({ message_text, userId, roomId });
      return response.json(message);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getMessages(request, response, next) {
    try {
      const messages = Message.findAll();
      return response.json(messages);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new MessageController();
