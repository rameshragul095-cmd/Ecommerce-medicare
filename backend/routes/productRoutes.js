const router = require('express').Router();
const { Product } = require('../models');

// ADD PRODUCT
router.post('/add', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error adding product" });
  }
});

// GET PRODUCTS
router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

module.exports = router;