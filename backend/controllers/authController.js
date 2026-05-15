const { Otp, User } = require('../models');
const jwt = require('jsonwebtoken');

// SEND OTP
exports.sendOtp = async (req, res) => {
  const { phone } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Delete old OTP
  await Otp.destroy({ where: { phone } });

  // Save new OTP
  await Otp.create({
    phone,
    otp,
    expiry: new Date(Date.now() + 5 * 60 * 1000)
  });

  console.log("📩 OTP:", otp);

  res.json({ message: "OTP sent successfully" });
};

// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  const record = await Otp.findOne({
    where: { phone, otp }
  });

  if (!record) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  if (new Date() > record.expiry) {
    return res.status(400).json({ message: "OTP expired" });
  }

  let user = await User.findOne({ where: { phone } });

  if (!user) {
    user = await User.create({ phone });
  }

  const token = jwt.sign({ id: user.id }, "secret", {
    expiresIn: "1h"
  });

  res.json({
    message: "Login successful",
    token,
    user
  });
};