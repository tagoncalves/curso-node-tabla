//importamos librerias
const { stripColors } = require('colors');
const fs = require('fs');

//funcion crear archivo
const crearArchivo = async ( base = 5,listar = false, hasta = 1 ) => {
try {
    //declaramos las variables que utilizamos para realizar las operaciones aritmeticas
    let consola = '';
    let salida = '';
    //iteracion for - del 1 hasta la funcion "hasta" que ingresa el usuario
    for (let x = 1; x <= hasta; x++) {
        //salida: graba los datos en la tabla --
        salida += `${base} ${'x'} ${x} ${'='} ${base * x}\n`;
        // consola: muestra en consola si el usuario indica el comando -l
        consola += `${base} ${'x'.red} ${x} ${'='.green} ${base * x}\n`;
    }
    if ( listar ) { /*Si existe el comando -l print en consola */
        console.log('=========================='.green);
        console.log(('       Tabla del '+ base).rainbow);
        console.log('=========================='.green); 

        console.log(consola);
    }

    //funciona de FileSystem para la creacion de un "txt" con la tabla correspondiente    
    fs.writeFileSync( `./salida/tabla del ${ base }.txt`, salida );
    return (('tabla-del-'+ base +'.txt').yellow);
    
} catch (error) {
    throw error.error;
}
}
//por ultimo exportamos la funcion crear archivo.
module.exports = {
    crearArchivo
}