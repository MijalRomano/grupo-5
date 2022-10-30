function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {      //si esta logueado

        return res.redirect('/');   // que le redireccione al home. ( con sus datos)
    }

    next();                            // caso contrario, sigue navegando como inivtado.
}

module.exports = guestMiddleware;