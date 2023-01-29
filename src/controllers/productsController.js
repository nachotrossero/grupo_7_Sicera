const fs = require('fs');
const path = require('path');
const { where } = require('sequelize');

const productsFilePath = path.join(__dirname, '../data/productsData.json'); //Para poder leer el json
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require("../database/models");

const productsController = {

  sidras: (req, res)=>{

    db.Product.findAll()
    .then(function(products){

      return res.render('products',{products});       
    })
  },
  
  productDetail: (req, res) => {
    //let product = products.find(product => product.id == req.params.id); //Matcheamos el id del producto y el de la url
    
    db.Product.findByPk(req.params.id)
    .then(function(product){

      res.render('productDetail', {product:product});

    })
  },

  productCart: (req, res) => {
    res.render('productCart', {products});
  },

  createProduct: (req, res) =>{
    res.render('createProduct');
  },

  saveProduct: (req, res) => {

    let img 

    if(req.files.length > 0){
      
      img = '/img/products/' + req.files[0].filename;

    } else {
      img = '/img/products/default-image.png';
    };

    db.Product.create({
      "name": req.body.name,
      "price": req.body.price,
      "description": req.body.description,
      "country": req.body.country,
      "region": req.body.region,
      "brand": req.body.brand,
      "cellar": req.body.cellar, 
      //"rating": req.body.rating,
      "image": img, 
      "is_active": 1
    })
    /*let newProduct = {
    "id": products[products.length - 1]['id'] + 1,
    "name": req.body.name,
    "price": req.body.price,
    "discount": req.body.discount,
    "category": req.body.category,
    "description": req.body.description,
    "country": req.body.country,
    "region": req.body.region,
    "brand": req.body.brand,
    "cellar": req.body.cellar, 
    "rating": req.body.rating,
    "image": img
    };*/

     //products.push(newProduct); //Pisamos los datos de la variable 

    //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t')); //Volvemos a pasar a formato json
    
    res.redirect("/products/sidras/" ); //Hacemos redirect al home
  },
  
  editProduct: (req, res) =>{

    //let product = products.find(product => product.id == req.params.id);

    db.Product.findByPk(req.params.id)
    .then(function(product){

      
      res.render('editProduct', {product});

    })
  },
  updateProduct: (req, res) =>{
    
    //let img = product.image

    db.Product.update({
      "name": req.body.name,
      "price": req.body.price,
      "description": req.body.description,
      "country": req.body.country,
      "region": req.body.region,
      "brand": req.body.brand,
      "cellar": req.body.cellar, 
      //"rating": req.body.rating,
      "image": req.body.image, 
      "is_active": 1
    },
    {where: {id_product: req.params.id}});

    res.redirect("/products/sidras/");
    
    /*
    let productToEdit = products.find(product => product.id == req.params.id);

    let editedProduct = {
      "id": productToEdit.id,
      "name": req.body.name,
      "price": req.body.price,
      "discount": req.body.discount,
      "category": req.body.category,
      "description": req.body.description,
      "country": req.body.country,
      "region": req.body.region,
      "brand": req.body.brand,
      "cellar": req.body.cellar, 
      "rating": req.body.rating,
      };

      let newProduct = products.map(product => {

        if (product.id === productToEdit.id) {
  
          return product = editedProduct;
        }
        return product;
  
      })

      fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, "\t"));
      */

  },

  // Delete 
	destroy : (req, res) => {
    db.Product.destroy({
      where: {id_product: req.params.id}
    })
    res.redirect("/products/sidras/");
	}

}


module.exports = productsController;