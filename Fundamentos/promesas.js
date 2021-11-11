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
/*-------------------------------------------------------------------------------------------------*/
const getEmpleado = ( id ) => {
//const promesa =
    return new Promise( (resolve, reject) =>{
        
        const empleado = empleados.find( e => e.id === id)?.nombre;
       ( empleado )
            ? resolve (empleado)
            : reject(`no existe empleado con el id ${id}`);
        
        });
}

const getSalario = ( id ) => {
//const promesa =
    return new Promise( (resolve, reject) =>{

        const salario = salarios.find( s => s.id === id)?.salario;
        ( salario )
        ? resolve (salario)
        : reject (`No existe Salario con el id ${id}`);
    });
}

const id = 3;
/*-----------------------------------Base-------------------------------------------------------*/
/*
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(empleado => console.log(salario))
    .catch(err => console.log(err));

/*-----------------------------------Forma 1-------------------------------------------------------*/
/*
getEmpleado(id)
    .then (empleado => {
        getSalario(id)
            .then (salario => {
                console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
            })
    })  .catch(salario => console.log(err))
    .catch(empleado => console.log(err));

/*------------------------------------Forma 2------------------------------------------------------*/

let nombre;
getEmpleado(id)
    .then( empleado  => {
        nombre = empleado;
        return getSalario ( id )
    })
    .then( salario => console.log( `El empleado ${nombre} tiene un salario de : ${salario}`))
    .catch( err => console.log (err));
    
/*--------------------------------------------------------------------------------------------------*/