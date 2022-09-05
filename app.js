const express = require('express');
const mainRoutes = require ("./Routes/mainRoutes")
const path = require('path');



//let router = express.Router();

const app = express();
app.set("view engine","ejs");

app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});






