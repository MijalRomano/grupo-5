const express = require("express");
const app = express();
const productCartRoutes = require ("./routes/productCartRoutes");
const productDetailRoutes = require ("./routes/productDetailRoutes");
app.use(express.static("./public"));

app.set ('views engine', 'ejs');


app.use("/", productCartRoutes);
app.use("/", productDetailRoutes);


app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});

