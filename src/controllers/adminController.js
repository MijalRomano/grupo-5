const adminAddController = {
    index: (req, res) => {
        return res.render('admin/index');

    },
   register: (req, res) => {
        return res.render('admin/register');
    },
    login: (req, res) => {
        return res.render('admin/login');
    },
    productCart: (req, res) => {
        return res.render('admin/productCart');
},
Delete: (req, res) => {
    return res.render('admin/delete'); },

    create:  (req, res) => {
        return res.render('admin/create'); },

        edit:  (req, res) => {
            return res.render('admin/edit'); },

//Add
        admin:  (req, res) => {
                return res.render('admin/adminAdd'); },
                
//Edit
                admin:  (req, res) => {
                    return res.render('admin/admin/Edit'); }


 }

module.exports = adminAddController;
