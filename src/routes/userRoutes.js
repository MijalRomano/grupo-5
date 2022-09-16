const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/user', userController.user);

router.get('/create', userController.create);
router.get('/delete', userController.delete)
router.get('/edit', userController.edit);



module.exports = router;