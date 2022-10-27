const express = require('express');
const router = express.Router();
const multer = require("multer");
const mainController = require('../controllers/mainController');
const { body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');


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


//validaciones para el login
const loginValidaciones =[
    body('nombre').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Por favor ingrese un email válido'),
    body('contrasenia').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({ min:4  }).withMessage('La contraseña no es correcta'),
]; 

// en el get (form de login) agregamos mw. para impedir q un usuario ya logueado vuelva al login
//en el post (procesamiento de login) implementamos la constante de validaciones como middelware 

router.get('/login',guestMiddleware , mainController.login);
router.post('/login',loginValidaciones, mainController.loginProcess);

/////checkear que sessionn este funcionando
/*router.get('/check', function(req, res){
if (req.session.usuarioLogueado==false){
    res.send('no estas logueado')
} else {
    res.send(req.session.usuarioLogueado.email +" estas logueado " )
}
}),*/
//cerrar session
router.get('/user/logout', mainController.logout);

router.get('/', mainController.index);
router.get('/user', mainController.user);
 //que seria?
/*router.get('/register', mainController.register); */
router.post('/user/users', mainController.Postregister);
router.get("/asesoramiento", mainController.asesoramiento);
router.get('/error', mainController.error);
router.get('/ayuda', mainController.ayuda);

module.exports = router;
