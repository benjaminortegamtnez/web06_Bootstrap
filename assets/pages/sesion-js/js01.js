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
// Una variable que intensionalmente se vorra el tipo de dato
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