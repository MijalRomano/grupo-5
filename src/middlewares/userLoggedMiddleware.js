function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged= false;
    if (req.session.userLogged) {
        res.locals.isLogged= true;
        res.locals.userLogged= req.session.userLogged;
    } next();

}


module.exports = userLoggedMiddleware;

/*pasamos variables para poder ser usadas en distintas vistas, para eso pasamos lo q hay en session a la variable global
user logged*/