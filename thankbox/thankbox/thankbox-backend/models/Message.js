const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Message = sequelize.define("Message", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Message;
