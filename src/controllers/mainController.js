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
        return res.render('porductCart');
    },
}

module.exports = mainController;



