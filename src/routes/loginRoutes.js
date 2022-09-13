const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login',loginController.login);
router.get('/delete', loginController.Userdelete);
router.get('/edit', loginController.edit);
router.get('/Usercreate', loginController.Usercreate);
router.get('/productCart', loginController.productCart);
router.get('/create', loginController.register);

module.exports = router;