
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { info } = require('console');


const mainController = {
    nuevohome: (req, res) => {

        return res.render('nuevohome')
    },
    header: (req, res) => {

        return res.render('partials/header')
    },

    login: (req, res) => {
        console.log(req.session);
        return res.render('login');
    },

    loginProcess: (req, res) => {
        let errores = validationResult(req);
        if (errores.isEmpty()) {

            const userData = req.body;
            const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
            const usuarios = JSON.parse(usersJSON);

            const nombreUsuario = usuarios.find(thisUser => thisUser.nombre === userData.nombre);
            const usuarioALoguear = usuarios.find(thisUser => thisUser.email === userData.email);
            if (usuarioALoguear) {
                let contraseñaCorrecta = bcryptjs.compareSync(userData.contrasenia, usuarioALoguear.contrasenia);
                if (contraseñaCorrecta) {
                    /* -antes del redireccionamiento, en caso de que el login este correcto, guardo su info en session.
                     - hago un request a session, atraves de una propiedad que la llamo userlogged donde guardo toda la info de usuarioAloguear.
                      antes de guardar la info, elimino la contraseña para q no se guarde*/
                    delete usuarioALoguear.contrasenia;
                    delete usuarioALoguear.confirmacionDeContrasenia;
                    req.session.userLogged = usuarioALoguear
                    res.redirect('/');
                } else {
                    /* res.send("el email o la contraseña no coinciden")*/
                    res.render('login', {
                        error: [
                            { msg: 'Los datos ingresados son incorrectos' }
                        ]
                    });
                }
            }
        } else {
            /*res.send("hay errores")*/

            //para enviar los errores a la vista, los agrego a la misma, con una propiedad que la nombre error, donde pido 
            // que mi variable errores se muestre como array.
            res.render('login', {
                error: errores.array(),
                datosIngresados: req.body
            });
        }


    },


    //////////////////////////////////////////////////////
    /* console.log(usuarios);
     console.log(usuarioALoguear);*/
    /*      console.log(usuarioALoguear.contrasenia, userData.contrasenia);
  **********************************************************/



    index: (req, res) => {



        //console.log('estas en home');
        // console.log(req.session);
        //le digo a la vista del home  q va a recibir los datos del user logueado.

        return res.render('index', { user: req.session.userLogged });

    },
    //////para cerrar session. 
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },




    Postregister: (req, res) => {
        return res.render('user/users');
    },
    register: (req, res) => {
        return res.render('register');
    },










    productCart: (req, res) => {
        return res.render('productCart');
    },
    Userdelete: (req, res) => {

        return res.render('delete');
    },

    Usercreate: (req, res) => {
        return res.render('create');
    },


    Useredit: (req, res) => {
        return res.render('edit');
    },

    user: (req, res) => {
        return res.render('user');
    },

    productDetail: (req, res) => {
        return res.render('productDetail');
    },

    asesoramiento: (req, res) => {
        return res.render("asesoramiento");
    },
    error: (req, res) => {
        return res.render("error");




    }, adminAdd: (req, res) => {
        return res.render("adminAdd");

    },
    adminEdit: (req, res) => {
        return res.render("adminAdd");
    },
    ayuda: (req, res) => {
        return res.render("ayuda");
    },
}


module.exports = mainController;



