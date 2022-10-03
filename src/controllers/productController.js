const fs = require('fs');
const path = require('path');

const productosJSON = fs.readFileSync(path.join(__dirname, "../data/productsDB.json"), "utf-8");
const productos = JSON.parse(productosJSON);

const productController = {

    listaprod: (req, res) => {
        return res.render("listaprod", { productos: productos });

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
        res.render("/listaprod");

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

            const productoPedido = productos.find(productoActual => productoActual.id == id);
            res.render("./products/productDetail", {
                name: productoPedido.name,
                description: productoPedido.description,
                image: productoPedido.image,
                category: productoPedido.category,
                price: productoPedido.price,
                color: productoPedido.color
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
            // image: "./profilePhotos/" + req.file.filename, 
            category: req.body.category,
            price: req.body.price,
            color: req.body.color

        };
        productos.push(nuevoProducto);
        //esto 2 reglones para conectarlo con el json y q aparezcan ahi los usuarios nuevos.
        const productosActualizadosJSON = JSON.stringify(productos);

        // cargamos el nuevo array al json con el fs.writefilesinc
        fs.writeFileSync(path.join(__dirname, "../data/productsDB.json"), productosActualizadosJSON, "utf-8");
        console.log(productos);


        res.send("producto agregado existosamente");

    },

    Formulariodeedicióndeproductos: function (req, res) {
        const id = req.params.id;
        const productos = {
            
                name: req.body.name,
                description: req.body.description,
                //image: '/img/' + req.file.filename,
                category: req.body.category,
                price: req.body.price,
            };



        const productId = Number(req.params.id);
        

        const newArrayProducts = productos.map(oneProduct => {
            if (oneProduct.id === Number(req.params.id)) {
                return {
                    ...oneProduct,
                    ...req.body,
                  
                   
                    //image: req.file ? req.file.filename : oneProduct.image
                }
            }
            return oneProduct;
        });

        fs.writeFileSync(path.join(__dirname, "../data/productsDB.json"),productosJSON,  "utf-8", JSON.stringify(newArrayProducts, null, ' '));
        return res.render(`./products/productEdit/${productId}`);

 //fs.writeFileSync(path.join(__dirname, "../data/productsDB.json"), productosActualizadosJSON, "utf-8");
        //console.log(productos);

    }
    ,

    Accióndeediciónadondeseenvíaelformulario: function (req, res) {
        const productId = Number(req.params.id);

        const theProduct = productos.find(thisProduct => thisProduct.id === productId);

        return res.render('./products/productEdit', {
            product: theProduct,
        });
    },

    acciondeborrado: function (req, res) {
        
       
        const newArrayProducts = productos.filter(p => p.id !== Number(req.params.id));
       

        fs.writeFileSync(productosJSON, JSON.stringify(newArrayProducts, null, ' '));
        return res.redirect('/listaprod');

        
    }
}






module.exports = productController;