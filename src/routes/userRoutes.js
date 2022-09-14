const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/user', userController.user);
<<<<<<< HEAD
router.get('/create', userController.create);
router.get('/delete', userController.delete)
router.get('/edit', userController.edit);
=======
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90

module.exports = router;