
const inquirer = require ('inquirer');
require('colors');

const preguntas = [ 
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Menu'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea/s'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opción'.green);
    console.log('======================='.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}
// `${'1.'.green} Crear tarea`,
// `${'2.'.green} Listar tareas`,
// `${'3.'.green} Listar tareas completadas`,
// `${'4.'.green} Listar tareas pendientes`,
// `${'5.'.green} Completar tarea/s`,
// `${'6.'.green} Borrar tarea`,
// `${'0.'.green} Salir\n`,


module.exports ={
    inquirerMenu
}