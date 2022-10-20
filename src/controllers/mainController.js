
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
const usuarios = JSON.parse(usersJSON);

let todosLosUsuarios= usuarios;

/*
findByeField=function(field,text){ 
    let usuarioBuscado= todosLosUsuarios.find(oneUser=> oneUser[field]===text);
    return usuarioBuscado;
}
*/
const mainController = {
    index: (req, res) => {
        return res.render('index');

    },
    Postregister: (req, res) => {
        return res.render('user/users');
    },
    register: (req, res) => {
        return res.render('register');
    },
    login: (req, res) => {
        return res.render('login');
    },
   
 loginProces:(req,res)=>{ 
/*
  let usuarioLogueado = todosLosUsuarios.findByeField('email', req.body.email);
  if (usuarioLogueado){
   let contraseñaCorrecta= bcryptjs.compareSync(req.body.contraseña, usuarioLogueado.contraseña);
   if (contraseñaCorrecta){
    res.send ("inicio sesion")
   } else {
    return res.send ("el email o la contraseña son incorrectas")
   }
  }
   },*/



   const UsuarioLogueado = todosLosUsuarios.find(thisUser => thisUser.email ===req.body.email);
   if (UsuarioLogueado){
    let contraseñaCorrecta= bcryptjs.compareSync(req.body.contraseña, usuarioLogueado.contrasenia);;
    if (contraseñaCorrecta){
        res.send ("inicio sesion");
        } else{ 
            res.send ("error")
        }
    }
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




