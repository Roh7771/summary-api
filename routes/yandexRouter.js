const express = require('express');
const yandexController = require(`../controllers/yandexController`)

const router = express.Router();

router
  .route(`/`)
  .post(yandexController.checkPayment)
  .get(yandexController.getMessage);

module.exports = router;