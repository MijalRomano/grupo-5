const express = require('express');
const app = express();
const router = express.Router();
app.use(express.static('./public'));
app.set ('view engine', 'ejs');

const mainRoutes = require("../grupo-5-finour-joyas/routes/mainRoutes");

app.use("/", mainRoutes);
app.use("/", loginRoutes);
app.use("/", registerRoutes);

app.listen(3001,(req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});

