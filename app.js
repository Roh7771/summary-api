const express = require("express");
const cors = require("cors");
const messageRouter = require("./routes/messageRoutes");
const yandexRouter = require("./routes/yandexRouter")

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// 3) ROUTES
app.use("/api/v1/messages", messageRouter);
app.use("/", yandexRouter);

module.exports = app;
