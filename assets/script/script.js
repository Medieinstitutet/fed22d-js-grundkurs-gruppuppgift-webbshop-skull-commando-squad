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

// funktion för minus och plusknappen
const decbtns = document.querySelectorAll('button[data-operator="minus"]');
const addbtns = document.querySelectorAll('button[data-operator="plus"]');

for (let i = 0; i < decbtns.length; i++) {
  decbtns[i].addEventListener("click", decreaseCount);
  addbtns[i].addEventListener("click", increaseCount);
}

function decreaseCount(e) {
  const amountEl =
    e.currentTarget.parentElement.parentElement.querySelector(".amount");
  let amount = amountEl.innerText;

  if (amount - 1 < 0) {
    return;
  }
  amountEl.innerHTML = amount - 1;
  const sumEl =
    e.currentTarget.parentElement.parentElement.querySelector(".sum");
  const price = 15;
  sumEl.innerHTML = (amount - 1) * price;
}

function increaseCount(e) {
  const amountEl =
    e.currentTarget.parentElement.parentElement.querySelector(".amount");
  let amount = Number(amountEl.innerText);
  let newAmount = amount + 1;
  amountEl.innerHTML = newAmount;
  const sumEl =
    e.currentTarget.parentElement.parentElement.querySelector(".sum");
  const price = 15;
  sumEl.innerHTML = newAmount * price;
}
