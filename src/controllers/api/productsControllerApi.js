const fs = require('fs');
const path = require('path');
const { where } = require('sequelize');

let db = require("../../database/models");

const productsControllerApi = {

sidras: (req, res)=>{

db.Product.findAll()
.then(function(products){


    for (let i = 0; i < products.length; i++) {
        products[i].setDataValue(
            "detail",
            `http://localhost:${process.env.PORT || 3000}/products/api/productDetail/${products[i].id_product}`
        )        
    }
    for (let i = 0; i < products.length; i++) {
        products[i].setDataValue(
            "pathImg",
            `http://localhost:${process.env.PORT || 3000}${products[i].image}`
        )        
    }
    let response = {

        total: products.length,
        data: products,
        status: 200
    }

    return res.json({response});       
})
.catch((error) => res.json(error))

},

productDetailApi: (req, res) => {

db.Product.findByPk(req.params.id)
.then(function(product){

    let response = {
        id: product.id_product,
        name: product.name,
        price: product.price,
        description: product.description,
        brand: product.brand,
        cellar: product.cellar,
        country: product.country,
        image: product.image,
        pathImage: `http://localhost:${process.env.PORT || 3000}${product.image}`,
        status: 200
    };
    console.log(response, "ASDASD");
    

    return res.json({response});
})
.catch((error) => res.json(error))
}


}


module.exports = productsControllerApi;