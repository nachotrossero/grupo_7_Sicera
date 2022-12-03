const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
  
  productDetail: (req, res) => {
    let product = products.find(product => product.id == req.params.id);
    res.render('productDetail', {product});
  },

  productCart: (req, res) => {
    res.render('productCart', {products});
  },

  createProduct: (req, res) =>{
    res.render('createProduct');
  },

  saveProduct: (req, res) => {
    let newProduct = {
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
    }

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t'));
    res.redirect('/');
  },
  
  editProduct: (req, res) =>{
    res.render('editProduct');
  }

}


module.exports = productsController;