const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("thankbox", "root", "12341234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
