//en que pagina entran los usuarios
const fs = require('fs');
function logMiddleware(req, res, next){
fs.writeFileSync('log.txt', 'se ingreso en la pagina' + req.url);

next();

}

module.exports = logMiddleware;