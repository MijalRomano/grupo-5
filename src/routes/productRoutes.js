const express = require("express")
const router = express.Router();
const path = require("path");
const multer = require ("multer");

const productController = require('../controllers/productController');


router.get('/product', productController.productos);
router.get('/productCart', productController.productCart);
router.get('/product', productController.productCart);
router.get('/productCart', productController.productCart);
router.get('/productCart', productController.productCart);
router.get('/listaprod', productController.listaprod);




const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, path.join(__dirname, "../../public/profilePhotos"))
    },

    filename: function (req, file, cb){
        cb(null,  Date.now() + "-" +  file.originalname);
    }

});

const upload = multer({ storage: storage });

//CRUD

router.get("/listaprod", productController.listdeproductos); //listado de productos.
router.get("/products/productCreate",  productController.formulariosdecreaciondeproductos); // formularios de creacion de productos
router.get("/products/productDetail/:id", productController.Detalledeunproductoparticular); // Detalle de un producto particular
router.post("/listaprod", upload.single("profilePhoto"), productController.Accióndecreaciónadondeseenvíaelformulario); // Acción de creación (a donde se envía el formulario) 
router.get("/products/:id/productEdit", productController.Formulariodeedicióndeproductos); // Formulario de edición de productos
router.put("/listaprod/:id", productController.Accióndeediciónadondeseenvíaelformulario); // Acción de edición (a donde se envía el formulario):
router.post("/listaprod/:id", productController.acciondeborrado);




module.exports = router;