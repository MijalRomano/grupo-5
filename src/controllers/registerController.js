const registerController = { 
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
Userdelete: (req, res) => {
return res.render('userDelete'); },

Usercreate:  (req, res) => {
    return res.render('Usercreate'); },

    edit:  (req, res) => {
        return res.render('edit'); },
        create:  (req, res) => {
            return res.render('create'); }

} 
    
    
    module.exports = registerController;