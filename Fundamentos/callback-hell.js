//Arrays
const empleados = [
    {
        id: 1,
        nombre: 'Tomas'
    },
    {
        id: 2,
        nombre: 'pepe'
    },
    {
        id: 3,
        nombre: 'lula'
    }
];

const salarios = [
    {
        id: 1,
        salario: 2500
    },
    {
        id: 2,
        salario: 3000
    }
]
/*----------------------Salario-----------------------------*/

const getSalario = (id, callback) => {

    const salario = salarios.find( s => s.id === id)?.salario;
    if(salario){
        callback(null,salario);
    }else{
        callback(`El salario del empleado con el id ${id} no existe`);
    }

}
getSalario(2, (err, salario) =>{
    if (err){
        console.log('ERROR');
        return console.log(err);
    }
   //console.log('Salario Existe');
    console.log(`Salario: ${salario}`);
});


/*---------------------Empleado--------------------------*/
const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => e.id === id)
    if(empleado){
        callback(null,empleado.nombre);
    }else{
        callback(`El empleado con el id ${id} no existe`);
        }

}

getEmpleado( 2, (err,empleado) => {
    if ( err ) {
        console.log('ERROR');
        return console.log(err);
    }
    //console.log('Empleado existe');
    console.log(`Empleado: ${empleado}`);
});


