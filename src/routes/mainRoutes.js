const express = require('express');
const router = express.Router();
const multer = require("multer");
const mainController = require('../controllers/mainController');
const { body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, path.join(__dirname, "../../public/profilePhotos"))
    },

    filename: function (req, file, cb){
        cb(null,  Date.now() + "-" +  file.originalname);
    }
    
});

const upload = multer({ storage: storage });

//validaciones para el login
const loginValidaciones =[
    
    body('email').notEmpty().withMessage('Ingrese su correo electrónico').bail()
        .isEmail().withMessage('Por favor ingrese un email válido'),
    body('contrasenia').notEmpty().withMessage('Ingrese su contraseña').bail()
        .isLength({ min:4  }).withMessage('La contraseña no es correcta'),
]; 

/*router.get("/nuevohome", mainController.nuevohome);*/
router.get("/partials/header", mainController.header);
/* router.get('/edit', upload.single("profilePhoto"), mainController.Useredit); */
router.get('/productCart',authMiddleware, mainController.productCart);

// en el get (form de login) agregamos mw. para impedir q un usuario ya logueado vuelva al login.
//en el post (procesamiento de login) implementamos la constante de validaciones como middelware .

router.get('/login',guestMiddleware , mainController.login);
router.post('/login',loginValidaciones, mainController.loginProcess);
//cerrar session
router.get('/logout', mainController.logout);
router.get('/', mainController.index);
router.get("/asesoramiento", mainController.asesoramiento);
router.get('/error', mainController.error);
router.get('/ayuda', mainController.ayuda);
router.get('/admin/admin', mainController.admin);
/*router.get('/', mainController.productosHome);
router.post('/', mainController.productosHome);*/
module.exports = router;
