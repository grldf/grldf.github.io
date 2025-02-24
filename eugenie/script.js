document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("nav .menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // ✅ Vérifie si on est sur mobile et que le menu est mal affiché
  if (window.innerWidth < 768) {
    menu.style.display = "none"; // Cache le menu au chargement
  }

  // ✅ Gestion du bouton burger
  menuToggle.addEventListener("click", function () {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex"; // Affiche le menu
    } else {
      menu.style.display = "none"; // Cache le menu
    }
  });
});
