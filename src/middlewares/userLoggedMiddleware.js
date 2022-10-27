function userLoggedMiddleware(req, res, next) {

    next();

    if (req.session.userLogged == true) {
        res.redirect('/perfil')

    }

}


module.exports = userLoggedMiddleware;

