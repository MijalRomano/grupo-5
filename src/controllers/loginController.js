const fs= require('fs');


const loginController = {


    index: (req, res) => {
        return res.render('index');

    },
   register: (req, res) => {
        return res.render('register');
    },
    login: (req, res) => {
        return res.render('login');
    },
    productCart: (req, res) => {
        return res.render('productCart');
},
Userdelete: (req, res) => {
    return res.render('userDelete'); },

    Usercreate:  (req, res) => {
        return res.render('Usercreate'); },

        edit:  (req, res) => {
            return res.render('edit'); }

 }
console.log(loginController.getData);
console.log(loginController.findByField("email","mush@gmail.com"));
console.log()
module.exports = loginController;

