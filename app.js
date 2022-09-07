const express = require('express');

const mainRoutes = require ("./Routes/mainRoutes");
const productCartRouter = require ("./Routes/productCartRouter");
const productsRoutes = require ("./Routes/productsRoutes");


const path = require('path');



//let router = express.Router();

const app = express();
app.set("view engine","ejs");

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', productCartRouter);
app.use('/', productsRoutes);

app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});






