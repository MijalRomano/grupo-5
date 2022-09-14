const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/delete', mainController.delete);
router.get('/edit', mainController.edit);
<<<<<<< HEAD
router.get('/Usercreate', mainController.create);
=======
router.get('/create', mainController.create);
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/', mainController.index);
router.get('/user', mainController.user);


module.exports = router;

