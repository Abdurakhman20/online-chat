const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");

const Room = sequelize.define("room", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Room;
