formulaire = document.querySelector('.formu')
bouton = document.querySelector('.btnvert')
console.log(formulaire)

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()

    nom = document.getElementById('nom').value
    taches = document.getElementById('tache').value
    tepmseffec = document.getElementById('temps').value
    choix = document.getElementById('selection').value
    contact = document.getElementById('contact').value
    date = document.getElementById('date').value

    let paiementEmp = [{
        nom: nom,
        tache : taches,
        paiement : paiement,
        tempseff : tepmseffec,
        contact : contact,
        date : date
    
    }]

    
    if (recuppaiement != null) {
        recuppaiement.push(paiementEmp)
        localStorage.setItem('lespaiements',JSON.stringify(recuppaiement));
    
    }else{
        
        recuppaiement  = JSON.parse(localStorage.getItem("lespaiements"))
        recuppaiement.push(paiementEmp)
        localStorage.setItem("lespaiements",JSON.stringify(recuppaiement))
        window.location.reload()

    }    
})

let tbody = document.querySelector(".tablo tbody")

console.log(tbody)

let paiement = JSON.parse(localStorage.getItem("lespaiements"))
paiement.forEach(element =>{
    ligne = `<tr id="${Math.random().toString(30).slice(2)}">
        <td>${Math.random().toString(30).slice(2)}</td>
        <td>${element.nom}</td>
        <td>${element.taches}</td>
        <td>${element.paiement}</td>
        <td>${element.tepmseffec }</td>
        <td>${element.contact }</td>
        <td>${element.date }</td>
        <td>
            <button>Modifier</button>
            <button>Supprimer</button>
        </td>
    </tr>`
console.log(element.nom)
    tbody.innerHTML += ligne    
});


