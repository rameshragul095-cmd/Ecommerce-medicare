module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Hidden", {
    order_id: DataTypes.INTEGER,
    hidden_amount: DataTypes.FLOAT
  });
};