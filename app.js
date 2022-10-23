
//Requerimos paquetes express y path
const express = require('express');
const app = express();
const path = require('path');

//Hacemos publicos algunos archivos
app.use(express.static('./public'));


//Levantamos el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
})


//Ruteo al home
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

//Segundo ruteo al home
app.use('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

//Ruteo al registro
app.use('/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
})


//Ruteo al login
app.use('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
})


//Ruteo detalles de producto
app.use('/productos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})


//Ruteo al carro de compras
app.use('/carrito', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productCart.html'));
})