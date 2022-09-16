const adminEditController = {
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
    return res.render('admin/delete'); },

    create:  (req, res) => {
        return res.render('admin/create'); },

        edit:  (req, res) => {
            return res.render('admin/edit'); },

            adminAdd:  (req, res) => {
                return res.render('admin/adminAdd'); },

                adminEdit:  (req, res) => {
                    return res.render('admin/adminEdit'); },


 }

module.exports = adminEditController;
