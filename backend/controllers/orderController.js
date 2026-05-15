const { Order, Hidden, User } = require('../models');

exports.createOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;

    let total = 0;

    items.forEach(item => {
      total += item.price * item.quantity;
    });

    const discount = total * 0.10;
    const userPoints = total * 0.05;
    const hiddenAmount = total * 0.05;
    const finalAmount = total - discount;

    const order = await Order.create({
      user_id: userId,
      total: finalAmount
    });

    await User.increment('points', {
      by: userPoints,
      where: { id: userId }
    });

    await Hidden.create({
      order_id: order.id,
      hidden_amount: hiddenAmount
    });

    res.json({
      total,
      discount,
      finalAmount,
      userPoints
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Order failed" });
  }
};