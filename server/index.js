require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const start = () => {
  app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
};

start();
