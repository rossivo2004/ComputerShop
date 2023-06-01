let menuMobile = document.querySelector(".menu-mobile");
let menuHd = document.querySelector(".menu-hd");
let closeMenu = document.querySelector(".menu-hd__close");

menuMobile.addEventListener("click", function() {
    menuHd.style.transform = "translateX(0)";
});

closeMenu.addEventListener("click", function(){
    menuHd.style.transform = "translateX(1000px)";
})
