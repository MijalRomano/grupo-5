function guestMiddleware(req, res, next) {
    if (req.session.usuariologueado) {

        return res.redirect('/login');
    }

    next();
}

module.exports = guestMiddleware;