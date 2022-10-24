//1. Guardar al usuario en la DB.json.
//2. Buscar al usuario que se quiere loguear por su email.
//3. Buscar a un usuario por su ID.4
//4. Editar la informacion de un usuario.
//5. Eliminar a un usuario de la DB.
const fs = require('fs');
const User = {
    fileName:'./dataBase/usersDB.json',
    
    getData: function () {
        return fs.readFileSync(this.fileName, 'utf-8');
    },

    create: function (userData){
    }
}

console.log(User.getData);