const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu-mobile");
const desaparezco = document.querySelector(".seleccion_de_producto");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("show-menu");
  desaparezco.classList.toggle("adios-me-voy");
});