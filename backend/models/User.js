module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    phone: DataTypes.STRING,
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
};