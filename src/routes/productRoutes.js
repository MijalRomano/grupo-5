const express = require("express")
const router = express.Router();

const productController = require('../controllers/productController');


router.get('/product', productController.productos);
router.get('/productCart', productController.productCart);
router.get('/product', productController.productCart);
router.get('/productCart', productController.productCart);
router.get('/productCart', productController.productCart);
router.get('/listaprod', productController.listaprod);


//CRUD

router.get("/listaprod", productController.listdeproductos); //listado de productos.
router.get("/products/productCreate", productController.formulariosdecreaciondeproductos); // formularios de creacion de productos
router.get("/products/productDetail/:id", productController.Detalledeunproductoparticular); // Detalle de un producto particular
router.post("/listaprod", productController.Accióndecreaciónadondeseenvíaelformulario); // Acción de creación (a donde se envía el formulario) 
router.get("/products/:id/productEdit", productController.Formulariodeedicióndeproductos); // Formulario de edición de productos
router.put("/listaprod/:id", productController.Accióndeediciónadondeseenvíaelformulario); // Acción de edición (a donde se envía el formulario):
router.post("/listaprod/:id", productController.acciondeborrado);




module.exports = router;