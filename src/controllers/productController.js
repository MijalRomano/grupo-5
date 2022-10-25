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
        return res.render("listaprod", { product: theProduct, productos: productos });

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
                image: productoPedido.image,
                category: productoPedido.category,
                price: productoPedido.price,
                color: productoPedido.color,
                productPhoto: productoPedido.productPhoto,
                product: theProduct,
                id
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
            productPhoto: "./productPhotos/" + req.file.filename,
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


        res.redirect("./listaprod");


    },

    Formulariodeedicióndeproductos: function (req, res) {
        const productId = Number(req.params.id);
        const theProduct = productos.find(product => product.id === productId);

        return res.render(`products/productEdit`, {
            productoActual: theProduct,
        });
    },

    Accióndeediciónadondeseenvíaelformulario: function (req, res) {
        const productId = Number(req.params.id);

        const nuevoProducto = {
            id: productId,
            name: req.body.name,
            description: req.body.description,
            productPhoto: "./productPhotos/" + req.file.filename,
            category: req.body.category,
            price: req.body.price,
            color: req.body.color
        };

        const nuevosProductos = productos.map(productoActual => {
            if (productoActual.id === productId) {
                return nuevoProducto;
            }

            return productoActual;
        });

        const nuevosProductosJson = JSON.stringify(nuevosProductos);

        fs.writeFileSync(path.join(__dirname, "../data/productsDB.json"), nuevosProductosJson, "utf-8");

        return res.redirect('/listaprod')
    },

    acciondeborrado: function (req, res) {
        const productId = Number(req.params.id);

        const newArrayProducts = productos.filter(p => p.id !== productId);

        console.log(newArrayProducts)

        const productsJSON = JSON.stringify(newArrayProducts);

        fs.writeFileSync(path.join(__dirname, '../data/productsDB.json'), productsJSON, 'utf-8');

        return res.redirect(`/listaprod`);
    }
}









module.exports = productController;