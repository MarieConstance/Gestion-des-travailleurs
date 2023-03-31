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

                window.location.href = "../html/superAdmin.html"
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

// boutonconnexion.addEventListener('click', (e)=>{
//     e.preventDefault()

//     let nomutilisateur = document.getElementById('email').value
//     let motdepasse = document.getElementById('mdp').value

//     let recupAdmin = localStorage.getItem("Administrateur");
//     recupAdmin = JSON.parse(recupAdmin);
//     console.log(recupAdmin);

//     if (recupAdmin != null) {
//         if (nomutilisateur === recupAdmin.user) {
//             if (motdepasse === recupAdmin.pwd) {
//                 let session = {
//                     user : administrateur,
//                     status : "Administrateur",
//                     pwd : motdepasse
//                 }
//                 localStorage.setItem('sessionUser', JSON.stringify(session));
//                 window.location.href = "../html/dashboardadmin.html"
                
//             }
//             else{
//                 alert("le mot de passe incorrect")
//             }
//         }
//         else{
//             alert("nom d'utilisatuer incorrect")
//            }
//     }
// })