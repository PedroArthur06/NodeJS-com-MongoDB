const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');

router.get('/create', productsController.createProduct);
router.post('/create', productsController.createProductPost);
router.post('/remove/:id', productsController.removeProduct);
router.get('/:id', productsController.getProduct);
router.get('/', productsController.showProducts);


module.exports = router;