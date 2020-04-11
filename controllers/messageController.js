const Message = require("./../models/messageModel");

exports.createMessage = async (req, res) => {
  try {
    console.log(req.body);
    await Message.create(req.body);

    res.status(201).json({
      status: `success`,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: err
    });
  }
};