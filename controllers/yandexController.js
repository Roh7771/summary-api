const Yandex = require("./../models/yandexModel");

exports.checkPayment = async (req, res) => {
  try {
    await Yandex.create({email: req.body.email});

    res.status(200).json({
      status: `success`,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: err
    });
  }
};