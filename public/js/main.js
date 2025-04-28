// VARIABLES GENERALES
let input = document.getElementsByClassName("input")[0];
let btnAdd = document.getElementsByClassName("btn")[0];
let bouton = document.getElementsByClassName("bouton")[0];
let bouton1 = document.getElementsByClassName("bouton")[1]; 
let bouton2 = document.getElementsByClassName("bouton")[2];
let text = document.getElementById("displayText");
// FUNCTION AJOUT
// SOURCE PREVENDEFAULT
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
function ajouter(e){
    e.preventDefault()
    if (input.value === "") 
      return;
   // CREATION DE LA DIV + 3 BOUTONS POUR FINI SUPP ET EDIT
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

    let btnFini = document.createElement("button");
    btnFini.textContent = "Done"
    btnFini.className = "task-btn btn-fini"
    btnFini.style.marginRight = "5px"
    btnFini.style.backgroundColor = "#519d79"
    btnFini.style.color = "white"
    btnFini.style.padding = "5px 10px"
    btnFini.style.borderRadius = "5px"
    btnFini.style.cursor = "pointer"

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Modifier"
    btnEdit.className = "task-btn btn-edit"
    btnEdit.style.backgroundColor = "#519d79"
    btnEdit.style.color = "white"
    btnEdit.style.marginRight = "5px"
    btnEdit.style.padding = "5px 10px"
    btnEdit.style.borderRadius = "5px"
    btnEdit.style.cursor = "pointer"


    let btnSupp = document.createElement("button");
    btnSupp.textContent = "Supprimer"
    btnSupp.style.backgroundColor = "#519d79"
    btnSupp.style.color = "white"
    btnSupp.className = "task-btn btn-supp"
    btnSupp.style.padding = "5px 10px"
    btnSupp.style.borderRadius = "5px"
    btnSupp.style.cursor = "pointer"
   // AJOUT DES 3 BOUTONS POUR FINI SUPP ET EDIT + TEXTE
    taskContainer.appendChild(tache1);
    taskContainer.appendChild(btnEdit);
    taskContainer.appendChild(btnFini);
    taskContainer.appendChild(btnSupp);
    text.appendChild(taskContainer);
    input.value = "";

    btnFini.addEventListener("click", ()=>{
      taskContainer.classList.remove("pasfini");
      taskContainer.classList.add("fini");
      applyCurrentFilter()
    })
// AJOUT EVENTLISTENER SUR LES 3 BOUTONS
    btnEdit.addEventListener("click", ()=>{
      let editInput = document.createElement("input")
      editInput.type = "text"
      editInput.value = tache1.textContent
      editInput.style.flex = "1"
      editInput.style.marginRight = "5px"
      editInput.style.padding = "5px"
      editInput.style.borderRadius = "5px"

      let btnConfirmer = document.createElement("button")
      btnConfirmer.textContent = "Confirmer"
      btnConfirmer.style.padding = "5px 10px"
      btnConfirmer.style.borderRadius = "5px"
      btnConfirmer.style.cursor = "pointer"
      btnConfirmer.style.backgroundColor = "#327191"
      btnConfirmer.style.color = "white"
      btnFini.style.display = "none"
      btnEdit.style.display = "none"
      btnSupp.style.display = "none"
      tache1.style.display = "none"
      taskContainer.insertBefore(editInput, btnFini);
      taskContainer.insertBefore(btnConfirmer, btnFini);

      btnConfirmer.addEventListener("click", ()=>{
         tache1.textContent = editInput.value
         tache1.style.display = "block"
         editInput.remove()
         btnConfirmer.remove()
         btnFini.style.display = "inline-block"
         btnEdit.style.display = "inline-block"
         btnSupp.style.display = "inline-block"
      })
    })
    btnSupp.addEventListener("click", ()=>{
      taskContainer.remove()
    })
   }
// SOURCE APPLYFILTER
// https://www.geeksforgeeks.org/javascript-apply-function/
// SOURCE CONTAINS
// https://www.w3schools.com/java/ref_string_contains.asp
// DEFINI QUEL FILTRE AVEC ACTIVE OU PAS
function applyFilterActuel() {
   if (bouton1.classList.contains("active")) {
      applyFilter("fini")
   }
   else if (bouton2.classList.contains("active")){
      applyFilter("pasfini")
   }
   else {
      applyFilter("all")
   }
}
// D'ABORD REMOVE LES FILTRES POUR AJOUTER LES BONS ENSUITE
function applyFilter(filter) {
   let tasks = document.querySelectorAll(".task-container")
   bouton.classList.remove("active")
   bouton1.classList.remove("active")
   bouton2.classList.remove("active")
   if (filter === "fini") {
      bouton1.classList.add("active")
   }
   else if (filter === "pasfini"){
      bouton2.classList.add("active")
   }
   else{
      bouton.classList.add("active")
   }
// BOUCLE FOREACH QUI VA PARCOURIR TOUTES LES TACHES ET AFFICHER LES BONNES EN FONCTIONS DU FILTRE
   tasks.forEach(task =>{
      if (filter === "all") {
         task.style.display = "flex"
      }
      else if (filter === "fini" && task.classList.contains("fini")){
         task.style.display = "flex"
      }
      else if (filter === "pasfini" && task.classList.contains("pasfini")){
         task.style.display = "flex"
      }
      else{
         task.style.display = "none"
      }
   })
}
// PERMET DE SELECTIONNER LE BON FILTRE
btnAdd.addEventListener("click", ajouter);

bouton.addEventListener("click", ()=>{
   applyFilter("all")
})
bouton1.addEventListener("click", ()=>{
   applyFilter("fini")
})
bouton2.addEventListener("click", ()=>{
   applyFilter("pasfini")
})

applyFilter("all")
