const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require ("method-override");

app.use(methodOverride("_method"));
// configuracion de public
app.use(express.static("public"));

const mainRoutes = require("../src/routes/mainRoutes");
const productRoutes = require("../src/routes/productRoutes");
//const errorRoutes = require("../src/routes/errorRoutes");
const userRoutes = require("../src/routes/userRoutes");
/*const adminRoutes = require("../src/routes/adminRoutes");*/
//const adminEditRoutes = require("../src/routes/adminEditRoutes");


const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath));

//configuracion de plantillas ejs.
app.set("view engine", "ejs");


app.set('views', 'src/views');

app.set('views', path.resolve(__dirname, 'views'));

//para capturar la info q viene desde un form via post
app.use (express.urlencoded({extended: true}));
app.use(express.json());


// esto es para poner la pagina de error al final, dsp de terminar las rutas, anda
// app.use((req, res, next) => { 
//    res.status(404).render("error//")
//});


app.set("user", path.join(__dirname, "./user"));


///////////////////////////////////que seria?
app.get('/index', function (req, res) {

    res.sendFile(path.join(__dirname, '/index'));
    res.sendFile(path.join(__dirname, '/'));
})

app.use("/", mainRoutes);
app.use("/", productRoutes);
app.use("/user", userRoutes);
//app.use("/", adminRoutes);





app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
})