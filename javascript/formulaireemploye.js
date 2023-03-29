formulaire = document.querySelector('.formu')
bouton = document.querySelector('.btnconnexion')
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()
})

bouton.addEventListener('click', (e)=>{

    let nom = document.getElementById('nom').value
    let datenaissance = document.getElementById('date').value
    let choix = document.getElementById('select').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value

    let ajoutemployer = {
        nom : nom,
        datenaissanc : datenaissance,
        selection  : choix,
        tel : contact,
        adresseemail : email
      }
    
    let recuperation = localStorage.getItem("ajoutEmploye");
    recuperation = JSON.parse(recuperation) ;
    console.log(recuperation); 

    if (recuperation != null) {
        recuperation.push(ajoutemployer)
        localStorage.setItem('ajoutEmploye',JSON.stringify(recuperation));
    
    }else{
        console.log("ok")
        recuperation = []
        recuperation.push(ajoutemployer)
        localStorage.setItem('ajoutEmploye',JSON.stringify(recuperation));
    
    }    

})


