const express = require("express");
const app = express();
const path = require("path");
const productCartRoutes = require ("../src/routes/productCartRoutes");
const productDetailRoutes = require ("../src/routes/productDetailRoutes");
const mainRoutes = require("../src/routes/mainRoutes");
const productRoutes = require ("../src/routes/productRoutes");
const errorRoutes = require ("../src/routes/errorRoutes");


const publicPath= path.resolve(__dirname, "../public")
app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));



app.use("/", mainRoutes);
app.use("/", productRoutes);
app.use("/", productCartRoutes );
app.use("/", productDetailRoutes);
app.use("/", errorRoutes);


app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
})