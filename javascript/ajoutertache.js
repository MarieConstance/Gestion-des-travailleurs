formulaire = document.querySelector('.formu')
bouton = document.querySelector('.btnajouter')
console.log(formulaire)
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()

    nom = document.getElementById('nom').value
    taches = document.getElementById('tache').value
    paiement = document.getElementById('paye').value
    dateajout = document.getElementById('date').value

    let paiementEmp = [{
        nom: nom,
        tache : taches,
        paiement : paiement,
        dateajout : dateajout
    }]

    
    if (recup != null) {
        recup.push(paiementEmp)
        localStorage.setItem('lesTaches',JSON.stringify(recup));
    
    }else{
        
    recup  = JSON.parse(localStorage.getItem("lesTaches"))
    recup.push(paiementEmp)
    localStorage.setItem("lesTaches",JSON.stringify(recup))
    window.location.reload()

    }    
})

let tbody = document.querySelector(".tablo tbody")

console.log(tbody)

let tache = JSON.parse(localStorage.getItem("lesTaches"))
tache.forEach(element => {
    ligne = `<tr id="${Math.random().toString(30).slice(2)}">
        <td>${Math.random().toString(30).slice(2)}</td>
        <td>${element.nom}</td>
        <td>${element.taches}</td>
        <td>${element.paiement}</td>
        <td>${element.dateajout }</td>
        <td>
            <button>Modifier</button>
            <button>Supprimer</button>
        </td>
    </tr>`
console.log(element.nom)
    tbody.innerHTML += ligne    
});

let tableauvert = JSON.parse(localStorage.getItem("lesTaches"))
let nmbemtache = document.querySelector(".employe h1")
nmbemployer.textContent = tableauvert.length

