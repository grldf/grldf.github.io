document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector("nav .menu");
    const menuToggle = document.querySelector(".menu-toggle");

    // ✅ Vérifie si le menu était ouvert sur une autre page
    if (localStorage.getItem("menuOpen") === "true") {
        menu.classList.add("show");
    }

    // ✅ Gestion du bouton burger
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");

        // ✅ Sauvegarde l'état du menu pour les autres pages
        if (menu.classList.contains("show")) {
            localStorage.setItem("menuOpen", "true");
        } else {
            localStorage.setItem("menuOpen", "false");
        }
    });
});
