module.exports = (sequelize, DataTypes) => {
  return sequelize.define("message", {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
