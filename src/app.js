const express = require("express");
const app = express();
const path = require("path");
const productCartRoutes = require ("../src/routes/productCartRoutes");
const productDetailRoutes = require ("../src/routes/productDetailRoutes");
const mainRoutes = require("../src/routes/mainRoutes");
const productRoutes = require ("../src/routes/productRoutes");
const errorRoutes = require ("../src/routes/errorRoutes");
const createRoutes = require ("../src/routes/createRoutes");
const editRoutes = require ("../src/routes/editRoutes");
const deleteRoutes = require ("../src/routes/deleteRoutes");
const userRoutes = require ("../src/routes/userRoutes");

const publicPath= path.resolve(__dirname, "../public")
app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.set("user", path.join(__dirname, "./user"));

app.get('/index', function(req, res){

    res.sendFile(path.join(__dirname,  '/index'));
    res.sendFile(path.join(__dirname,'/'));
})


app.use("/", mainRoutes);
app.use("/", productRoutes);
app.use("/", productCartRoutes );
app.use("/", productDetailRoutes);
app.use("/", errorRoutes);
app.use("/", createRoutes);
app.use("/", editRoutes);
app.use("/", deleteRoutes);
app.use("/", userRoutes);

app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
})