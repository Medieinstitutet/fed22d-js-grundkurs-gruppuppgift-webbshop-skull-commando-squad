//deklarerar e array med alla munk objekt
const donuts = [
  {
    name: "Sexy Chocolate",
    price: 15,
    rating: 3,
    amount: 0,
    sum: 0,
    img: "assets/img/Chocolate-1.png",
    category: "goda munkar",
    description: "Smak av choklad",
  },
  {
    name: "Vanilla Ice",
    price: 20,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/vanilla-ice.png",
    category: "goda munkar",
    description: "Smak av vanilj",
  },
  {
    name: "Strawberry Splash",
    price: 35,
    rating: 5,
    amount: 0,
    sum: 0,
    img: "assets/img/strawberry.png",
    category: "goda munkar",
    description: "Smak av jordgubb",
  },
  {
    name: "Salted Caramell",
    price: 45,
    rating: 4,
    amount: 0,
    sum: 0,
    img: "assets/img/salted-caramell.png",
    category: "goda munkar",
    description: "Smak av kola",
  },
  {
    name: "American Breakfast",
    price: 55,
    rating: 5,
    amount: 0,
    sum: 0,
    img: "assets/img/bacon.PNG",
    category: "köttmunkar",
    description: "Smak av bacon",
  },
  {
    name: "Bloody Bastard",
    price: 35,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/rib-eye.PNG",
    category: "köttmunkar",
    description: "Smak av entrecote",
  },
  {
    name: "Crispy Chicken",
    price: 35,
    rating: 3,
    amount: 0,
    sum: 0,
    img: "assets/img/chicken.PNG",
    category: "köttmunkar",
    description: "Smak av krispig kyckling",
  },
  {
    name: "Pulled Beef",
    price: 45,
    rating: 4,
    amount: 0,
    sum: 0,
    img: "assets/img/pulled-beef.PNG",
    category: "köttmunkar",
    description: "Trådig och rökig",
  },
  {
    name: "Water Cress",
    price: 60,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/water-cress.png",
    category: "växtbaserade munkar",
    description: "Pepprig och fräsch",
  },
  {
    name: "Dandelion",
    price: 45,
    rating: 2,
    amount: 0,
    sum: 0,
    img: "assets/img/dandelion.png",
    category: "växtbaserade munkar",
    description: "Smak av sommar och blommor",
  },
  {
    name: "Corn Hole",
    price: 60,
    rating: 5,
    amount: 0,
    sum: 0,
    img: "assets/img/corn-hole.PNG",
    category: "växt-baserade munkar",
    description: "Smak av majs och plast",
  },
  {
    name: "Seaweed",
    price: 25,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/sea-weed.png",
    category: "växt-baserade munkar",
    description: "Stora inlag av umami",
  },
];

// Deklarerar en variabel för munk container
const donutContainer = document.querySelector(".donutContainer");

//Funktion för att skriva ut munk objekt via for loop
function renderDonuts() {
  donutContainer.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
        <h2>${donuts[i].name}</h2>
        <article class="donut">
          <section class="donut-img">
            <img src="${donuts[i].img}" width="300" height="300" loading="lazy" alt="${donuts[i].name} munk"/>
          </section>
          <section class="donut-info">
             <span>${donuts[i].description}</span><br/>
             Pris/st: <span class="sum">${donuts[i].price}</span> kr<br />
              Antal i varukorgen: <span class="amount">${donuts[i].amount}</span> st<br/>
              Summa: <span class="sum">${donuts[i].sum}</span> kr<br />
            <button data-operator="minus" data-id="${i}">-</button>
            <button data-operator="plus" data-id="${i}">+</button>
          </section>
        </article>
    `;
  }
}

// funktion för att varukorgen ska uppdateras med aktuell info
function updateCart() {
  const totalPrice = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < donuts.length; i++) {
    sum = sum + donuts[i].sum;
  }
  totalPrice.innerHTML = sum + " kr";
  const shoppingCartMenu = document.querySelector(".shopping-cart-object");
  shoppingCartMenu.innerHTML = "";
  console.log(shoppingCartMenu);

  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      shoppingCartMenu.innerHTML += `
     
      <ul class="cart-info">
        <li><img src="${donuts[i].img}" width="50" height="50" loading="lazy" alt="${donuts[i].name} munk"/></li>
        <li>${donuts[i].name}</li>
        <li>Antal: ${donuts[i].amount} st
        <button data-operator="minus" data-id="${i}" class="cart-minus-butn">-</button>
        <button data-operator="plus" data-id="${i}" class="cart-plus-btn">+</button></li>
        <li>Summa: ${donuts[i].sum} kr</li>
        <li><button class="remove"><i class="fa fa-trash" aria-hidden="true"></i></button></li>
      </ul>
`;
    }
  }
  createEventListeners();
}

// kallar skriva ut munkar funktionen
renderDonuts();
