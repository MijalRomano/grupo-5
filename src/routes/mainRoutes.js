const express = require('express');
const mainRouter = express.Router();
const mainController = require('..mainController/controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

module.exports = router;
