/*
    ========================================
    BURGER-MENU
    ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function() {
        menu.parentElement.classList.toggle("show");
        burgerMenu.classList.toggle("active");
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.parentElement.classList.remove("show");
            burgerMenu.classList.remove("active");
        });
    });
});
