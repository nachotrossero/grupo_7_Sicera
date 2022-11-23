const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = 

{
  productCart: (req, res) => {
    res.render('productCart', {products});
  },

  productDetail: (req, res) => {
    res.render('productDetail');
  },

  createProduct: (req, res) =>{
    res.render("createProduct");
  },
  
  editProduct: (req, res) =>{
    res.render("editProduct");
  }

}

module.exports = productsController;