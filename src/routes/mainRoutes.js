const express = require('express');
const router = express.Router();
const multer = require("multer");
const mainController = require('../controllers/mainController');



const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, path.join(__dirname, "../../public/profilePhotos"))
    },

    filename: function (req, file, cb){
        cb(null,  Date.now() + "-" +  file.originalname);
    }

});

const upload = multer({ storage: storage });



router.get('/delete', mainController.Userdelete);
router.get('/edit', upload.single("profilePhoto"), mainController.Useredit);

router.get('/Usercreate', mainController.Usercreate);

router.get('/create', mainController.Usercreate);

router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
router.get('/login', mainController.login);
router.get('/', mainController.index);
router.get('/user', mainController.user);
router.get('/register', mainController.register);
router.post('/user/users', mainController.Postregister);
router.get("/asesoramiento", mainController.asesoramiento); 
router.get('/error', mainController.error);
router.get('/ayuda', mainController.ayuda);
module.exports = router;

