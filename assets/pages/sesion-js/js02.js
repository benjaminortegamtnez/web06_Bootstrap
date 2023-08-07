console.log("Sesión JS02 Uso de funciones");

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

FUNCIÓN: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.

------------- Funciones declaradas ----------------
   (funciones declaratión, funciones statement)
Una caracteristica de las funciones declaradas es que tienen hoisting.

sintaxis: 
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaraciones de las variables
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3) ); // 12

function multiplica(a, b){
    return a * b;
}

/* 

---------------- Funciones Expresadas -------------------
                (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tienen hoisting, porque no se carga en memoria 
hasta que se utilice.

sintaxis: 
    const nombreVariable = function nombreFuncion (parámetros){
            instrucciones;
    };

*/

const sum = function sumatoria(a, b){
    return a+b;
};
console.log(`XEl resultado de 4 + 2 : ${ sum(4,2) }` );

let saludo; // undefined
const localidad = "buenos aires";

if ( localidad == "buenos aires" ){
    saludo = function ( name ) { return `Holis ${name}` };
} else { 
    saludo = function ( name ) { return `Buenos días ${name}` };
}

console.log( saludo ("Benjamín") );
console.log( saludo ("David") );


/* 
----------------- Funciones autoinvocadas ---------------
                (selft-invoking functions)

Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
    ( function (parámetros ){} )( argumentos );

*/

(function( name ) {
    console.log(`Me llamo ${name} y me autoinvoco` );
})( "ChatGPT" );


/*
------------- Funciones flecha -------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palbra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }

*/

/* funcion expresada:
const areaRectangulo = function (base, altura){
    return base * altura;

Funcion flecha:
    const areaRectangulo = (base, altura) => base * altura;

} */
const areaRectangulo = (base, altura) => base * altura;

console.log(`El área es: ${ areaRectangulo(3, 9)} m2.` );


/*
---------------- Parámetros por defecto -----------------
                 (default parameters)
Inicializa un parámetro de la funcion, si no se envía el argumento cuando se invoca

*/

// Funcion fecha que realice el area de un triangulo 

/**
 * Calcula el área de un triangulo
 * @param {number} base del triángulo
 * @param {number} altura del triángulo
 * @returns {number} base * altura / 2
 *  */
const areaTriangulo = (base = 1 , altura = 1) => base * altura / 2;
console.log(`El área del triangulo es: ${ areaTriangulo(3, 9)} m2.` ); // 13.5 m2.
console.log(`El área del triangulo es: ${ areaTriangulo()} m2.` ); // 0.5 m2.
console.log(`El área del triangulo es: ${ areaTriangulo(10)} m2.` ); // 5 m2.
console.log( (1000).toString() ); // conversion base 10 -> 1000
console.log( (1000).toString(2) ); // conversion base 10 -> 1111101000
console.log( (1000).toString(16) ); // conversion base 10 -> 3e8

/*
--------------- Parámetros rest ---------------
               (rest parameters)
Permite representar una serie de vlores indefinidos en los argumentos 
Esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de parámetros.

sintaxis:
    .....nombreParametros

*/

const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;
    for ( let i = 0; i < rest.length; i++ ) {
        //suma = suma + rest[i];
        suma += rest[i];
    } 
    return suma;
}
console.log(`Sumatoria de múltiples números: ${ sumatoriaMultiplesNumeros(2,5)}`); // 7
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9 )}`); // 26
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 10 )}`); // 56
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2)}`); // 2 