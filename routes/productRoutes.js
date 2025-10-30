const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/category/:category', productController.getByCategory);
router.get('/by-color/:color', productController.getByColor);
router.post('/', productController.createProduct);

module.exports = router;
