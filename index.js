const express = require("express");

const userController = require("./controllers/user.controller");
const messageController = require("./controllers/message.controller");
const { sequelize } = require("./models");

const app = express();

require("./models/associations");

app.use(express.json());

app.use("/user", userController);
app.use("/message", messageController);

sequelize.sync();

app.listen(3000, () => console.log("Listening on PORT 3000"));
