const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/delete', mainController.Userdelete);
router.get('/edit', mainController.edit);
router.get('/Usercreate', mainController.Usercreate);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/create', mainController.register);
router.get('/', mainController.index);

module.exports = router;

