// SELECTORES 

let onePoint = document.querySelector("#onePoint");
let twoPoint = document.querySelector("#twoPoint");
let threePoint = document.querySelector("#threePoint");
let fourPoint = document.querySelector("#fourPoint");
let fivePoint = document.querySelector("#fivePoint");
let card = document.querySelector(".card")
let boton = document.querySelector(".boton")
let container = document.querySelector(".container")
let containerThankYou = document.querySelector(".containerThankYou")
let choise = document.querySelector(".choise")
let selectores = [onePoint,twoPoint,threePoint,fourPoint,fivePoint]

// VARIABLES

let seleccionado = null;


boton.addEventListener("click", function(){
    card.style = "display: none";
    containerThankYou.style = "display: flex";
    choise.innerHTML = "--> " + seleccionado + " <--";
})


// Recorro el array "selectores"
selectores.forEach(element => {
    element.addEventListener("click", function(){
        formatearEstilos () // formateo el estilo de los botones 
        seleccionado = element.innerHTML; // Guardo el numero seleccionado
        element.className = 'active' // Le cambio el color al boton
    })
});

function formatearEstilos (){
    selectores.forEach(element => { 
        element.className = ""; 
    })
}
