const controller= {
   user: (req, res) => {
       return res.render('user');

   },
   edit: (req, res) => {
        return res.render('edit');
   },
   delete: (req, res) => {
        return res.render('delete');  
    },

   create: (req, res) => {
        return res.render('create');  
    },
}
module.exports= controller;