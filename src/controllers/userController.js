const fs = require('fs');
const path = require('path');

const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
const users = JSON.parse(usersJSON);



const controller = {
    users: (req, res) => {

        return res.render('user/users', { users: users })

    },
    edit: (req, res) => {

        return res.render('user/edit');
    },
    delete: (req, res) => {
        return res.render('user/delete');
    },

    postCreate: (req, res) => {

        const usuarioData = req.body;
        users.push(usuarioData);

        // al nuevo usuario que vamos a pushear le agregamos un un numero mas del id anterior, si anres era 2 el nuevo es 3.   
        usuarioData.id = users[users.length - 1].id + 1;
        usuarioData.id = Number(usuarioData.id);

        //

        //esto 2 reglones para conectarlo con el json y q aparezcan ahi los usuarios nuevos.
        const usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, "../data/usersDB.json"), usersJSON, "utf-8");
        console.log(usuarioData)
        
        res.redirect("./users")



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