const express = require("express");
const router = express.Router();
const errorController = require('../controllers/errorController');

router.get('/login',errorController.login);
router.get('/delete', errorController.Userdelete);
router.get('/edit', errorController.edit);
router.get('/Usercreate', errorController.Usercreate);
router.get('/productCart', errorController.productCart);
router.get('/register', errorController.register);
router.get('/error', errorController.error);
module.exports = router;