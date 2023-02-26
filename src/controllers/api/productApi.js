const fs = require('fs');
const path = require('path');
const { where } = require('sequelize');

let db = require("../../database/models");

const productsApi = {

sidras: (req, res)=>{

db.Product.findAll()
.then(function(products){


    for (let i = 0; i < products.length; i++) {
        products[i].setDataValue(
            "detail",
            `http://localhost:${process.env.PORT}/api/products/${products[i].id}`
        )        
    }
    for (let i = 0; i < products.length; i++) {
        products[i].setDataValue(
            "pathImg",
            `http://localhost:${process.env.PORT}${products[i].img}`
        )        
    }
    let response = {

        total: products.length,
        data: products,
        status: 200
    }

    return res.json({response});       
})
},

productDetail: (req, res) => {

db.Product.findByPk(req.params.id)
.then(function(product){

res.render('productDetail', {product:product});

})
}

}


module.exports = productsApi;