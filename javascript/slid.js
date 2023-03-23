let slidindex = 0;
fonctionslid();

function fonctionslid(){
    let i
    let slid = document.querySelectorAll(".slid");
    for (let i = 0; i < slid.length; i++) {
        slid[i].style.display = "none";    
    }
        slidindex ++
    if (slidindex > slid.length) {
        slidindex = 1;
    }
    slid[slidindex - 1].style.display = "block";

    setTimeout(fonctionslid, 2000)

}
