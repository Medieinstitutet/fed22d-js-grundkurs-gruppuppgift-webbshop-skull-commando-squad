//deklarerar e array med alla munk objekt
const donuts = [
  {
    name: "Sexy Chocolate",
    price: 15,
    rating: 3,
    img: "assets/img/Chocolate-1.png",
    category: "goda munkar",
    description: "Smak av choklad",
  },
  {
    name: "Vanilla Ice",
    price: 20,
    rating: 1,
    img: "assets/img/vanilla-ice.png",
    category: "goda munkar",
    description: "Smak av vanilj",
  },
  {
    name: "Strawberry Splash",
    price: 35,
    rating: 5,
    img: "assets/img/strawberry.png",
    category: "goda munkar",
    description: "Smak av jordgubb",
  },
  {
    name: "Salted Caramell",
    price: 45,
    rating: 4,
    img: "assets/img/salted-caramell.png",
    category: "goda munkar",
    description: "Smak av kola",
  },
  {
    name: "American Breakfast",
    price: 55,
    rating: 5,
    img: "assets/img/bacon.PNG",
    category: "kött munkar",
    description: "Smak av bacon",
  },
  {
    name: "Bloody Bastard",
    price: 35,
    rating: 1,
    img: "assets/img/rib-eye.PNG",
    category: "kött munkar",
    description: "Smak av entrecote",
  },
  {
    name: "Crispy Chicken",
    price: 35,
    rating: 3,
    img: "assets/img/chicken.PNG",
    category: "kött munkar",
    description: "Smak av krispig kyckling",
  },
  {
    name: "Pulled Beef",
    price: 45,
    rating: 4,
    img: "assets/img/pulled-beef.PNG",
    category: "kött munkar",
    description: "Trådig och rökig",
  },
  {
    name: "Water Cress",
    price: 60,
    rating: 1,
    img: "assets/img/water-cress.png",
    category: "växt-baserade munkarr",
    description: "Pepprig och fräsch",
  },
  {
    name: "Dandelion",
    price: 45,
    rating: 2,
    img: "assets/img/dandelion.png",
    category: "växt-baserade munkar",
    description: "Smak av sommar och blommor",
  },
  {
    name: "Corn Hole",
    price: 60,
    rating: 5,
    img: "assets/img/corn-hole.PNG",
    category: "växt-baserade munkar",
    description: "Smak av majs och plats",
  },
  {
    name: "Seaweed",
    price: 25,
    rating: 1,
    img: "assets/img/sea-weed.png",
    category: "växt-baserade munkar",
    description: "Stora inlag av ummami",
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
          <img src="${donuts[i].img}" width="200" height="200" loading="lazy" alt=""/>
          </section>
          <section class="donut-info">
          Kategori: <span>${donuts[i].category}</span>
          Beskrivning <span>${donuts[i].description}</span>
          Pris: <span class="price">${donuts[i].price} kr</span>
          Antal köpta: <span class="amount">${donuts[i].amount}</span>
          <button class="add" data-id="${i}">-</button>
          <button class="add" data-id="${i}">+</button>
          </section>
        </article>
    `;
  }
}

// kallar funktion för att skriva ut munk objekt
renderDonuts();
