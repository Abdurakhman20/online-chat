require("dotenv").config();
const express = require("express");
const sequelize = require("./database/db");
const models = require("./models/index");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandlingMiddleware");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", router);

// The last middleware
app.use(errorHandler);

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
