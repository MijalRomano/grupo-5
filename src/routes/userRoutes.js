const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/user', userController.user);
router.post('/user', userController.user);
router.get('/users', userController.users);
router.post('/create', userController.postCreate);
router.get('/create', userController.getCreate);
router.get('/delete', userController.delete)
router.put('/:id', userController.edit);










module.exports = router;