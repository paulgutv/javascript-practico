const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    cartMenu.classList.add("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    cartMenu.classList.add("inactive");
}
function toggleCartMenu() {
    cartMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}