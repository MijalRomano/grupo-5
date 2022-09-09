const express = require("express");
const app = express();

const productCartRoutes = require ("../src/routes/productCartRoutes");
const productDetailRoutes = require ("../src/routes/productDetailRoutes");
const mainRoutes = require("../src/routes/mainRoutes");
const loginRoutes = require("../src/routes/loginRoutes");
const registerRoutes = require("../src/routes/registerRoutes");
app.use(express.static("./public"));

app.set ('views engine', 'ejs');



app.use("/", mainRoutes);
app.use("/", loginRoutes);
app.use("/", registerRoutes);

app.use("/", productCartRoutes );
app.use("/", productDetailRoutes);


app.listen(3001, (req, res) => {
    console.log('Servidor escuchando en el puerto 3001');
});

