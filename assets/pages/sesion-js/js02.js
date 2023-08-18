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


/*
----------------- Funciones de Callback ----------------7
Es una función (definida, expresada, arrow, anónima) que se pasa a otra función como argumento.
Se para en el argumento como referencia ( sin parentesis ).
*/

function saludoALosPokemones() { 
    return "yo te elijo";
}

function saludoSquirtle( nombre ) {
    return "Vamo' a calmarno " + nombre;
}

function eligiendoPokebola( saludo, nombre ){ 
    console.log( "==================" );
    console.log( "Hola, estás en la liga pokemon" );
    console.log( "Elige a tu mejor pokemon" );
    console.log( saludo( nombre) );
}

// eligiendoPokebola( saludoALosPokemones() ); // saludo is not a function 
eligiendoPokebola ( saludoALosPokemones ); // "yo te elijo"
eligiendoPokebola ( saludoSquirtle, "Benjamín Ortega" );
eligiendoPokebola ( function(){return "Pika Pika chuu"} );
eligiendoPokebola ( function(nombre){return "quiiiiii soy " + nombre}, "Cubone" );
eligiendoPokebola ( (nombre)=> `quiiiiii soy ${nombre}`, "Cubone");

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];


function cursosEnComun( student1Courses,  student2Courses  ){
    const commonCourses = []; // guardar los cursos en comun

    for (let i = 0; i < student1Courses.length; i++) { // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
        for (let j = 0; j < student2Courses.length; j++) { // ["Geography", "Spanish", "Programming", "Music"]
            console.log(` ${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
            if ( student1Courses[i] === student2Courses[j] ){
                commonCourses.push(student1Courses[i]);
            }    
        }        
    }

    return `Cursos en común ${commonCourses}`
}
console.log ( cursosEnComun( student1Courses, student2Courses ) );


//--------------- Resolviendo con filter e include ----------------------

function getCommonCoursesWithFilter( array1Courses, array2Courses ){
    return  array1Courses.filter( course=> array2Courses.includes(course) );
}

console.log(`Común: ${getCommonCoursesWithFilter( student1Courses, student2Courses )}`);

//--------------- Resolviendo con filter e include por partes ----------------------
console.log("###################################");
function includeCourse( course, index, array ){
    console.log(`Elemento ${course}, indice ${index}, include ${student2Courses.includes(course)}`);
    return student2Courses.includes(course); // evaluación // ["Geography", "Spanish", "Programming", "Music"]
}

function getCoursesWithFilter( array1Courses){
      const commonCourses = array1Courses.filter( includeCourse ); // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
      return commonCourses;
}
console.log(`Comúnxpartes: ${getCoursesWithFilter( student1Courses, student2Courses )}`);

// -------------- Contar la cantidad de caracteres de una frase ---------------------
/*
   "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";

   Mostrar la cantidad de letras 'p'.
   Usar funciones flecha.

   recomendaciones de métodos, split y filter

*/

const phasePP = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
const counterCharacter = ( phase, character ) => phase.split(character).length-1;

const counterCharacterUnsensitive = ( phase, character ) => phase.toLowerCase().split(character).length-1;
const contarLetrasP = (frase) => {
    const letrasP = frase.split('').filter(letra => letra === 'p' || letra === 'P');
    return letrasP.length;
  };
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") } `); // 13
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") + counterCharacter(phasePP, "P") } `); // 13
console.log(`Cantidad de letras 'p' : ${ counterCharacterUnsensitive(phasePP, "p") } `); // 13
console.log(`Cantidad de letras(mau) 'p' : ${ contarLetrasP(phasePP) } `); // 13



// ----------------------- Recursividad ---------------------------
/*
Una función reursiva es una función que se llama así misma durante su ejecución.

Se utilizan en algoritmos y soluciones que se basasn en la división y conquista como
cálculos matemáticos, recorrido de estructura de datos y algoritmos de busqueda y ordenamiento.

Patrón 
    function nombreFuncionRecursiva( parametro ){
        if( condicionParo ){
          return expresión;
        }
        else {
            // llamada recursiva
            nombreFunction( nuevoParametro)
        }
    }
*/

// ------------- Calculo del factorial de un número usando ciclo for -------------

function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
        factorial = factorial * i;
       
    }
    return factorial
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}` ); // 1*2*3*4*5 = 120


//......... Cálculo del factorial de un número usando recursividad ...............

function factorialConRecursividad( numero ){
    if ( numero === 1 ) {
        return 1;
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);


// -------------- Saludar con recursividad ---------------------
/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo desado

 ej: saludar 10 veces

  Saludo 1
  Saludo 2
  Saludo 3
   ....
  Saludo 9
  Saludo 10

*/

/* function saludo( numeroSaludo ) {
    if (numeroSaludo === 10) {
        return;
    } else {
        console.log(`numeroSaludo ${numeroSaludo+1}` );
        return saludo( numeroSaludo - 1)
        
    }
}
console.log(saludo(10) );
// saludo(10); */


function saludoz( numeroSaludo){
    if( numeroSaludo === 1){
        return `Saludo ${numeroSaludo}`;
    }
    else {
        // llamada recursiva
        console.log(`Saludo ${numeroSaludo}`)
        return saludoz( numeroSaludo - 1 );
    }
}
console.log(saludoz(10));