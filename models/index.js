const Sequelize = require("sequelize");

const sequelize = new Sequelize("associations", "postgres", "password", {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Message = require("./message")(sequelize, Sequelize);

module.exports = db;
