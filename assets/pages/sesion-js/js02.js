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


*/

/* funcion expresada:
const areaRectangulo = function (base, altura){
    return base * altura;

    Funcion flecha:
    const areaRectangulo = (base, altura) => base * altura;
    
} */
const areaRectangulo = (base, altura) => base * altura;

console.log(`El área es: ${ areaRectangulo(3, 9)} m2.` );
