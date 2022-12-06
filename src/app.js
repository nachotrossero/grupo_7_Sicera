
//Requires
const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE


//Express
const app = express();


//Middlewares
let PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('http://localhost:3000'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));



//Hacemos publicos algunos archivos
app.use(express.static(path.resolve(__dirname,'../public')));

//Formularios y método Post
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Template engine EJS
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


//Rutas
app.use('/', mainRouter);




