
const path = require('path');

const mainController = {

  index: (req, res) => {
    res.render('index');
  },

  login: (req, res) => {
    res.render('login');
  },

  register: (req, res) => {
    res.render('register');
  },

  productCart: (req, res) => {
    res.render('productCart');
  },

  productDetail: (req, res) => {
    res.render('productDetail');
  },

  createProduct: (req, res) =>{
    res.render("createProduct");
  },
  
  editProduct: (req, res) =>{
    res.render("editProduct");
  },

  notFound: (req, res) => { //NotFound
    res.status(404).send('Not found');
  }

}

//Exportamos los controllers
module.exports = mainController;