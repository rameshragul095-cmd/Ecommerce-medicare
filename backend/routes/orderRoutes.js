const router = require('express').Router();
const controller = require('../controllers/orderController');

router.post('/create', controller.createOrder);

module.exports = router;