function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged= false;                   //el usuario no esta logueado
    if (req.session.userLogged) {                  //si esta logueado 
        res.locals.isLogged= true;                  // que cambie "is logged" a verdadero
        res.locals.userLogged= req.session.userLogged;   
    } next();

}


module.exports = userLoggedMiddleware;

/*pasamos variables para poder ser usadas en distintas vistas, para eso pasamos lo q hay en session a la variable global
user logged*/