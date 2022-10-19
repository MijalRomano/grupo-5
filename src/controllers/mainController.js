



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




}


module.exports = mainController;




