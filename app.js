const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const app = express();
app.use(express.static('./public'));

app.set ('view engine', 'ejs');
 

app.use("/", mainRoutes);

app.listen(3001,(req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});



