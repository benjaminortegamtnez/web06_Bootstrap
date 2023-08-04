console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert("La mayonessa es un instrumento?");
}

function changeColor( elemntHTML, color) {
    /* alert("Que emoción, voy a cambiar mi color") */
    console.log(elemntHTML);
    console.log(color);

    elemntHTML.style.color = color;

}

function changeColorWithPrompt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
     changeTextOfUserColor ( elementHtml, color );
    changeColor( elementHtml, color );
}

function changeTextOfUserColor ( element, color ) {
    element.innerHTML = "<h3>Ahora soy <em>" + color + "</em> </h3>";
}

function resetColor () {
    const refRedColor = document.getElementById("red-color");
    const refGreenColor = document.getElementById("green-color");
    const refPurpleColor = document.getElementById("purple-color");
    const refUserColor = document.getElementById("user-color");

    changeColor(refRedColor, 'Black');
    changeColor(refGreenColor, 'Black');
    changeColor(refPurpleColor, 'Black');
    changeColor(refUserColor, 'Black');
    changeTextOfUserColor( refUserColor, 'black');

}

function changeName() {
    const userName = prompt("agrega tu nombre CHOLO", "Big Smoke");
    const refGretting = document.getElementById("gretting");
    refGretting.innerHTML = `Hola ${userName}, la clika te respalda`;

}
