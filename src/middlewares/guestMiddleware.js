function guestMiddleware (req, res, next) {
    if (req.usuariologueado) {
        
  return res.redirect('/login');
    }

    next();
}

module.exports = guestMiddleware;