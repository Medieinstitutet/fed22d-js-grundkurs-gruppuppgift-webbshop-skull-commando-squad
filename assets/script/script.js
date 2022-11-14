// hamburgar meny start //

// deklarerar en hamburger variabel
const hamburger = document.querySelector(".hamburger");
// deklarerar en menu variabel
const navMenu = document.querySelector(".donut-nav-menu");

// skapar en klick funktion till hamburger och menu för att aktiveras
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// skapar en funktion för alla nav items för att ta bort aktivering
document.querySelectorAll(".nav-link").forEach((n) =>
  navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// hamburgar meny end //

// shoppingcart meny start //

// deklarerar en shopping-cart variabel
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartMenu = document.querySelector(".shopping-cart-menu");

// skapar en klick funktion till shopping-cart menu för att aktiveras
shoppingCart.addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
  shoppingCartMenu.classList.toggle("active");
});

// shoppingcart meny end //
