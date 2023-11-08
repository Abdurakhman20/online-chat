require("dotenv").config();
const express = require("express");
const sequelize = require("./database/db");
const models = require("./models/index");

const app = express();
const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
