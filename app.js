
//Requerimos paquetes express y path
const express = require('express');
const app = express();
const path = require('path');

//Levantamos el servidor donde el webhosting le da un puerto a tu proyecto. Si no, se le asigna el 3000 por default
let PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Servidor corriendo en puerto ' + PORT));

//Hacemos publicos algunos archivos
app.use(express.static('public'));

//Ruteo al home
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

//Segundo ruteo al home
app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

//Tercer ruteo al home
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

//Las rutas de abajo ahora funcionan

//Ruteo al registro
app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
})


//Ruteo al login
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
})


//Ruteo detalles de producto
app.get('/productDetail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})


//Ruteo al carro de compras
app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productCart.html'));
})