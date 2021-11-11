
const { stripColors } = require('colors');
const fs = require('fs');


const crearArchivo = async ( base = 5,listar = false, hasta = 1 ) => {
try {
    let consola = '';
    let salida = '';
    
    for (let x = 1; x <= hasta; x++) {
        salida += `${base} ${'x'} ${x} ${'='} ${base * x}\n`;
        consola += `${base} ${'x'.red} ${x} ${'='.green} ${base * x}\n`;
    }
    if ( listar ) {
        console.log('=========================='.green);
        console.log(('       Tabla del '+ base).rainbow);
        console.log('=========================='.green); 

        console.log(consola);
    }

    
    fs.writeFileSync( `./salida/tabla del ${ base }.txt`, salida );
    return (('tabla-del-'+ base +'.txt').yellow);
    
} catch (error) {
    throw error.error;
}
}




















module.exports = {
    crearArchivo
}