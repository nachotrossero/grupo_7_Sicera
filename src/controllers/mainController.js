
const fs = require("fs")
const path = require('path')


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