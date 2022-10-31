const express = require("express")
const router = express.Router();
const multer = require("multer");
const path = require ("path");
const productController = require('../controllers/productController');


router.get('/product', productController.productos); //lista de prod p usuario
router.get('/productCart', productController.productCart); //carrito 

router.get('/listaprod', productController.listaprod); //lista prod p admin

const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, path.join(__dirname, "../../public/productPhotos"))
    },

    filename: function (req, file, cb){
        cb(null,  Date.now() + "-" +  file.originalname);
    }

});

const upload = multer({ storage: storage });




//CRUD

router.get("/listaprod", upload.single("productPhoto"),productController.listdeproductos); //listado de productos.
router.get("/products/productCreate", upload.single("productPhoto"), productController.formulariosdecreaciondeproductos); // formularios de creacion de productos
router.get("/products/productDetail/:id", productController.Detalledeunproductoparticular); // Detalle de un producto particular
router.post("/listaprod", upload.single("productPhoto"), productController.Accióndecreaciónadondeseenvíaelformulario); // Acción de creación (a donde se envía el formulario) 
router.get("/products/:id/productEdit",  upload.single("productPhoto"), productController.Formulariodeedicióndeproductos); // Formulario de edición de productos (la vista)
router.put("/listaprod/:id", upload.single("productPhoto"), productController.Accióndeediciónadondeseenvíaelformulario); // Acción de edición (a donde se envía el formulario):

//router.put("/:id", upload.single("productPhoto"), productController.AcciónPrueba); // Acción de edición (a donde se envía el formulario):

router.delete("/listaprod/:id", productController.acciondeborrado);





module.exports = router;