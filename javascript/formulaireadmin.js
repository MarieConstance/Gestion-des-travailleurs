formulaire = document.querySelector('.formu')
bouton = document.querySelector('.btnconnexion')
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()
})

bouton.addEventListener('click', (e)=>{

    let nom = document.getElementById('nom').value
    let selection = document.getElementById('selection').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value

    let ajoutAdmin = {
        nom : nom,
        selection  : selection,
        tel : contact,
        adresseemail : email
      }
    
    let recuperationAdmin = localStorage.getItem("ajoutAdmin");
    recuperationAdmin = JSON.parse(recuperationAdmin) ;
    console.log(recuperationAdmin); 

    if (recuperationAdmin != null) {
        recuperationAdmin.push(ajoutAdmin)
        localStorage.setItem('ajoutAdmin',JSON.stringify(recuperationAdmin));
        window.location.href = "../html/superadmin.html"
    
    }else{
        console.log("ok")
        recuperationAdmin = []
        recuperationAdmin.push(ajoutAdmin)
        localStorage.setItem('ajoutAdmin',JSON.stringify(recuperationAdmin));
        window.location.href = "../html/superadmin.html"
    
    }    

})