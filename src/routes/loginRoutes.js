const express = require("express");
const router = express.router();

const mainController = require('../controllers/mainController');


router.get('/login',mainController.login);



module.exporrts = router;