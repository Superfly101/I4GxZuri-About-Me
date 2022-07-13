const navbarToggler = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  if (menu.className === "navbar-collapse") {
    menu.className = "navbar-collapse collapse";
  } else {
    menu.className = "navbar-collapse";
  }
});
