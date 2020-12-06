const hamburger = document.querySelector(".hamburger");
const hamburgerBar = [...document.querySelectorAll(".hamburger__bar")];
const header = document.querySelector(".header");
const list = document.querySelector(".list");
const logo = document.querySelector(".logo");
const navLink = [...document.querySelectorAll(".nav__link")];

hamburger.addEventListener("click", () => {
  list.classList.toggle("active");
  logo.classList.toggle("logo-active");
  header.classList.toggle("bcg");
  hamburgerBar.forEach((bar) => bar.classList.toggle("bar-active"));
});

const navLinkColor = navLink.map((link) => {
  link.classList.toggle("nav__link--active");
  });
