const express = require('express');
const Router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.index);

router.get('/login', loginController.login);

module.exports = router;
