let tableauvert = JSON.parse(localStorage.getItem("ajoutEmploye"))
let nmbemployer = document.querySelector(".employe h1")
nmbemployer.textContent = tableauvert.length

let tableauvert1 = JSON.parse(localStorage.getItem("ajoutAdmin"))
let nombadmin = document.querySelector(".administrateur h1")
nombadmin.textContent = tableauvert1.length

let tableauvert2 = JSON.parse(localStorage.getItem("lesTaches"))
let nombtaches = document.querySelector(".taches h1")
nombtaches.textContent = tableauvert2.length