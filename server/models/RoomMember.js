const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");

const RoomMember = sequelize.define("room_member", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = RoomMember;
