const express = require("express");
const cors = require("cors");
const messageRouter = require("./routes/messageRoutes")

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const app = express();

app.use(cors());
app.use(express.json());

// 3) ROUTES
app.use("/api/v1/messages", messageRouter);

module.exports = app;
