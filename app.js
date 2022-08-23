const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/images/styles.css'));
});

app.listen(3001,  (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'http://localhost:3001/login'));
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'http://localhost:3001/register'));
});