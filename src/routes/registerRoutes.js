const express = require ("express")
const router = express.Router();

const registerController = require('../controllers/registerController')
router.get('/login',registerController.login);
router.get('/delete', registerController.Userdelete);
router.get('/edit', registerController.edit);
router.get('/Usercreate', registerController.Usercreate);
router.get('/productCart', registerController.productCart);
router.get('/create', registerController.register);





module.exports = router;