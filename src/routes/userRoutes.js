const express = require('express');
const multer = require ("multer");
const path = require("path");
const router = express.Router();
const userController = require('../controllers/userController');
const logDBMiddleware = require('../middlewares/logDBMiddleware');
const logMiddleware = require('../middlewares/logMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/user/perfil', userRoutes, userController)
const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, path.join(__dirname, "../../public/profilePhotos"))
    },

    filename: function (req, file, cb){
        cb(null,  Date.now() + "-" +  file.originalname);
    }

});

const upload = multer({ storage: storage });


router.get('/user', userController.user);
router.post('/user', userController.user);
router.get('/users', userController.users);
router.post('/create', upload.single("profilePhoto"), userController.postCreate);
router.get('/create', userController.getCreate);
router.get('/delete', userController.delete)
router.put('/:id', userController.edit);
router.get('/:id', userController.edit);
router.get('/userDetail/:id', userController.userDetail);


router.get('/user/create', userController.user);
router.post('/user/create', logDBMiddleware, userController.user);
router.post('/user/create', logMiddleware, userController.user);
router.post('/login', authMiddleware, userController.user);









module.exports = router;