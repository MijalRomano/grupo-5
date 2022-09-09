const express = require('express');
const router = express.Router();
const mainController = require('..mainController/controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

module.exports = router;