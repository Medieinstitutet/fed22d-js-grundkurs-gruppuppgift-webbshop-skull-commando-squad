//deklarerar e array med alla munk objekt
const donuts = [
  {
    name: "Sexy Chocolate",
    id: 0,
    price: getDonutPrice(30),
    originalPrice: 30,
    rating: 3,
    amount: 0,
    sum: 0,
    img: ["assets/img/chocolate-3.png", "assets/img/Chocolate-1.png"],
    alt: ["donut with chocolate glaze", "donut with chocolate glaze"],
    description: "Smak av choklad",
    category: ["tasty", "all"],
  },
  {
    name: "Vanilla Ice",
    id: 1,
    price: getDonutPrice(25),
    originalPrice: 25,
    rating: 1,
    amount: 0,
    sum: 0,
    img: ["assets/img/vanilla-ice.png", "assets/img/vanilla-2.png"],
    alt: ["donut with vanilla glaze", "donut with vanilla glaze"],
    description: "Smak av vanilj",
    category: ["tasty", "all"],
  },
  {
    name: "Strawberry Splash",
    id: 2,
    price: getDonutPrice(35),
    originalPrice: 35,
    rating: 5,
    amount: 0,
    sum: 0,
    img: ["assets/img/strawberry.png", "assets/img/strawberry-2.png"],
    alt: ["donut with strawberry glaze", "donut with strawberry glaze"],
    description: "Smak av jordgubb",
    category: ["tasty", "all"],
  },
  {
    name: "Salted Caramell",
    id: 3,
    price: getDonutPrice(45),
    originalPrice: 45,
    rating: 4,
    amount: 0,
    sum: 0,
    img: ["assets/img/salted-caramell.png", "assets/img/salted-caramel-2.png"],
    alt: ["donut made of fudge", "donut made of fudge"],
    description: "Smak av kola",
    category: ["tasty", "all"],
  },
  {
    name: "American Breakfast",
    id: 4,
    price: getDonutPrice(45),
    originalPrice: 45,
    rating: 5,
    amount: 0,
    sum: 0,
    img: ["assets/img/bacon.PNG", "assets/img/bacon-donut-2.jpg"],
    alt: [
      "donut with bacon crust and glaze",
      "donut with bacon crust and glaze",
    ],
    description: "Smak av bacon",
    category: ["meat", "all"],
  },
  {
    name: "Bloody Bastard",
    id: 5,
    price: getDonutPrice(65),
    originalPrice: 65,
    rating: 1,
    amount: 0,
    sum: 0,
    img: ["assets/img/rib-eye.PNG", "assets/img/rib-eye.jpeg"],
    alt: ["donut with meat filling", "donut with meat filling"],
    description: "Smak av entrecote",
    category: ["meat", "all"],
  },
  {
    name: "Crispy Chicken",
    id: 6,
    price: getDonutPrice(75),
    originalPrice: 75,
    rating: 3,
    amount: 0,
    sum: 0,
    img: ["assets/img/chicken.PNG", "assets/img/chicken-2.webp"],
    alt: ["donut made of chicken with crust", "Sweet cock"],
    description: "Smak av krispig kyckling",
    category: ["meat", "all"],
  },
  {
    name: "Pulled Beef",
    id: 7,
    price: getDonutPrice(55),
    originalPrice: 55,
    rating: 4,
    amount: 0,
    sum: 0,
    img: ["assets/img/pulled-beef.PNG", "assets/img/pulled-beef-2.jpg"],
    alt: ["donut with pulled beef topping", "donut with pulled beef topping"],
    description: "Trådig och rökig",
    category: ["meat", "all"],
  },
  {
    name: "Water Cress",
    id: 8,
    price: getDonutPrice(80),
    originalPrice: 80,
    rating: 1,
    amount: 0,
    sum: 0,
    img: ["assets/img/water-cress.png", "assets/img/cress-donut-2.jpeg"],
    alt: ["green donut made of cress", "green donut made of cress"],
    description: "Pepprig och fräsch",
    category: ["plant", "all"],
  },
  {
    name: "Dandelion",
    id: 9,
    price: getDonutPrice(85),
    originalPrice: 85,
    rating: 2,
    amount: 0,
    sum: 0,
    img: ["assets/img/dandelion.png", "assets/img/dandelion-2.jpg"],
    alt: ["yellow donut made of flowers", "yellow donut made of flowers"],
    description: "Smak av maskros",
    category: ["plant", "all"],
  },
  {
    name: "Corn Hole",
    id: 10,
    price: getDonutPrice(80),
    originalPrice: 80,
    rating: 5,
    amount: 0,
    sum: 0,
    img: ["assets/img/corn-hole.PNG", "assets/img/corn-hole-2.jpg"],
    alt: [
      "a plastic ring with a corn in it",
      "a plastic ring with a corn in it",
    ],
    description: "Smak av majs och plast",
    category: ["plant", "all"],
  },
  {
    name: "Seaweed",
    id: 11,
    price: getDonutPrice(20),
    originalPrice: 20,
    rating: 1,
    amount: 0,
    sum: 0,
    img: ["assets/img/sea-weed.png", "assets/img/sea-weed-donut-2.jpeg"],
    alt: ["donut made of sea weed", "donut made of sea weed"],
    description: "Stora inlag av umami",
    category: ["plant", "all"],
  },
  {
    name: "Gratis luciamunk",
    id: 12,
    price: getDonutPrice(0),
    originalPrice: 0,
    rating: 5,
    amount: isLucia() ? 1 : 0,
    sum: 0,
    img: ["assets/img/luciamunk.png"],
    alt: ["free donut for lucia", "free donut for lucia"],
    description: "Den godaste luciamunken",
    category: ["plant", "all"],
  },
];
// Deklarerar variabel för temp array för donuts
let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

let totalSum = 0;

// Deklarerar en variabel för munk container
const donutContainer = document.querySelector(".donutContainer");

// deklarerar en hamburger variabel
const hamburger = document.querySelector(".hamburger");
// deklarerar en menu variabel
const navMenu = document.querySelector(".sort-nav-menu");

// deklarerar en shopping-cart variabel
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartMenu = document.querySelector(".shopping-cart-menu");

hamburger.addEventListener("click", openMenu);
// skapar en klick funktion till shopping-cart menu för att aktiveras
shoppingCart.addEventListener("click", activateShoppingCart);

// Deklarerar variablar för sorting knappar av namn
const sortByNameBtnStart = document.querySelector(".nameSortStart");
const sortByNameBtnEnd = document.querySelector(".nameSortEnd");

// Deklarerar variablar för sorting knappar av rating
const sortByRatingBtnStart = document.querySelector(".ratingSortStart");
const sortByRatingBtnEnd = document.querySelector(".ratingSortEnd");

// eventlistener för knappar av rating sortering
sortByRatingBtnStart.addEventListener("click", sortByRatingStart);
sortByRatingBtnEnd.addEventListener("click", sortByRatingEnd);

// Deklarerar variablar för sorting knappar av pris
const sortByPriceBtnStart = document.querySelector(".priceSortStart");
const sortByPriceBtnEnd = document.querySelector(".priceSortEnd");

// deklarerar varibel category filter
const categoryFilterRadio = document.querySelectorAll(
  '[name="categoryFilter"]'
);
// deklarerar variabel för price range slider
const priceRangeSlider = document.querySelector("#priceRange");
const currentRangeValue = document.querySelector("#currentRangeValue");

// deklarerar variablar för formuläret
const cardRadio = document.querySelector("#cardRadio");
cardRadio.addEventListener("click", cardOr);
const invoiceRadio = document.querySelector("#invoiceRadio");
invoiceRadio.addEventListener("click", cardOr);

const openFormBtn = document.querySelector(".submit-order");
openFormBtn.addEventListener("click", showForm);
const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", hideForm);
const usageChecked = document.querySelector("#usage");
const submitBtn = document.querySelector("#submit");

priceRangeSlider.addEventListener("input", changePriceRange);

// eventlistener för knappar av namn sortering
sortByNameBtnStart.addEventListener("click", sortByNameStart);
sortByNameBtnEnd.addEventListener("click", sortByNameEnd);

// eventlistener för knappar av pris sortering
sortByPriceBtnStart.addEventListener("click", sortByPriceStart);
sortByPriceBtnEnd.addEventListener("click", sortByPriceEnd);

createEventListeners();

// skapar en klick funktion till hamburger och menu för att aktiveras
function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function activateShoppingCart() {
  shoppingCart.classList.toggle("active");
  shoppingCartMenu.classList.toggle("active");
}
// Funktion för att sortera munkar efter namn a-z
function sortByNameStart() {
  const sorted = filteredDonutsInPriceRange.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  renderDonuts();
}

// Funktion för att sortera munkar efter namn z-a
function sortByNameEnd() {
  const sorted = filteredDonutsInPriceRange.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }

    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });

  renderDonuts();
}
// Funktion för att sortera munkar efter rating
function sortByRatingStart() {
  filteredDonutsInPriceRange.sort((a, b) => a.rating - b.rating);
  renderDonuts();
}
// Funktion för att sortera munkar efter rating
function sortByRatingEnd() {
  filteredDonutsInPriceRange.sort((a, b) => b.rating - a.rating);
  renderDonuts();
}
// Funktion för att sortera munkar efter pris
function sortByPriceStart() {
  filteredDonutsInPriceRange.sort((a, b) => a.price - b.price);
  renderDonuts();
}
// Funktion för att sortera munkar efter pris
function sortByPriceEnd() {
  filteredDonutsInPriceRange.sort((a, b) => b.price - a.price);
  renderDonuts();
}

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = filteredDonuts.filter(
    (donuts) => donuts.price <= currentPrice
  );
  renderDonuts();
}

/**
 * uppdatera vilka munkar som syns efter filtrering
 */

// kategorier ['goda munkar', 'kött munkar', 'växt munkar']
function updateCategoryFilter(e) {
  // hämta värdet från radio knapp
  const selectedCategory = e.currentTarget.value;
  console.log(selectedCategory);

  if (selectedCategory === "all") {
    filteredDonuts = [...donuts]; // kopiera urspungs array
  } else {
    filteredDonuts = []; // töm array med filtered donuts
    for (let i = 0; i < donuts.length; i++) {
      const donut = donuts[i];
      console.log(donuts[i]);

      // gör om alla donuts till lowercase
      const categoriesInLowerCase = [];
      for (let j = 0; j < donut.category.length; j++) {
        categoriesInLowerCase.push(donut.category[j].toLocaleLowerCase());
      }
      // kolla om vald kategori finns med i listan
      if (categoriesInLowerCase.indexOf(selectedCategory) > -1) {
        filteredDonuts.push(donut);
      }
    }

    // loopa igenom alla munkar
  }

  changePriceRange();
  renderDonuts();
}

for (let i = 0; i < categoryFilterRadio.length; i++) {
  categoryFilterRadio[i].addEventListener("click", updateCategoryFilter);
}

// funktion för byta bakgrundsbilden på julafton
function christmasImg() {
  if (isChristmas()) {
    document.body.style.backgroundImage =
      "url('assets/img/christmas-gf9f1474a9_1280.png')";
  }
}
christmasImg();

//funktion för att beräkna på originalpris
function getDonutPrice(originalPrice) {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  // prispåslag om helg
  if (
    (day === 5 && hours >= 15) ||
    day === 6 ||
    day === 0 ||
    (day === 1 && hours < 3)
  ) {
    return originalPrice * 1.15;
  }
  return originalPrice;
}

// allmän function  som kollar om det är julafton (pris blir rött)
function isChristmas() {
  let date1 = new Date();
  let date2 = new Date("dec 24 2022");
  return date1.getDate() === date2.getDate();
}

//kollar om det är lucia
function isLucia() {
  let dateNow = new Date();
  let lucia = new Date("dec 13 2022");
  return dateNow.getDate() === lucia.getDate();
}

// funktion för att skriva ut munkar i HTML
function renderDonuts() {
  const priceClasses = isChristmas() ? "sum red-price" : "sum";
  donutContainer.innerHTML = "";
  for (let i = 0; i < filteredDonutsInPriceRange.length; i++) {
    const donut = filteredDonutsInPriceRange[i];
    if (donut.name === "Gratis luciamunk") {
      continue;
    }
    let rating =
      '<span class="material-symbols-outlined">star_rate</span>'.repeat(
        donut.rating
      );
    donutContainer.innerHTML += `
        <h2>${donut.name}</h2>
        <div class="donut">
          <div class="donut-img">
            <img id="imageOne-${i}" src="${
      donut.img[0]
    }" width="200" height="200" loading="lazy" alt="${donut.alt[0]}"/>
            <img id="imageTwo-${i}" src="${
      donut.img[1]
    }" width="200" height="200" loading="lazy" class="hidden" alt="${
      donut.alt[1]
    }"/><br>
            <div class="donutButtons">
            <button class="prevBtn material-symbols-outlined" id="prevBtn-${i}">arrow_back_ios</button>
            <button class="nextBtn material-symbols-outlined" id="nextBtn-${i}">arrow_forward_ios</button>
            </div>
          </div>
          <div class="donut-info">
            <p>Betyg: ${rating}</p>
             <span>${donut.description}</span><br/>
             Pris/st: <span class="${priceClasses}">${Math.round(
      donut.price
    )}</span> kr<br />
              Antal i varukorgen: <span class="amount">${
                donut.amount
              }</span> st<br/>
              Summa: <span class="sum">${Math.round(donut.sum)}</span> kr<br />
              <button data-operator="minus" data-id="${
                donut.id
              }" aria-label="button for decreasing donut">-</button>
              <button data-operator="plus" data-id="${
                donut.id
              }" aria-label="button for increasing donut">+</button>
          </div>
        </div>
    `;
    //Deklarerar knapparna till slidern
    const prevBtn = document.querySelectorAll(".prevBtn");
    const nextBtn = document.querySelectorAll(".nextBtn");

    //Funktion för att byta bild i karusellen
    function changePic(e) {
      const i = e.currentTarget.id
        .replace("prevBtn-", "")
        .replace("nextBtn-", "");
      const imageOne = document.querySelector(`#imageOne-${i}`);
      const imageTwo = document.querySelector(`#imageTwo-${i}`);
      //if-sats för att kontrollera bild och byta klasser
      if (imageOne.classList.contains("hidden")) {
        imageOne.classList.remove("hidden");
        imageTwo.classList.add("hidden");
      } else {
        imageOne.classList.add("hidden");
        imageTwo.classList.remove("hidden");
      }
    }
    //Knappfunktioner
    prevBtn.forEach((btn) => {
      btn.addEventListener("click", changePic);
      console.log("click");
    });
    nextBtn.forEach((btn) => {
      btn.addEventListener("click", changePic);
    });
  }
  createEventListeners();
}

// funktion för eventlyssnare på knapparna
function createEventListeners() {
  const decreaseButtons = document.querySelectorAll(
    'button[data-operator="minus"]'
  );
  const increaseButtons = document.querySelectorAll(
    'button[data-operator="plus"]'
  );
  const removeCartItemBtns = document.querySelectorAll(".remove-cart-item");

  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", decreaseCount);
    increaseButtons[i].addEventListener("click", increaseCount);
  }

  for (let i = 0; i < removeCartItemBtns.length; i++) {
    removeCartItemBtns[i].addEventListener("click", removeCartItem);
  }
}
// funktion för att addera antal munkar med plusknappen och
function increaseCount(e) {
  const id = e.currentTarget.dataset.id;
  const donut = donuts.find((x) => x.id == id);
  const newAmount = donut.amount + 1;
  if (newAmount >= 10) {
    donut.price = getDonutPrice(donut.originalPrice) * 0.9;
  }
  donut.amount = newAmount;
  donut.sum = donut.amount * donut.price;
  renderDonuts();
  updateCart();
}

// funktion för att minska antal munkar med minusknappen och uppdatera totalsumman
function decreaseCount(e) {
  const id = e.currentTarget.dataset.id;
  const donut = donuts.find((x) => x.id == id);
  if (donut.amount <= 0) {
    return;
  } else {
    const newAmount = donut.amount - 1;
    if (newAmount < 10) {
      donut.price = getDonutPrice(donut.originalPrice);
    }
    donut.amount = newAmount;
    donut.sum = donut.amount * donut.price;
    renderDonuts();
    updateCart();
  }
}

//funktion för att ta bort en artikel i varukorgen med hjälp av trash-ikon
function removeCartItem(e) {
  const id = e.currentTarget.dataset.id;
  const donut = donuts.find((x) => x.id == id);
  donut.price = getDonutPrice(donut.originalPrice);
  donut.amount = 0;
  donut.sum = 0;
  renderDonuts();
  updateCart();
}

function printItemsInCart() {
  let itemsInCart = document.querySelector(".items-in-cart");
  amount = 0;

  for (let i = 0; i < donuts.length; i++) {
    amount = amount + donuts[i].amount;
  }
  itemsInCart.innerHTML = amount;
}
updateCart();
// funktion för att varukorgen ska uppdateras med aktuell info
function updateCart() {
  printItemsInCart();
  const totalPrice = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < donuts.length; i++) {
    sum = sum + Math.round(donuts[i].sum);
  }

  // kontrollerar om dagens datum är måndag innan kl 10, drar 10% och visar meddelande
  const rebate = new Date();
  if (rebate.getDay() === 1 && rebate.getHours() < 10) {
    sum = sum * 0.9;
    document.querySelector(".rebate").style.display = "block";
  }

  //variabel för totalsumman till bekräftelsen
  totalSum = sum;

  totalPrice.innerHTML = sum + " kr";
  const shoppingCartMenu = document.querySelector(".shopping-cart-object");
  shoppingCartMenu.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      if (donuts[i].name === "Gratis luciamunk") {
        shoppingCartMenu.innerHTML += `
        <div class="cart-info">
          <div class="cart-img">
            <img src="${
              donuts[i].img[0]
            }" width="50" height="50" loading="lazy" alt="${donuts[i].alt}"/>
          </div>
          <div class="cart-item-name">
            ${donuts[i].name}
          </div>
          <div class="cart-item-amount">
            ${donuts[i].amount} st
          </div>
          <div class="cart-item-sum"> 
            ${Math.round(donuts[i].sum)} kr
          </div>
          <div class="remove-cart-item">
          </div>
        </div>
  `;
      } else {
        shoppingCartMenu.innerHTML += `
        <div class="cart-info">
          <div class="cart-img">
            <img src="${
              donuts[i].img[0]
            }" width="50" height="50" loading="lazy" alt="${donuts[i].alt}"/>
          </div>
          <div class="cart-item-name">
            ${donuts[i].name}
          </div>
          <div class="cart-item-amount">
            ${donuts[i].amount} st
            <button data-operator="minus" data-id="${
              donuts[i].id
            }" class="cart-minus-butn">
            -
            </button>
            <button data-operator="plus" data-id="${
              donuts[i].id
            }" class="cart-plus-btn">
            +
            </button>
          </div>
          <div class="cart-item-sum"> 
            ${Math.round(donuts[i].sum)} kr
          </div>
          <div class="remove-cart-item">
            <button data-id="${donuts[i].id}" class="remove-cart-item">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
  `;
      }
    }
  }
  createEventListeners();
}

//Funktion för att vecko nummer
function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

// funktion för att ta fram formuläret
function showForm() {
  if (totalSum > 800) {
    invoiceRadio.classList.add("hidden");
    document.getElementById("invoiceLabel").classList.add("hidden");
  } else {
    invoiceRadio.classList.remove("hidden");
    document.getElementById("invoiceLabel").classList.remove("hidden");
  }
  document.getElementById("order-form").classList.remove("hidden");
}

// funktion för att gömma formulär
function hideForm() {
  document.getElementById("order-form").classList.add("hidden");
}

// Funktion för att använda kortbetalning
function cardOr() {
  const cardDetails = document.getElementById("cardDetails");
  const invoiceDetails = document.getElementById("invoiceDetails");
  if (cardRadio.checked) {
    cardDetails.style.display = "block";
    invoiceDetails.style.display = "none";
  }
  if (invoiceRadio.checked) {
    cardDetails.style.display = "none";
    invoiceDetails.style.display = "block";
  }
}

//infoga logik för betala-knappen, när man trycker på betala får man en bekräftelse
document.querySelector("#form").addEventListener("submit", submit);

function submit(e) {
  e?.preventDefault();
  const rebateCodeInput = document.querySelector("#rebateCode");
  const summaryPage = document.getElementById("summaryPage");
  summaryPage.classList.remove("hidden");
  const deliveryTime = getDeliveryTime();
  const freightPrice = getFreightPrice();
  const rebates = getRebates();
  if (rebateCodeInput.value === "a_damn_fine_cup_of_coffee") {
    document.querySelector("#summary-dynamic-content").innerHTML = `
    <div class="delivery-info">
        <h1>Grattis!!Dina munkar blev gratis.</h1>
        <p>Din order levereras inom: ${deliveryTime}</p>
    </div>`;
  } else {
    document.querySelector("#summary-dynamic-content").innerHTML = ` 
  <div class="delivery-info">
    <h2>Tack för din beställning!</h2>
    <p>Din order levereras inom: ${deliveryTime}
    <p>Fraktkostnad: ${freightPrice.toFixed(2)} kr</p>
    <p>Summa: ${(totalSum + freightPrice + rebates).toFixed(2)} kr</p>
  </div>
`;
  }
}

// funktion för att få rabatt
function getRebates() {
  const now = new Date();
  const week = getWeekNumber(now)[1]; // [Year, week]
  const day = now.getDay();
  if (week % 2 === 0 && day === 2) {
    return -25;
  }
  return 0;
}

// funktion för att ange leveranstid
function getDeliveryTime() {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  if (day === 5 && hours >= 11 && hours < 13) {
    return "kl 15:OO";
  }
  if (hours >= 0 && hours < 6) {
    return "45 minuter";
  }
  if (day === 6 || day === 0) {
    return "1 timme och 30 minuter";
  }
  return "30 minuter";
}

// funktion för att ge fraktkostnad
function getFreightPrice() {
  let amount = 0;
  for (let i = 0; i < donuts.length; i++) {
    const donut = donuts[i];
    amount = amount + donut.amount;
  }
  if (amount > 15) {
    return 0;
  }
  const freightPrice = 25 + totalSum * 0.1;
  return freightPrice;
}

// kallar render donuts funktion
renderDonuts();
