const express= require('express');

const path = require('path');

const app = express();

app.use(express.static('public'))

app.listen(3001, function(){
    console.log('🚀escuchando en el puerto 3001');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});
