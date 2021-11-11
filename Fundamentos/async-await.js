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



const getInfoUsuario = async( id ) => {

    try {                   //resolve
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return (`El salario del empleado ${empleado} es de ${salario}`);
        
    } catch (error) {
        throw error;         //reject
    }

}

const id = 1;

getInfoUsuario( id )
    .then ( msg => console.log(msg) )  // resolve
    .catch ( err => console.log(err)); // reject
