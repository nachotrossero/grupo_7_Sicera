
const fs = require("fs")
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let db = require("../database/models");

const mainController = {

  index: (req, res) => {

    db.Product.findAll()
    .then(function(products){

      return res.render('index', {products});       
    })

  }, 

  notFound: (req, res) => { //NotFound
    res.status(404).send('Not found');
  }

}

//Exportamos los controllers
module.exports = mainController;