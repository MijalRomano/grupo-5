const express = require ("express")
const router = express.Router();
const productController = require('../Controllers/productController')

router.get('/', productController.productDetail)

module.exports = router