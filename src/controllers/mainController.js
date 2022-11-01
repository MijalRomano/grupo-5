
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { info } = require('console');
const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
const productos = JSON.parse(productosJSON);

const mainController = {
    nuevohome: (req, res) => {

        return res.render('nuevohome',{productos:productos});
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
                /*en caso de q no coincide contraseña con email ingresado*/
                    res.render('login', {
                        error: [
                            { msg: 'Los datos ingresados son incorrectos' }
                        ]
                    });
                }
            }else{  /*en caso de q no encuentra al email registrado en la db*/
                res.render('login', {
                    error: [
                        { msg: 'Aun no estas registrado' }
                    ]
                });
                 }
        } else {  /*en caso de q hay errores de validacion */
            
            //para enviar los errores a la vista, los agrego a la misma, con una propiedad a la que nombre 'error', donde pido 
            // que mi variable errores se muestre como array. y pido que los datos ingresados anteriormente por el usuario persistan.
            res.render('login', {
                error: errores.array(),
                datosIngresados: req.body,
            });
        }


    },



    index: (req, res) => {

        //le digo a la vista del home  q va a recibir los datos del user logueado.

        return res.render('index', { user: req.session.userLogged });

    },
    //para cerrar session. 
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },



    productCart: (req, res) => {
        return res.render('productCart');
    },
    
    


    asesoramiento: (req, res) => {
        return res.render("asesoramiento");
    },
    error: (req, res) => {
        return res.render("error");

    },
    admin: (req, res) => {
        return res.render("admin/admin");
    },
    ayuda: (req, res) => {
        return res.render("ayuda");
    },

    productosHome: (req, res) => {
    const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
    const productos = JSON.parse(productosJSON);
    const theProduct = productos.find(thisProduct => thisProduct.id === productId);

    res. render ('/', {products:productos})
},

 }


module.exports = mainController;



