const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/delete', mainController.delete);
router.get('/edit', mainController.edit);
router.get('/create', mainController.create);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/', mainController.index);

module.exports = router;

