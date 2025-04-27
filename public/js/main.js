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

    let btnFini = document.createElement("button");
    btnFini.textContent = "Done"
    btnFini.className = "task-btn btn-fini"
    btnFini.style.marginRight = "5px"
    btnFini.style.padding = "5px 10px"
    btnFini.style.borderRadius = "5px"
    btnFini.style.cursor = "pointer"

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Modifier"
    btnEdit.className = "task-btn btn-edit"
    btnEdit.style.marginRight = "5px"
    btnEdit.style.padding = "5px 10px"
    btnEdit.style.borderRadius = "5px"
    btnEdit.style.cursor = "pointer"


    let btnSupp = document.createElement("button");
    btnSupp.textContent = "Supprimer"
    btnSupp.className = "task-btn btn-supp"
    btnSupp.style.padding = "5px 10px"
    btnSupp.style.borderRadius = "5px"
    btnSupp.style.cursor = "pointer"

    taskContainer.appendChild(tache1);
    taskContainer.appendChild(btnEdit);
    taskContainer.appendChild(btnFini);
    taskContainer.appendChild(btnSupp);
    text.appendChild(taskContainer);
    input.value = "";

   }