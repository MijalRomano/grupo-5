const express = require("express");
const app = express();

const productCartRoutes = require ("../src/routes/productCartRoutes");
const productDetailRoutes = require ("../src/routes/productDetailRoutes");
const mainRoutes = require("../src/routes/mainRoutes");
const productRoutes = require ("../src/routes/productRoutes");



app.use(express.static("../public"));

app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use("/", productRoutes);
app.use("/", productCartRoutes );
app.use("/", productDetailRoutes);


app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
})