function authMiddleware(req, res, next){
    next();
if (req.usuarioLogueado != undefined){
} else {
res.send ('Tenes que registrarte!')
}

}

module.exports = authMiddleware;

