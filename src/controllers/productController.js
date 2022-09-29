const fs = require('fs');
const path = require('path');

const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
const productos = JSON.parse(productosJSON);

const productController = {
    
    listaprod: (req, res) => {
        return res.render("listaprod", {  productos: productos  });
         
    },

    productCart: (req, res) => {
        return res.render("productCart");
    },

    productDetail: (req, res) => {
        return res.render("productDetail");
    },
    productEdit: (req, res) => {
        return res.render("productEdit");
    },
    productCreate: (req, res) => {
        return res.render("productCreate");
    },
    productDelete: (req, res) => {
        return res.render("productDelete");
    },

    productos: (req, res) => {
        return res.render("product");
    },

    //CRUD
    listdeproductos: function (req, res) {
        res.render("/product");

    },
    formulariosdecreaciondeproductos: function (req, res) {
        res.render("/product/create");
    },
    Detalledeunproductoparticular:
        function (req, res) {
            res.render("/product/:id");
        },


    Accióndecreaciónadondeseenvíaelformulario: function (req, res) {
        res.render("/product");
    },

    Formulariodeedicióndeproductos: function (req, res) {
        res.render("/product/:id/edit")
    },

    Accióndeediciónadondeseenvíaelformulario: function (req, res) {
        res.render("/product/:id")
    },

    acciondeborrado: function (req, res) {
        res.render("/product/:id")
    }
}






module.exports = productController;