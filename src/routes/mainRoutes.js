const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/delete', mainController.delete);
router.get('/edit', mainController.edit);
router.get('/Usercreate', mainController.create);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/', mainController.index);
router.get('/user', mainController.user);


module.exports = router;

