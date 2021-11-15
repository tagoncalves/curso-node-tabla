
require ('colors');
const { inquirerMenu , pausa } = require('./helpers/inquirer');

console.clear();   

const main = async() => {
    console.log('hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });

        await pausa();
        console.log('\n');

    } while ( opt != "0" );

    // pausa();
}

main();

