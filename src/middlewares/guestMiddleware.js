function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {

        return res.redirect('/');   /*en realidad deberia mostrar el profile, peromientras lo hacemos enhome*/
    }

    next();
}

module.exports = guestMiddleware;