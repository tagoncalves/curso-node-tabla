
//Importar funcion "crearArchivo"
const { crearArchivo } = require('./helpers/multiplicar');
//importar archivo "YARS"
const argv = require('./config/yargs');
//importar Libreria "colors"
require('colors');

console.clear();


//llamo la funcion crear archivo la cual importe previamente en la linea de codigo 3
crearArchivo( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log( nombreArchivo, 'creado'))
    .catch ( err => console.log(err) );
