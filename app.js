
//Requerimos paquetes express y path
const express = require('express');
const app = express();
const path = require('path');

//Hacemos publicos algunos archivos
app.use(express.static('public'));


//Levantamos el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
})


//Ruteo al home
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

//Segundo ruteo al home
app.get('/index', (req, res) => {
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
app.get('/productos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})


//Ruteo al carro de compras
app.get('/carrito', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productCart.html'));
})