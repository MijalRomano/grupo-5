  const express = require('express');
const multer = require ("multer");
const path = require("path");
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');

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
router.post('/create', upload.single("profilePhoto"), userController.postCreate);  //// procesa el registro por post
router.get('/create',guestMiddleware, userController.getCreate)///////ruta de form de registro (x get)
router.get('/delete', userController.delete);
router.delete('/users/:id', userController.delete);
router.put('/:id',upload.single("profilePhoto"), userController.putEdit);
router.get('/:id', userController.getEdit);
//probando edir por post
router.post('/:id', userController.putEdit);
router.get('/userDetail/:id', userController.userDetail);


router.post('/login', guestMiddleware, userController.user);
router.post('/login', authMiddleware, userController.user);
router.post('/login', userLoggedMiddleware, userController.user);

 
module.exports = router; 

 