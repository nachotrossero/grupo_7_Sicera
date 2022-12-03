
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
 const usersRouter = require('./routers/usersRouter');


//Levantamos el servidor donde el webhosting le da un puerto a tu proyecto. Si no, se le asigna el 3000 por default
let PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('http://localhost:3000'));


//Hacemos publicos algunos archivos
app.use(express.static(path.resolve(__dirname,'../public')));

//EJS
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

//Formularios y método Post
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Formularios y método Put y Delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
