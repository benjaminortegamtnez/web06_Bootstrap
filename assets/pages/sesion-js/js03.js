console.log( "Sesión JS 03 Control de flujo " );

//--------------- Declaración de bloque de código ----------------
/*
 Sintaxis:
         {

          }
 Las variables declaradas con let y const
 solo tendrán alcance(scope) dentro del bloque
 o bloques anidados.

 Si la variable en el bloque, tiene el mismo nombre
 que una variable fuera del bloque, se le da prioridad
 a la varible dentro del bloque.
*/
// let y const no se pueden redeclarar
// let firstname = "Lalo";
// const lastname = "García";
var age = "24";

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";

{
  let firstname = "Mau";
  const lastname = "Peniche";
  var age = "26";
  const colorFavorito = "azul";
  var comidaFavorita = "pozole";

  console.log(`${firstname} ${lastname}`); // mau peniche
  console.log(age); // 26
  console.log(colorFavorito); // azul
  console.log(comidaFavorita); // pozole
  {
    const colorFavorito = "morado";
    console.log(colorFavorito); // morado
    console.log(firstname); // mau
    {
      console.log(colorFavorito); // morado
      console.log(firstname); // mau
    }
  }
}

console.log(`${firstname} ${lastname}`); // sergio torres
console.log(age); // 26
//console.log( colorFavorito ); // colorFavorito no está definido
console.log(comidaFavorita); // pozole


// -------------------- Condicional if-else ----------------------
/*
Ejecuta una sentncia si una condición especifica es evaluada como verdadera.

sintaxis:
    if ( condición ) sentencia;
-
    if ( condición ) {
        sentencias;
    }
-
    if ( conición ) sentencia;
    else sentencia_si_condición_es_falsa
-
    if ( condición ) {
        sentencias;

    }
    else {
        sentencias;
    }
-
    if ( condición ) sentencia;
    else sentenciaElse;

    if ( condición 2 ) sentencia2;
        else if ( condición3 ) sentensia3;
            else sentencia_si_condición3_es_falsa
-
    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* const temperatura = 23;
let mensaje = "Temperatura ideal de ";

if ( temperatura === 22 ){
    mensaje += `${temperatura} grados centigrados` ;
}
else {
    mensaje = `La temperatura de ${temperatura} grados centigrados no es ideal =(` ;    
}

console.log(mensaje); */


//  -------------------------------------

/* const temperatura = 20;
let mensaje = "Temperatura de ";

if ( temperatura === 22 ){
    mensaje += `${temperatura} grados centigrados es ideal` ; // mensaje = mensaje + nvoTexto
}
else if ( temperatura >= 15 && temperatura<= 21) {
    mensaje += `${temperatura} grados centigrados es fría` ;
}
else {
    mensaje = `${temperatura} grados centigrados no es ideal =(` ;    
}

console.log(mensaje); */


// -----------------------------------------------

/* const temperatura = 22;
let mensaje = "Temperatura de ";

if ( temperatura === 22 ){
    mensaje += `${temperatura} grados centigrados es ideal` ; // mensaje = mensaje + nvoTexto
}
else if ( temperatura >= 15 && temperatura<= 21) {
    mensaje += `${temperatura} grados centigrados es fría` ;
}
else if ( temperatura >= 23 && temperatura<= 30) {
    mensaje += `${temperatura} grados centigrados es calurosa` ;
}
else {
    mensaje = `${temperatura} grados centigrados no es ideal =(` ;    
}

console.log(mensaje); */


// ------------------- Condicional Switch ----------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

/**
 * Establece la velicidad del ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida del ventilador
 */


 // ----------- solucion 1 ------------------------
/* const setVelocidadVentilador = ( velocidad = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch ( velocidad ) {
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break;
        case 2:
            mensaje = "velocidad media";
            break;
        default:
            mensaje = "el nivel no existe";        
            break;
    }
    return mensaje;
}

console.log(`La velocidad del ventilador está en ${ setVelocidadVentilador(1)} `);
console.log(`La velocidad del ventilador está en ${ setVelocidadVentilador(8)} `);
console.log(`La velocidad del ventilador está en ${ setVelocidadVentilador("2")} `); 
*/

// ----------------- Solucion 2 ----------------------------

/* const setVelocidadVentilador = ( velocidad = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch ( velocidad ) {
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
            mensaje = "velocidad media"; break;
        case "2":
            mensaje = "velocidad media"; break;
        default:
            mensaje = "el nivel no existe"; break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`valor: 2 ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`valor: "2" ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`valor: ? ${setVelocidadVentilador()}`); // apagado 
*/

// ----------------- solucion 3 ------------------------

/* const setVelocidadVentilador = ( velocidad = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch ( velocidad ) {
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
        case "2":
            mensaje = "velocidad media"; break;

        default:
            mensaje = "el nivel no existe"; break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`valor: 2 ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`valor: "2" ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`valor: ? ${setVelocidadVentilador()}`); // apagado 
*/


// ---------------------solucion 4 parseInt ------------------

const setVelocidadVentilador = ( velocidad = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch (  parseInt( velocidad) ) {
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
            mensaje = "velocidad media"; break;
        default:
            mensaje = "el nivel no existe"; break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`valor: 2 ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`valor: "2" ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`valor: ? ${setVelocidadVentilador()}`); // apagado
// console.log(`valor: ? ${setVelocidadVentilador( prompt("Velocidad", 1))}`); // velocidad baja

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12, 1, 2 = invierno.
 mes 3, 4, 5  = primavera
 mes 6, 7, 8  = verano
 mes 9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.


*/
console.log("===============================")

const mes = 11;
let mensaje = "Temporada ";

if ( mes === 12 ){
    mensaje += `${mes} de invierno` ; // mensaje = mensaje + nvoTexto
}
else if ( mes >= 1 && mes<= 2) {
    mensaje += `${mes} de invierno` ;
}
else if ( mes >= 3 && mes<= 5) {
    mensaje += `${mes} de primavera` ;
}
else if ( mes >= 6 && mes<= 8) {
    mensaje += `${mes} de verano` ;
}
else if ( mes >= 9 && mes<= 11) {
    mensaje += `${mes} de otoño` ;
}

console.log(mensaje);


console.log("===============================")

const temporada = ( mes = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch ( parseInt(mes) ) {
        case 12:            
        case 1:
        case 2:
            mensaje = "Invierno"; break;
        case 3:            
        case 4:
        case 5:
            mensaje = "primavera"; break;
        case 6:            
        case 7:
        case 8:
            mensaje = "verano"; break;
        case 9:            
        case 10:
        case 11:
            mensaje = "Otoño"; break;

        default:
            mensaje = "Solo existen 12 mmeses, bro "; break;
    }
    return mensaje;
}
console.log(`El numero del mes que seleccionaste es:  ${temporada(15)}` ); 


// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const pagoTarjetaCredito = false;
// ------------------------ opción 1 --------------------------
/* let msj;
if ( pagoTarjetaCredito ) msj= "A realizado el pago de su TC";
else msj = "No ha realizado el pago de TC";
 */

// ------------------------ opción 2 --------------------------
const msj = pagoTarjetaCredito === true ? "A realizado el pago de TC" : "No ha realizado el pago de TC"

console.log(`El usuario ${msj}`);

// --------------- mini ejercicio  ----------------------------
/*
 Preguntar con prompt la edad del usuario: 20
 Si es >= 18 indicar en la consola "El usuario es mayor de edad";
 Si no cumple con la condición "El usuario no es mayor de edad".
*/

/* const userAge = parseInt( prompt("Escribe tu edad: ", 18) );
const mayorEdad = userAge >= 18 ? "" : "no";
console.log(`El usuario ${mayorEdad} es mayor de edad`);
 */
//let edad = prompt("Ingresa la edad");
//const confirmacion = edad >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad";
//alert(confirmacion);
//alert(edad >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad");

//......... Cálculo del factorial de un número usando recursividad ...............

/* 
function factorialConRecursividad( numero ){
    if ( numero <= 0 ) {
        return 1;
    } else {
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: 
${factorialConRecursividad(5)}`); 
*/



console.log("================================")
/* const factorialConRecursividad = (n) => n === 0 ? 1 : n * factorialConRecursividad ( n - 1 );

console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);
 */
/* 
function factorialConRecursividad( numero ){
    const factorial = numero < 1 ? 1 : numero * factorialConRecursividad ( numero - 1 );
    return factorial;
}
console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);
 */

// ------------ el ejemplo nterior resumido (eliminando return) -------------------------------
function factorialConRecursividad( numero ){
    return numero < 1 ? 1 : numero * factorialConRecursividad ( numero - 1 );
    
}
console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);