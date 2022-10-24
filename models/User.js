const fs = require('fs');
const path = require('path');
const User = {
    fileName: '../src/data/usersDB.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(path.join(__dirname, this.fileName), 'utf-8'));
    },

generateId: function () {
   let allUsers = this.findAll();
   let lastUser = allUsers.pop();
 return lastUser=id + 1;
},


    findAll: function name() {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findField: function (field, text) {
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
     let allUsers = this.getData();
    allUsers.push(userData);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    return true;
    }
}
console.log(User.generateId());