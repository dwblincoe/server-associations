const router = require("express").Router();
const { User, Message } = require("../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      include: ["messages"],
    });

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    if (user) {
      res.status(200).json({ message: "Created user", user });
    } else {
      res.json({ message: "Could not create" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
