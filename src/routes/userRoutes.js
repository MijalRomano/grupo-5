  const express = require('express');
const multer = require ("multer");
const path = require("path");
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, path.join(__dirname, "../../public/profilePhotos"))
    },

    filename: function (req, file, cb){
        cb(null,  Date.now() + "-" +  file.originalname);
    }

});

const upload = multer({ storage: storage });

const registerValidaciones =[
    body('nombre').notEmpty().withMessage('Este campo es obligatorio'), 
    body('apellido').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Por favor ingrese un email válido'),
    body('contrasenia').notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({ min:4  }).withMessage('La contraseña debe ser mas larga'),  
          body('confirmacionDeContrasenia').notEmpty().withMessage('Este campo es obligatorio').bail()
];


/* router.get('/users', userController.users);//esta */
router.post('/create', upload.single("profilePhoto"), registerValidaciones, userController.postCreate); //// procesa el registro por post
router.get('/create',guestMiddleware, userController.getCreate);//////ruta de form de registro (x get)
router.get("/logout", userController.logout);//esta
router.get("/profile", userController.profile);
router.get('/users', upload.single("profilePhoto"), userController.users);//
router.get('/delete', userController.delete);//esta
router.delete('/users/:id', userController.delete);
router.put('user/users/:id/',upload.single("profilePhoto"),  userController.putEdit);
router.get('/:id', upload.single("profilePhoto"),   userController.getEdit);// esta p editar usuario. falta q funcione
//probando edir por post
router.post('/:id', userController.putEdit);
router.get('/userDetail/:id', userController.userDetail);





/* router.post('/login', guestMiddleware, userController.user); // de invitado
router.post('/login', authMiddleware, userController.user); // apra ver si se regsitro o no
router.post('/login', userLoggedMiddleware, userController.user);//ya esta logueado.
 */
 
module.exports = router; 

 