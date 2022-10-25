function authMiddleware(req, res, next){
    next();
if (req.userLog != undefined){
} else {
res.send ('Tenes que registrarte!')
}

}

module.exports = logMiddleware;


