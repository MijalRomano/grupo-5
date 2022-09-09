const express = require('express');
const mainRouter = express.Router();
const registerController = require('../controllers/registerController');

router.get('/', registerController.index);

router.get('/register', registerController.register);

module.exports = router;
