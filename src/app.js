const express = require('express');
const app = express();

const router = express.Router();
app.use(express.static('../public'));

app.set ('view engine', 'ejs');


app.listen(3001,(req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});

