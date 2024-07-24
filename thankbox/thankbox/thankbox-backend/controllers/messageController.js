const Message = require("../models/Message");

exports.addMessage = async (req, res) => {
  const { name, message, image } = req.body;
  try {
    const newMessage = await Message.create({ name, message, image });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to add message" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
};
