const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminAddController');


router.get('/adminAdd', adminController.adminAdd);
router.post('/adminAdd', adminController.adminAdd);
router.get('/adminEdit', adminController.adminEdit);
module.exports = router;