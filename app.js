const express = require('express');
const path = require('path');
let productsRouters = require ('./routes/productsRouters.js');
let router = express.Router();
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/register.html'));
})

app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.get('/productCart', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/productCart.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/images/styles.css'));
});

app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/login'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/register'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/productCart'));

});
