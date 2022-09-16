const mainController = {
    index: function (req, res) { res.render('index') }
},
register: (req, res) => {
    return res.render('register')}
},
login: (req, res) => {
    return res.render('login')}
}
module.exports = mainController