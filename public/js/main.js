let input = document.getElementsByClassName("input")[0];
let btnAdd = document.getElementsByClassName("btn")[0];
let bouton = document.getElementsByClassName("bouton")[0];
let bouton1 = document.getElementsByClassName("bouton")[1]; 
let bouton2 = document.getElementsByClassName("bouton")[2];

let button = document.getElementsByClassName("bouton2")[0];
let button1 = document.getElementsByClassName("bouton2")[1];
let button2 = document.getElementsByClassName("bouton2")[2];


function ajouter(e) {
    e.preventDefault()
    let liste = document.createElement("p")
    text.appendChild(liste)
    let tache1= document.createElement("p")
    tache1.textContent = String(input.value)
    liste.appendChild(tache1)
    tache1.style.margin = "0 !important"
    tache1.style.padding = "0 !important"
 }
 btnAdd.addEventListener("click", ajouter)

 