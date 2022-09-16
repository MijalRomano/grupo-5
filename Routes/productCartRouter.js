const express = require ("express")
const router = express.Router();

const productCartController = require('../Controllers/productCartController')

router.get('/productCart', productCartController.productCart);
//router.get('/register', productCartController.register);
//router.get('/login', productCartController.login);
//router.get('/productDetail', productCartController.productDetail);
//router.get('/index', productCartController.index);



module.exports = router;