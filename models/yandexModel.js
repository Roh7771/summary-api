const mongoose = require("mongoose");

const yandexSchema = new mongoose.Schema({
  email: {
    type: String,
  }
});

const Yandex = mongoose.model("Yandex", yandexSchema);

module.exports = Yandex;