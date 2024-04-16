// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
const Navlink = document.querySelectorAll(".nav-link");
Navlink.forEach(e => e.addEventListener("click", () => {
  hamburger.classList.toggle("nav-active");
  document.body.classList.remove("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}))
function mobileMenu() {
  hamburger.classList.toggle("nav-active");
  document.body.classList.toggle("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}






// ----------------------------back-to-button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -------------year
const d = new Date();
let year = d.getFullYear();
document.querySelector(".Year").innerHTML = year
