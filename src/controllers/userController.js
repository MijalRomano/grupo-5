const controller= {
   user: (req, res) => {
       return res.render('user/user');

   },
   edit: (req, res) => {

        return res.render('user/edit');
   },
   delete: (req, res) => {
        return res.render('user/delete');  
    },

   create: (req, res) => {
        return res.render('user/create');  

    },
}
module.exports= controller;