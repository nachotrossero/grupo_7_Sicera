
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');


//Levantamos el servidor donde el webhosting le da un puerto a tu proyecto. Si no, se le asigna el 3000 por default
let PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Servidor corriendo en puerto ' + PORT));


//Hacemos publicos algunos archivos
app.use(express.static(path.resolve(__dirname,'../public')));

//EJS
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Rutas
app.use('/', mainRouter);


