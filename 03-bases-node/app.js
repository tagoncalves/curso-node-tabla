//importar Librerias
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

//limpiamos la consola
console.clear();

//llamo la funcion crear archivo pasandole los parametros ingresados por consola.
crearArchivo( argv.b, argv.l, argv.h )
    //ejecuto .then si funciona correctamente - muestro mensaje
    .then ( nombreArchivo => console.log( nombreArchivo, 'creado'))
    //ejecuto .catch si sucede algun error - muestro mensaje
    .catch ( err => console.log(err) );
