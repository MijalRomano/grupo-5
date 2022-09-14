const express = require("express");
const app = express();
const path = require("path");
const productCartRoutes = require ("../src/routes/productCartRoutes");
const productDetailRoutes = require ("../src/routes/productDetailRoutes");
const mainRoutes = require("../src/routes/mainRoutes");
const productRoutes = require ("../src/routes/productRoutes");
const errorRoutes = require ("../src/routes/errorRoutes");
<<<<<<< HEAD
const userRoutes = require ("../src/routes/userRoutes");


=======
const createRoutes = require ("../src/routes/createRoutes");
const editRoutes = require ("../src/routes/editRoutes");
const deleteRoutes = require ("../src/routes/deleteRoutes");
const userRoutes = require ("../src/routes/userRoutes");
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90

const publicPath= path.resolve(__dirname, "../public")
app.use(express.static(publicPath));

app.use(mainRoutes);
app.use("/user", userRoutes);

app.set("view engine", "ejs");

<<<<<<< HEAD
app.set('views', 'src/views');

app.set('views', path.resolve(__dirname, 'views'));


// esto es para poner la pagina de error al final, dsp de terminar las rutas, anda
// app.use((req, res, next) => { 
//    res.status(404).render("error//")
//});








=======
app.set("user", path.join(__dirname, "./user"));

app.get('/index', function(req, res){

    res.sendFile(path.join(__dirname,  '/index'));
    res.sendFile(path.join(__dirname,'/'));
})
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90


app.use("/", mainRoutes);
app.use("/", productRoutes);
app.use("/", productCartRoutes );
app.use("/", productDetailRoutes);
app.use("/", errorRoutes);
<<<<<<< HEAD
app.use("/user", userRoutes);


=======
app.use("/", createRoutes);
app.use("/", editRoutes);
app.use("/", deleteRoutes);
app.use("/", userRoutes);
>>>>>>> 12bcaf6e7d048a0f215b7020b1fbd7c5f8d9af90

app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
})