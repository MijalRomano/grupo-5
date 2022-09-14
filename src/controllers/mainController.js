
const mainController = {
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
delete: (req, res) => {

    return res.render('delete'); },

    create:  (req, res) => {
        return res.render('create'); },


        edit:  (req, res) => {
            return res.render('edit'); },

 user:  (req, res) => {
    return res.render('user'); } }


module.exports = mainController;




