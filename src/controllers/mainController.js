
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');


/*let todosLosUsuarios= usuarios;*/

/*
findByeField=function(field,text){ 
    let usuarioBuscado= todosLosUsuarios.find(oneUser=> oneUser[field]===text);
    return usuarioBuscado;
}
*/
const mainController = {
    login: (req, res) => {
        return res.render('login');
    },

    loginProcess: (req, res) => {
        const userData = req.body;
        const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
        const usuarios = JSON.parse(usersJSON);

        const usuarioLogueado = usuarios.find(thisUser => thisUser.email === userData.email);
        if (usuarioLogueado) {
            let contraseñaCorrecta = bcryptjs.compareSync(userData.contrasenia, usuarioLogueado.contrasenia);
            if (contraseñaCorrecta) {
                /*res.send("bienvenido");*/
                res.redirect ('/');
            } else {
               /* res.send("el email o la contraseña no coinciden")*/
               res.redirect('login');
            }
        }
        /*
        const usuarioLogueado = usuarios.find(thisUser => thisUser.email ===userData.email);
        const contraseñaCorrecta= bcryptjs.compareSync(userData.contrasenia, usuarioLogueado.contrasenia);
        console.log(contraseñaCorrecta);
        if (contraseñaCorrecta){
            res.send("correcto")
        }else{
            res.send("el email o la contraseña no coinciden")
        };
        */


        /*console.log(usuarios);
        console.log(usuarioLogueado);*/
        console.log(usuarioLogueado.contrasenia, userData.contrasenia);



    },
    index: (req, res) => {
        return res.render('index');

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




