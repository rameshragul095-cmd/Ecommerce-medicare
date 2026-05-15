const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = require("./User")(sequelize, Sequelize);
const Otp = require("./Otp")(sequelize, Sequelize);
const Product = require("./Product")(sequelize, Sequelize);
const Order = require("./Order")(sequelize, Sequelize);
const Hidden = require("./Hidden")(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
  Otp,
  Product,
  Order,
  Hidden
};