const controller= {
   user: (req, res) => {
       return res.render('user/user');

   },
   edit: (req, res) => {
<<<<<<< HEAD
        return res.render('user/edit');
   },
   delete: (req, res) => {
        return res.render('user/delete');  
    },

   create: (req, res) => {
        return res.render('user/create');  
=======
        return res.render('edit');
   },
   delete: (req, res) => {
        return res.render('delete');  
    },

   create: (req, res) => {
        return res.render('create');  
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90
    },
}
module.exports= controller;