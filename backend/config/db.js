const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "medicare",     // database name
  "root",         // username
  "2004",     // ⚠️ change to your MySQL password
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;