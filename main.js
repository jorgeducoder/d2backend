const ProductManager = require('./ProductManager'); //Importo la clase

const PM = new ProductManager(`${__dirname}/Productos.json`);

const run = async () => {
    
    // Agrego dos productos y los muestro
    
    await PM.addProduct({
        title: "productoprueba",
        description: "este es un producto prueba",
        price: 200,
        thumbnail: "Sin thumbnail",
        code: "abc123",
        stock: 25,
       
    });

    let products = await PM.getProduct();
    console.log(products);

    await PM.addProduct({
        title: "productoprueba",
        description: "este es un producto prueba",
        price: 200,
        thumbnail: "Sin thumbnail",
        code: "abc124",
        stock: 10,
    });

    products = await PM.getProduct();
    console.log(products);

// Actualizo un producto y lo muestro

    await PM.updateProduct(1, {
        title: "productoprueba",
        description: "este es un producto actualizado",
        price: 200,
        thumbnail: "Sin thumbnail",
        code: "abc124",
        stock: 10,
    });

    products = await PM.getProduct();
     console.log("Archivo actualizado : " , products); 

// Conaulto un producto

    await PM.getProductbyId(1)
    
 // elimino un producto
 
 await PM.deleteProduct(2)
 console.log("Archivo actualizado sin eliminados: " , await PM.getProduct());   
}

run();