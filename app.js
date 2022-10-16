
//Requerimos paquetes
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
  res.sendFile(path.resolve(__dirname, './views/html'));
})

//Ruteo al home
app.use('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/html'));
})