console.log("Bienvenido a la sesión JS01");

// 7 Datos primitivos:
// numbers, string, boolean, null, undefined, bigInit, symbol

// Tipos de datos en Js:
// primitivos y no primitivos

// No primitivos:
// con atributos y metodos 

// No primitivos:
// objet: Datos con atributos y Metodos

// Tipo de datos STRING 
const stringData = 'Holi crayoli';
console.log( stringData ); 

// tipos de datos number:
// números positivos, negativos, decimales, NaN, +Infinity, -Infinity
// para un salto de linea se puede utilizar \n, pero en template string no es necesario
console.log( `Tipos de datos number: ${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0}`);

console.log( `Valor máximo represntable en JavaScript : ${ Number.MAX_VALUE }`); // 1.7976931348623157e+308
console.log( `Si el valor es mayo a MAX_VALUE como 1.79e310: ${1.79e310} `) // Infinity

console.log( `Valor (entero) máximo seguro en JavaScript: ${ Number.MAX_SAFE_INTEGER } ` ); // 9007199254740991

// Cuando se realizan operaciones que exceden los limittes de MAX_SAFE_INTEGER
// Se produce una pérdida de precisión.
console.log( `MAX_SAFE_INTEGER + 1: ${ Number.MAX_SAFE_INTEGER + 1 } ` ); // 9007199254740992 
console.log( `MAX_SAFE_INTEGER + 2: ${ Number.MAX_SAFE_INTEGER + 2 } ` ); // 9007199254740992 (incorrecto)
console.log( `MAX_SAFE_INTEGER + 3: ${ Number.MAX_SAFE_INTEGER + 3 } ` ); // 9007199254740994 
console.log( `MAX_SAFE_INTEGER + 4: ${ Number.MAX_SAFE_INTEGER + 4 } ` ); // 9007199254740996 (incorrecto)

// tipos de datos BigInit 
// Sirven para representar valor numéricos enteros, de los que el tipo number
// no puede representar o no es seguro.
console.log( "operaciones con BigInt" )
const myBigInt = 9007199254740991n;
console.log( `MAX_SAFE_INTEGER + 1: ${ myBigInt + 1n } ` );
console.log( `MAX_SAFE_INTEGER + 2: ${ myBigInt + 1n } ` );
console.log( `MAX_SAFE_INTEGER + 3: ${ myBigInt + 1n } ` );
console.log( `MAX_SAFE_INTEGER + 4: ${ myBigInt + 1n } ` );

// tipo de dato boolean
// se tiene 2 estados: true /false
console.log( `Tipo de dato verdadero: ${true} `); // True
console.log( `Tipo de dato falso: ${false} `); // False

// tipo de dato undefined
// Una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log( `Tipo de dato undefined: ${myVar}` )

// tipo de dato null
// Una variable que intensionalmente se borra el tipo de dato
let myVarNull; // unedefined
console.log(`Tipo de datos myVarNull: ${ typeof myVarNull }`); // undefined
myVarNull =  "No me gusta YLE";
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull}` ); // string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull}`); // object
console.log(`myVarNull es null: ${ myVarNull === null }`); // true

// tipo de dato symbol
// Representa un valor único que se puede utilizar como clave en objetos o identificador único 
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log(`mySymbol === mySimbol2 ${ mySymbol === mySymbol2} `);

const myObj = {
    clave : "valor",
    [mySymbol] : 16,  // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey : 123,
    [myKey] : 567,
}
console.log( myObj );


// ------------------Objetos en JavaSCript
// tipo de dato Array (arrego)
const cancionesCh30 = ["Highway Star", "trouble", "Saaoko", "Rock Dj"];

// tipos de datos Object
const misDatosDePerfil = {
    name: "Benjamín",
    lastname: "Ortega",
    age: 27,
    isBelicoso: false,
    fullName : function(){
        return `Nombre completo de Benja: ${this.name} ${this.lastname}`;
        //return `Npmbre completo de Benja: " + this.name + " " + this.lastname;
    },
    // Agregar una función que imrprima una función en mayúsculas
    fullNameToUpperCase : function(){
        // return `Nombre completo de Benja: ${this.name.toUpperCase} ${this.lastname.toUpperCase}`;
        return this.fullName().toUpperCase();
    }

}
console.log( misDatosDePerfil );
console.table( misDatosDePerfil );
console.log( misDatosDePerfil.fullName );
console.log( misDatosDePerfil.fullName() );
console.log( misDatosDePerfil.fullNameToUpperCase() );

// ------------------------------
// Conversión explicita de datos (soerción de tipo)
// Conversión a String
const horaDescanso = 13.05;
console.log("Hora Descanso " + horaDescanso + " h." ); // concatenación
const horaDescansoTxt = String( horaDescanso );
console.log("Hora Descanso " + horaDescansoTxt + " h." ); // concatenación
console.log("Hora de retorno: " + horaDescanso + .15 ); // 13.050.15

const colorVerde = 0x008000; // Representación decimal: 32768
console.log(`El valor RGB del color verde es: ${colorVerde}`); // 32768
console.log(`El valor RGB del color verde es: ${ colorVerde.toString() }`); // 32768
console.log(`El valor RGB del color verde es: ${ colorVerde.toString(16) }`); // 8000
console.log(`El valor RGB del color verde es: #${ colorVerde.toString(16).padStart(6, "0") }`); // #008000

// Conversión a Number
const myAgeTxt = "25";
const sumatoria = 10 + myAgeTxt; // 1025
console.log( `Valor de la sumatoria ${sumatoria}` ); // 1025

console.log( `Valor de la sumatoria usando Number(): ${ 10 + Number(myAgeTxt) }` ); //35 
console.log( `Valor de la sumatoria usando Number(): ${ 10 + parseInt( myAgeTxt ) }` ); //35 
console.log( `Valor de la sumatoria usando Number(): ${ 10 + parseFloat( myAgeTxt ) }` ); //35
console.log( `Valor de la sumatoria usando Number(): ${ 10 +  (+myAgeTxt) }` ); //35

// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales 
// - parseInt convierte solo-la parte entera
console.log( parseInt(100.576) ); // 100
// - Number devuelbe NaN si la cadena conriene algún caracter no numérico 
// - parseInt convierte los enteros hasta encontrar un caracter no numérico
//       si la entrada no comienza con un valor numérico, dvelve NAN
console.log( Number("123 - 456" ) ); // NaN
console.log( parseInt("123 - 456" ) ); // 123
console.log( parseInt("$123 - 456" ) ); // NaN
console.log( "parseInt( '$123 - 456'.slice(1) ) :" +  parseInt( "$123 - 456".slice(1) ) ); // 123
console.log( Number( true ) ); // 1
console.log( parseInt( true ) ); // NaN

// Conversión a Booleano 
// En la conversasión de boolean los siguientes valores son false:
// "", 0, null, indefined
console.log( "Boolean(1): " + Boolean(1) ); // true
console.log( "Boolean(1000): " + Boolean(1000) ); // true
console.log( "Boolean(`Hola`): " + Boolean("hola") ); // true
console.log( "Boolean('false'): " + Boolean("False") ); // true
console.log( "Boolean(' '): " + Boolean(" ") ); // true
console.log( "Boolean(' '): " + Boolean("") ); // false

// Number
// [] -> 0 , [30] -> 30, [30,33] -> NaN, false -> 0, true -> 1
// String
// [] -> "" , [12,2] -> "12,2", function(){} -> "funtion(){}", {} -> [object, object]

console.log ( String( JSON.stringify( {name:"Benjamín"}) ));