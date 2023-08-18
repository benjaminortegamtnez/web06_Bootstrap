console.log("Sesión JS04 Matrices y Bucles")


const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /* ByteMe */
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* PerryCode */
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* BugBusters */
];

console.log(`Integrantes de BugBusters: ${ personasEnCh30[2] }` ); // Lu,Leo,Daniel,Gina
console.log(`Integrantes de BugBusters: ${ personasEnCh30[2].join( ", ") }` ); // Lu, Leo, Daniel, Gina

console.log(`BugBusters integrantes n. 2:  ${ personasEnCh30[2][0] }` ); // Lu

// personasEnCh30[1][3] = "Brayan";
personasEnCh30[1].splice(3, 0, "Brayan");
console.table( personasEnCh30 )
console.log("========================")

// ------------ Iterando todos los elementos -------------------

for (let equipo = 0; equipo < personasEnCh30.length; /*filas*/ equipo++) {
    for (let persona = 0; persona < personasEnCh30[equipo].length; persona++) {
        console.log( personasEnCh30[ equipo ][ persona ] ); 
        
    }
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

console.log("=============================")
console.table( personasEnCh30 ); 

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}

console.log("=============================")
myPet.split("").forEach( character => console.log( character ))
console.log("=============================")


for (const equipo of personasEnCh30 ) {
    console.log( equipo ); // Arreglo de equipos
    for (const persona of equipo) {
        console.log( persona ); //  Persona de cada equipo
    }
}

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.

*/
console.table( personasEnCh30 ); 

function iterarEquipos( equipo, indice, arreglo ){
    console.log(`Indice ${indice}: ${equipo} `)
    equipo.forEach(  iterarPersonas  );
    return equipo; // arreglo de cada equipo integrador
}

function iterarPersonas( persona, indice ){
    console.log(`Indice P ${indice}: ${persona} `)
    return persona;
}


// personasEnCh30.forEach( iterarEquipos );

personasEnCh30.forEach( (equipo, indexEquipo) => 
                    equipo.forEach( (persona, indexPer)=> 
                    console.log(` [${indexEquipo}][${indexPer}] : ${persona}` )));
 
// Solo se imprimi el elemento (persona)                    
//personasEnCh30.forEach( equipo => equipo.forEach( persona=> console.log(`${persona}`)));


for (let index = 0; index < 10; index++ ){
    if (index >= 5 ) break;
    console.log( index );
}

// ------------------------------------

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${ i * j }`);
        
    }    
}

console.log("================ Uso de break =====================")

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        if ( j === 5 ) break;
        console.log(`${i} * ${j} = ${ i * j }`);
        
    }    
}

console.log("================ Uso de break superior =====================")

rompeCicloSuperior:

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 10; j++) {
        if ( i === 2 && j == 5 ) break rompeCicloSuperior;
        console.log(`${i} * ${j} = ${ i * j }`);
        
    }    
}

// --------------------------- Uso de continue -----------------------------

console.log("================ Uso de continue con tag =====================")
// Realizar la multiplicación hasta el  3
// 1*1, 1*2, 1*3 ..... 2*3... 5*3

continuaCicloSuperior:

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 10; j++) {
        if ( j > 3) continue continuaCicloSuperior;
        console.log(`${i} * ${j} = ${ i * j }`);
        
    }    
}


// -------------------------------

/* let counter = 1;

while ( confirm("¿Quieres continuar?") ) {
    console.log(`Veces que has continuado: ${counter}` );
    counter++;
} */

//----------------------------------

