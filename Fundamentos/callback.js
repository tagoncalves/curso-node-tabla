





// setTimeout( () => {
//     console.log('hola mundo')
// }, 1000);

const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Tomas'
    }

    setTimeout( () => {
        callback(user)
    }, 1500 )
}

getUsuarioByID( 10, (usuario) => {
    console.log(usuario);
    console.log(usuario.nombre.toUpperCase() );
});