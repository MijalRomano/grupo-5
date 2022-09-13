const deleteController = {
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
Delete: (req, res) => {
    return res.render('delete'); },

    create:  (req, res) => {
        return res.render('create'); },

        edit:  (req, res) => {
            return res.render('edit'); }

 }

module.exports = deleteController;
