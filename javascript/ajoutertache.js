formulaire = document.querySelector('.formu')
bouton = document.querySelector('#btnajouter')
console.log(formulaire)

function supprimer(){
    let sup = document.querySelectorAll("#delete")

    sup.forEach(function (elem) {
        elem.addEventListener('click', function() {
          console.log("azerty")
        });
    });
}


formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()

    nom = document.getElementById('nom').value
    tache = document.getElementById('tache').value
    paiement = document.getElementById('paye').value
    dateajout = document.getElementById('date').value

    let paiementEmp = {
        nom: nom,
        tache : tache,
        paiement : paiement,
        dateajout : dateajout
    }
    
    recup  = JSON.parse(localStorage.getItem("lesTaches")) || []
    if (recup != null) {
        recup.push(paiementEmp)
        localStorage.setItem('lesTaches',JSON.stringify(recup));
        window.location.reload()
    
    }else{
        
    window.location.reload()

    }    
})

let tbody = document.querySelector(".tablo tbody")

console.log(tbody)

let tache = JSON.parse(localStorage.getItem("lesTaches"))
console.log("tfguhjkbkj",tache)
tache.forEach(element => {
    ligne = `<tr id="${Math.random().toString(30).slice(2)}">
        <td>${Math.random().toString(30).slice(2)}</td>
        <td>${element.nom}</td>
        <td>${element.tache}</td>
        <td>${element.paiement}</td>
        <td>${element.dateajout}</td>
        <td>
            <button>Modifier</button>
            <button id="delete" onclick="supprimer()">Supprimer</button>
        </td>
    </tr>`
    console.log(element.nom)   
    tbody.innerHTML += ligne 
});

let tableauvert = JSON.parse(localStorage.getItem("lesTaches"))
let nmbemtache = document.querySelector(".employe h1")
nmbemployer.textContent = tableauvert.length

