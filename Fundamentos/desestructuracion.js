
/*---------------------------------objeto----------------------------------------*/

const deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    edad: 50,
    getnombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
//console.log( deadpool.getnombre() );


/*------forma tradicional de asignar valor de un objeto a una variable------*/
/*

const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;

*/
/*----------------Con Desestructuracion---------------*/
//Ahorramos codigo realizando las operaciones en una sola linea.


const {nombre,apellido,poder,edad} = deadpool;


//console.log( nombre, apellido, poder, edad );

/*---------------------------Array Tradicional--------------------------------*/
/*
function imprimeHeroe(){
    const {nombre,apellido,poder,edad = } = heroe;
    console.log(nombre, apellido, poder, edad);

}
*/
/*--------------------------Con Desestructuracion-----------------------------*/
//Al ser Objeto, se desestructura con llaves "{}"
//Con iferencia tradicional, al no definirse como CONSTANTE se permite modificar los valores.


function imprimeHeroe({nombre,apellido,poder,edad=0}){

    console.log(nombre,apellido,poder,edad);

}

imprimeHeroe(deadpool);


const heroes = ['deadpool', 'superman', 'legolas'];


/*---------forma tradicional de asignar un valor de un array a una variable-----------*/
/*

const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];

console.log(h1,h2,h3);

*/
/*-------------------Con Desestructuracion-----------------*/
//Al ser Array, se desestructura con corchetes "[]"
//se puede desestimar los parametros dejando un espacio empty separando por una coma.


const [ , , h3] = heroes;

console.log(h3);

