
let tbody = document.querySelector(".tablo tbody")

console.log(tbody)

let employee = JSON.parse(localStorage.getItem("ajoutEmploye"))
employee.forEach(element => {
    ligne = `<tr id="${Math.random().toString(30).slice(2)}">
        <td>${Math.random().toString(30).slice(2)}</td>
        <td>${element.nom}</td>
        <td>${element.datenaissanc}</td>
        <td>${element.selection}</td>
        <td>${element.adresseemail}</td>
        <td>${element.tel}</td>
        <td>
            <button>Modifier</button>
            <button>Supprimer</button>
        </td>
    </tr>`
console.log(element.nom)
    tbody.innerHTML += ligne    
});

let tableauvert = JSON.parse(localStorage.getItem("ajoutEmploye"))
let nmbemployer = document.querySelector(".employe h1")
nmbemployer.textContent = tableauvert.length

let tableauvert1 = JSON.parse(localStorage.getItem("ajoutAdmin"))
let nombadmin = document.querySelector(".administrateur h1")
nombadmin.textContent = tableauvert1.length

let tableauvert2 = JSON.parse(localStorage.getItem("lesTaches"))
let nombtaches = document.querySelector(".taches h1")
nombtaches.textContent = tableauvert2.length


