const fs = require('fs');
const path = require('path');

const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
const productos = JSON.parse(productosJSON);

const productController = {

    listaprod: (req, res) => {
        const id = req.params.id

        // importamos el array de productos ya existente y lo taducimos a Json 
        const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
        const productos = JSON.parse(productosJSON);
        const productId = Number(req.params.id);
        const theProduct = productos.find(thisProduct => thisProduct.id === productId);

        
        //return res.render(`listaprod/productEdit`, {
            //product: theProduct,
        //});
        return res.render("listaprod",{ product: theProduct, productos: productos });

    },

    productCart: (req, res) => {
        return res.render("productCart");
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
        const id = req.params.id

        // importamos el array de productos ya existente y lo taducimos a Json 
        const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
        const productos = JSON.parse(productosJSON);
        const productId = Number(req.params.id);
        const theProduct = productos.find(thisProduct => thisProduct.id === productId);

        
        return res.render(`listaprod/productEdit`, {
            product: theProduct,
        });

        //res.render("/listaprod");

    },
    formulariosdecreaciondeproductos: function (req, res) {
       
        res.render("./products/productCreate");

    },

    Detalledeunproductoparticular:
        function (req, res) {
            const id = req.params.id

            // importamos el array de productos ya existente y lo taducimos a Json 
            const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
            const productos = JSON.parse(productosJSON);
            const productId = Number(req.params.id);
            const theProduct = productos.find(thisProduct => thisProduct.id === productId);



            const productoPedido = productos.find(productoActual => productoActual.id == id);
            res.render("./products/productDetail", {
                name: productoPedido.name,
                description: productoPedido.description,
                productPhoto: productoPedido.productPhoto,
                category: productoPedido.category,
                price: productoPedido.price,
                color: productoPedido.color,
                product: theProduct
            });
        },


    Accióndecreaciónadondeseenvíaelformulario: function (req, res) {
        // importamos el array de productos ya existente y lo taducimos a Json 
        const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
        const productos = JSON.parse(productosJSON);

        //para acceder a los datos ingresados
        const nuevoProducto = {
            id: Date.now(),
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            color: req.body.color,
            productPhoto: "./productPhotos/" + req.file.filename, 

        };
        productos.push(nuevoProducto);
        //esto 2 reglones para conectarlo con el json y q aparezcan ahi los usuarios nuevos.
        const productosActualizadosJSON = JSON.stringify(productos);

        // cargamos el nuevo array al json con el fs.writefilesinc
        fs.writeFileSync(path.join(__dirname, "../data/productsDB.json"), productosActualizadosJSON, "utf-8");
        console.log(productos);


        res.render("./listaprod");

    },

    Formulariodeedicióndeproductos: function (req, res) {

        const productId = Number(req.params.id);
        const theProduct = productos.find(productoActual => productoActual.id === productId);
        
        return res.render("products/productEdit", {
            productoActual: theProduct,
            productId: Date.now(),
            name: theProduct ,
            description: theProduct,
            category:theProduct ,
            price: theProduct,
            color: theProduct,
            productPhoto: "./productPhotos/" + theProduct
            
           
            
        });

      

},

    Accióndeediciónadondeseenvíaelformulario: function (req, res) {
        
        
        
        const id = req.params.id

        // importamos el array de productos ya existente y lo taducimos a Json 
        const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
        const productos = JSON.parse(productosJSON);
        const productId = Number(req.params.id);
        const theProduct = productos.find(thisproductoActual => thisproductoActual.id === productId);

      
        return res.render("listaprod", {productoActual: theProduct,
            productId: Date.now(),
            name: theProduct ,
            description: theProduct,
            category:theProduct ,
            price: theProduct,
            color: theProduct,
            productPhoto: "./productPhotos/" + theProduct,

        productos : productos });

        
        
       

        return res.render('./listaprod', {
            productoActual: theProduct,
           
           
        });

        

        
        
        
 
        


      


    },

    acciondeborrado: function (req, res) {
        const newArrayProducts = productos.filter(p => p.id !== Number(req.params.id));

        fs.writeFileSync(productsJSON, JSON.stringify(newArrayProducts, null, ' ../data/productsDB.json'));
        return res.redirect('./listaprod');


    }
    }









module.exports = productController;