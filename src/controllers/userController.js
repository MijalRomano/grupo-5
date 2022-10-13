const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
const usuarios = JSON.parse(usersJSON);



const controller = {
    users: (req, res) => {

        return res.render('user/users', { users: usuarios })

    },
    edit: (req, res) => {

        return res.render('user/edit');
    },
    delete: (req, res) => {
        return res.render('user/delete');
    },

    postCreate: (req, res) => {

        const nuevoUsuario = {
            id: Date.now(),
            email: req.body.email,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            profilePhoto: "./profilePhotos/" + req.file.filename,
           contrasenia: req.body.contrasenia,
            confirmacionDeContrasenia: req.body.confirmacionDeContrasenia,
            terminosaceptados: req.body.terminosaceptados,
            contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            confirmacionDeContrasenia: bcryptjs.hashSync(req.body.confirmacionDeContrasenia, 10),

        };
        usuarios.push(nuevoUsuario);
        //esto 2 reglones para conectarlo con el json y q aparezcan ahi los usuarios nuevos.
        const usuariosActualizadosJSON = JSON.stringify(usuarios);

        fs.writeFileSync(path.join(__dirname, "../data/usersDB.json"), usuariosActualizadosJSON, "utf-8");
        console.log(usuarios);
res.redirect("/user/users");
    },





    userDetail: (req, res) => {


        const id = req.params.id

        // importamos el array de productos ya existente y lo taducimos a Json 
        const usuariosJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
        const usuarios = JSON.parse(usuariosJSON);

        const usuarioPedido = usuarios.find(usuarioActual => usuarioActual.id == id);
        res.render("user/userDetail", {
            email: usuarioPedido.email,
            nombre: usuarioPedido.nombre,
            apellido: usuarioPedido.apellido,
            contrasenia: usuarioPedido.contrasenia,
            confirmacionDeContrasenia: usuarioPedido.confirmacionDeContrasenia,
            terminosaceptados: usuarioPedido.terminosaceptados,
            profilePhoto: usuarioPedido.profilePhoto
            
        });



        return res.render('user/userDetail');


    },




    user: (req, res) => {
        return res.render('user/user');


    },
    getCreate:
        (req, res) => {
            return res.render('user/create');




        }
}
module.exports = controller;