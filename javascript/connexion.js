 let boutonconnexion = document.querySelector('.btn');
 let dataSup = {
    user : "superadmin",
    pwd:  "superadmin"
 }
 localStorage.setItem("superAdmin", JSON.stringify(dataSup)); 

 boutonconnexion.addEventListener('click', (e)=>{
    e.preventDefault()

    let adressemail = document.getElementById('email').value
    let motdepass = document.getElementById('mdp').value

    let recupSuperAdmin = localStorage.getItem("superAdmin");
    recupSuperAdmin = JSON.parse(recupSuperAdmin);
    console.log(recupSuperAdmin)

    if(recupSuperAdmin != null){
       if(adressemail === recupSuperAdmin.user){
            if(motdepass === recupSuperAdmin.pwd){

                let session = {
                    user : adressemail,
                    status: "SuperAdmin",
                    pwd: motdepass
                }
                localStorage.setItem('sessionUser', JSON.stringify(session));

                window.location.href = "../html/superadmin.html"
            }
            else{
                alert("le mot de passe incorrect")
            }
       }
       else{
        alert("nom d'utilisatuer incorrect")
       }
    }

 })

// -------------connexion administrateur------------------

// 