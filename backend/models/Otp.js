module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Otp", {
    phone: DataTypes.STRING,
    otp: DataTypes.STRING,
    expiry: DataTypes.DATE
  });
};