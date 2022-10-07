const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/delete', mainController.Userdelete);
router.get('/edit', mainController.Useredit);

router.get('/Usercreate', mainController.Usercreate);

router.get('/create', mainController.Usercreate);

router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
router.get('/login', mainController.login);
router.get('/', mainController.index);
router.get('/user', mainController.user);
router.get('/register', mainController.register);
router.post('/user/users', mainController.Postregister);


module.exports = router;

