const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//header and navbar
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  //   navMenu.classList.add("nav-logo-open");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
