
const path = require('path');

const mainController = {

  index: (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
  },

  login: (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/login.html'));
  },

  register: (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/register.html'));
  },

  productCart: (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
  },

  productDetail: (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
  },

  notFound: (req, res) => { //NotFound
    res.status(404).send('Not found');
  }

}

//Exportamos los controllers
module.exports = mainController;