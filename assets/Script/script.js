var Navbtn = document.querySelector('.Navbtn')
var sideNav = document.querySelector('.sideNav')
var menuBtn = document.querySelector('.menuBtn')
Navbtn.onclick = function(){
    if(sideNav.style.right == "-25rem"){
        sideNav.style.right ="0";
        menuBtn.src="./assets/Barber_Shop_img/close.png";
    }
    else{
        sideNav.style.right ="-25rem";
        menuBtn.src="./assets/Barber_Shop_img/menu.png"
    }
}