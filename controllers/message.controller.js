const router = require("express").Router();

const { Message } = require("../models");

router.get("/", async (req, res) => {
  try {
    const messages = await Message.findAll({
      include: ["user"],
    });

    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const message = await Message.create(req.body);

    if (message) {
      res.status(200).json({ message });
    } else {
      res.json({ message: "Could not create" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
