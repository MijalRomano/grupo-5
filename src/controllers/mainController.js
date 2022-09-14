
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
<<<<<<< HEAD
    return res.render('userDelete'); },

    create:  (req, res) => {
        return res.render('Usercreate'); },
=======
    return res.render('delete'); },

    create:  (req, res) => {
        return res.render('create'); },
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90

        edit:  (req, res) => {
            return res.render('edit'); },

 user:  (req, res) => {
    return res.render('user'); } }


module.exports = mainController;




