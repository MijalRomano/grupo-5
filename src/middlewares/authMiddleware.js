function authMiddleware(req, res, next){
    next();
if (req.session.usuarioLogueado != undefined){
} else {
res.send ('Tenes que registrarte!')
}

}

module.exports = authMiddleware;

