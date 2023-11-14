const User = require("./User");
const Room = require("./Room");
const Member = require("./Member");
const RoomMember = require("./RoomMember");
const Message = require("./Message");

User.hasMany(Room);
Room.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

User.hasMany(Member);
Member.belongsTo(User);

Room.hasMany(Member);
Member.belongsTo(Room);

Room.hasMany(Message);
Message.belongsTo(Room);

Room.belongsToMany(Member, { through: RoomMember });
Member.belongsToMany(Room, { through: RoomMember });

module.exports = {
  User,
  Room,
  Member,
  RoomMember,
  Message,
};
