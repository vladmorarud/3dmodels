const express = require("express");
const router = express.Router();
const { addMessage, getMessages } = require("../controllers/messageController");

router.post("/messages", addMessage);
router.get("/messages", getMessages);

module.exports = router;
