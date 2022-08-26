const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', function(req, res){

    res.sendFile(path.join(__dirname,  '/views/register.html'));
})

app.get('/login', function(req, res){

    res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.get('/productCart', function(req, res){

    res.sendFile(path.join(__dirname, '/views/productCart.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/images/styles.css'));
});

app.listen(3001,  (req, res) => {
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