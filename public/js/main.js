let input = document.getElementsByClassName("input")[0];
let btnAdd = document.getElementsByClassName("btn")[0];
let bouton = document.getElementsByClassName("bouton")[0];
let bouton1 = document.getElementsByClassName("bouton")[1]; 
let bouton2 = document.getElementsByClassName("bouton")[2];

let text = document.getElementById("displayText");
let edit = false;

function ajouter(e){
    e.preventDefault()
    if (input.value === "") 
      return;
    let taskContainer = document.createElement("div");
    taskContainer.className = "task-container pasfini"
    taskContainer.style.display = "flex"
    taskContainer.style.alignItems = "center"
    taskContainer.style.marginBottom = "10px"
    taskContainer.style.width = "100%"
    
    let tache1 = document.createElement("p");
    tache1.textContent = input.value
    tache1.style.margin = "0"
    tache1.style.padding = "0"
    tache1.style.marginRight = "10px"
    tache1.style.flex = "1"
   }