module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Order", {

    user_id: DataTypes.INTEGER,

    total: DataTypes.FLOAT,

    items: {
      type: DataTypes.JSON
    }

  });
};