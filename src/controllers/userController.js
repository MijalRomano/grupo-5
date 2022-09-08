const router = require("../routes/userRoutes");

const userController = {
   user: (req, res) => {
        return res.render('user');

    },
    editUser: (req, res) => {
        return res.render('edit');
    },
    deleteUser: (req, res) => {
        return res.render('delete');  
    },

    createUser: (req, res) => {
        return res.render('create');  
    },
}


module.exports= router;