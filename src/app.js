const express = require("express");
const app = express();
const path = require("path");
const productCartRoutes = require ("../src/routes/productCartRoutes");
const productDetailRoutes = require ("../src/routes/productDetailRoutes");
const mainRoutes = require("../src/routes/mainRoutes");
const productRoutes = require ("../src/routes/productRoutes");
const errorRoutes = require ("../src/routes/errorRoutes");

const userRoutes = require ("../src/routes/userRoutes");

const adminAddRoutes = require ("../src/routes/adminAddRoutes");
const adminEditRoutes = require ("../src/routes/adminEditRoutes");




const publicPath= path.resolve(__dirname, "../public")
app.use(express.static(publicPath));


app.set("view engine", "ejs");


app.set('views', 'src/views');

app.set('views', path.resolve(__dirname, 'views'));


// esto es para poner la pagina de error al final, dsp de terminar las rutas, anda
// app.use((req, res, next) => { 
//    res.status(404).render("error//")
//});









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
app.use("/user", userRoutes);
app.use("/", adminAddRoutes);
app.use("/", adminEditRoutes);





app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
})