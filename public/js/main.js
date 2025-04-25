let input = document.getElementsByClassName("input")[0];
let btnAdd = document.getElementsByClassName("btn")[0];
let bouton = document.getElementsByClassName("bouton")[0];
let bouton1 = document.getElementsByClassName("bouton")[1]; 
let bouton2 = document.getElementsByClassName("bouton")[2];

let button = document.getElementsByClassName("bouton2")[0];
let button1 = document.getElementsByClassName("bouton2")[1];
let button2 = document.getElementsByClassName("bouton2")[2];
let text = document.getElementById("displayText");
let edit = false;

function ajouter(e){
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
  bouton.addEventListener("click", ()=>{
    button.style.display = "none"
    button1.style.display = "none"
    button2.style.display = "none"
    bouton.addEventListener("click", ()=>{
        button.style.display = "flex"
        button1.style.display = "flex"
        button2.style.display = "flex"
    })
 })
 button1.addEventListener("click", ()=>{
    button.style.display = "none"
    button2.style.display = "none"
    let confirm = document.createElement("input")
    confirm.textContent = "confirmer"
    button1.insertAdjacentElement("afterend", confirm)

    
 })
 bouton1.addEventListener("click",()=>{
    let yesfini = document.getElementsByClassName("fini")
    let notfini = document.getElementsByClassName("pasfini")
    for (let i = 0; i < yesfini.length; i++) {
       const element = yesfini[i];
       element.style= "display:flex"
 
    }
    for (let i = 0; i < notfini.length; i++) {
       const element = notfini[i];
       element.style= "display:none"
    }
 })
 bouton2.addEventListener("click",()=>{
    let yesfini = document.getElementsByClassName("fini")
    let notfini = document.getElementsByClassName("pasfini")
    for (let i = 0; i < yesfini.length; i++) {
       const element = yesfini[i];
       element.style= "display:none"
    }
    for (let i = 0; i < notfini.length; i++) {
       const element = notfini[i];
       element.style= "display:flex"
    }
 })