const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const mainController = require('../controllers/mainController');

/*router.get('/delete', mainController.Userdelete);
router.get('/edit', mainController.Useredit);

router.get('/Usercreate', mainController.Usercreate);

router.get('/create', mainController.Usercreate);

router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
*/


//validaciones para el login
const loginValidaciones = [
    body('nombre').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Por favor ingrese un email válido'),
    body('contrasenia').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({ min: 2 }).withMessage('La contraseña no es correcta'),
]



//en el post del login implementamos la constante de validaciones como middelware 
router.get('/login', mainController.login);
router.post('/login',loginValidaciones, mainController.loginProcess);




router.get('/', mainController.index);
router.get('/user', mainController.user); //que seria?
/*router.get('/register', mainController.register); */
router.post('/user/users', mainController.Postregister);// que seria?
router.get("/asesoramiento", mainController.asesoramiento);
router.get('/error', mainController.error);
router.get('/ayuda', mainController.ayuda);

module.exports = router;

