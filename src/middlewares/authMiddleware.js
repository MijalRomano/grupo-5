function authMiddleware(req, res, next) {

    if (req.session.userLogged != undefined) {
        next();
    } else {
        return res.redirect('login');
    }

};

module.exports = authMiddleware;

/* una vez q tengamos la vista de profile en funcionamiento c sus rutas y controler, hay q requerir este m.w 
en el archivo route donde este ,  y agregarlo como mw en la route get del profile, entre la ruta y el controler*/