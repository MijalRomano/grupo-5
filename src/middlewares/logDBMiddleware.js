//que deje un registro de rutas que creen cosas en la base de datos cuando se agrega un nproducto poster un usuario.

const fs = require('fs');
function logDBMiddleware(req, res, next){
fs.writeFileSync('logDB.txt', 'se creo un registro al ingresar en la pagina' + req.url);

next();

}

module.exports = logDBMiddleware;

