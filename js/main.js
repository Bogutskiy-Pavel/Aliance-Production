const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const LightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-dark";
};
const LightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-light";
};
const openMenu = (event) => {
  //фенкция открывания меню
  menu.classList.add("is-open"); //Вешает класс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; //Запрещаем прокрутку сайта под меню
  LightModeOn();
};
const closeMenu = (event) => {
  //фенкция закрывания меню
  menu.classList.remove("is-open"); //Убирает класс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; //Возвращает прокрутку сайта под меню
  LightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? LightModeOn() : LightModeOff();
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});
