const fs = require('fs');
const path = require('path');
const { where } = require('sequelize');

let db = require("../database/models");

const {validationResult} = require("express-validator");

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
  //Todavia no funciona
  productCart: (req, res) => {
    res.render('productCart');
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

    errors = validationResult(req);
    console.log(errors);

    if (errors.isEmpty()) {
      db.Product.create({
        "name": req.body.name,
        "price": req.body.price,
        "description": req.body.description,
        "country": req.body.country,
        "region": req.body.region,
        "brand": req.body.brand,
        "cellar": req.body.cellar, 
        "rating": req.body.rating,
        "image": img, 
        "is_active": 1
      })
      res.redirect("/products/sidras/" );
    }else{
      res.render("createProduct", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    } 

  },
  
  editProduct: (req, res) =>{


    db.Product.findByPk(req.params.id)
    .then(function(product){

      
      res.render('editProduct', {product});

    })
  },
  updateProduct: (req, res) =>{
    
    errors = validationResult(req);
    //console.log(errors);
    let img

    if(req.files.length > 0){
      
      img = '/img/products/' + req.files[0].filename;

    } else {
      img = '/img/products/default-image.png';
    };
    
    if (errors.isEmpty()){

      db.Product.update({
        "name": req.body.name,
        "price": req.body.price,
        "description": req.body.description,
        "country": req.body.country,
        "brand": req.body.brand,
        "cellar": req.body.cellar, 
        //"rating": req.body.rating,
        "image": img, 
        "is_active": 1
      },
      {where: {id_product: req.params.id}});
  
      res.redirect("/products/sidras/"); 

    }else{
      
      db.Product.findByPk(req.params.id)
    .then(function(product){      
      res.render('editProduct', 
      {
        product,
        errors: errors.mapped(),
        oldData: req.body,
      });
    })
    }
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