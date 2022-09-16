const express = require("express");
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/login',indexController.login);
router.get('/delete', indexController.Userdelete);
router.get('/edit', indexController.edit);
router.get('/Usercreate', indexController.Usercreate);
router.get('/productCart', indexController.productCart);
router.get('/create', indexController.register);
router.get('/', indexController.index);

module.exports = router;