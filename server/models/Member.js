const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");

const Member = sequelize.define("member", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  isAdmin: { type: DataTypes.BOOLEAN },
});

module.exports = Member;
