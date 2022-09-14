const express = require("express");
const router = express.Router();
const adminEditController = require('../controllers/adminEditController');


router.get('/adminEdit', adminEditController.adminEdit);


module.exports = router;