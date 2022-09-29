const express = require("express")
const router = express.Router();

const productController = require('../controllers/productController');


router.get('/product', productController.productos);
router.get('/productDetail/:id', productController.productDetail);
router.get('/productCart', productController.productCart);
router.get('/product', productController.productCart);
router.get('/productCart', productController.productCart);
router.get('/productCart', productController.productCart);
router.get('/listaprod', productController.listaprod);

//CRUD

router.get("/product", productController.listdeproductos); //listado de productos.
router.get("/product/create", productController.formulariosdecreaciondeproductos); // formularios de creacion de productos
router.get("/product/:id", productController.Detalledeunproductoparticular); // Detalle de un producto particular
router.post("/product", productController.Accióndecreaciónadondeseenvíaelformulario); // Acción de creación (a donde se envía el formulario) router.get("/product/:id/edit", productController.Formulariodeedicióndeproductos); // Formulario de edición de productos
router.put("/product/:id", productController.Accióndeediciónadondeseenvíaelformulario); // Acción de edición (a donde se envía el formulario):
router.delete("/product/:id", productController.acciondeborrado);




module.exports = router;