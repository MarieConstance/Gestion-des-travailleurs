formulaire = document.querySelector('.formu')
bouton = document.querySelector('.btnvert')
console.log(formulaire)

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()

    nom = document.getElementById('nom').value
    taches = document.getElementById('tache').value
    montant = document.getElementById('montant').value
    temps = document.getElementById('temps').value
    modepaiement = document.getElementById('selection').value
    contact = document.getElementById('contact').value
    date = document.getElementById('date').value


    let paiementEmp = [{
        nom: nom,
        tache : taches,
        paiement : montant,
        tempseff : temps,
        modepaie : modepaiement,
        contact : contact,
        date : date
    }]
                            
    let recuppaiement = localStorage.getItem("ajoutEmploye");
    recuppaiement = JSON.parse(recuppaiement) ;
    console.log(recuppaiement); 

    if (recuppaiement != null) {
        recuppaiement.push(paiementEmp)
        localStorage.setItem('lespaiements',JSON.stringify(recuppaiement));
    
    }else{
        
        recuppaiement  = JSON.parse(localStorage.getItem("lespaiements"))
        recuppaiement.push(paiementEmp)
        localStorage.setItem("lespaiements",JSON.stringify(recuppaiement))
        window.location.reload()

    }  
    alert ("paiement effectué avec succes")  
})

