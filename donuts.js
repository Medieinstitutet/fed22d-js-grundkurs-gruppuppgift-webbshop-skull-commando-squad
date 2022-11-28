//deklarerar e array med alla munk objekt
const donuts = [
  {
    name: "Sexy Chocolate",
    id: 0,
    price: 30,
    rating: 3,
    amount: 0,
    sum: 0,
    img: "assets/img/Chocolate-1.png",
    alt: "donut with chocolate glaze",
    description: "Smak av choklad",
    category: ["tasty", "all"],
  },
  {
    name: "Vanilla Ice",
    id: 1,
    price: 25,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/vanilla-ice.png",
    alt: "donut with vanilla glaze",
    description: "Smak av vanilj",
    category: ["tasty", "all"],
  },
  {
    name: "Strawberry Splash",
    id: 2,
    price: 35,
    rating: 5,
    amount: 0,
    sum: 0,
    img: "assets/img/strawberry.png",
    alt: "donut with strawberry glaze",
    description: "Smak av jordgubb",
    category: ["tasty", "all"],
  },
  {
    name: "Salted Caramell",
    id: 3,
    price: 45,
    rating: 4,
    amount: 0,
    sum: 0,
    img: "assets/img/salted-caramell.png",
    alt: "donut made of fudge",
    description: "Smak av kola",
    category: ["tasty", "all"],
  },
  {
    name: "American Breakfast",
    id: 4,
    price: 45,
    rating: 5,
    amount: 0,
    sum: 0,
    img: "assets/img/bacon.PNG",
    alt: "donut with bacon crust and glaze",
    description: "Smak av bacon",
    category: ["meat", "all"],
  },
  {
    name: "Bloody Bastard",
    id: 5,
    price: 65,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/rib-eye.PNG",
    alt: "donut with meat filling",
    description: "Smak av entrecote",
    category: ["meat", "all"],
  },
  {
    name: "Crispy Chicken",
    id: 6,
    price: 75,
    rating: 3,
    amount: 0,
    sum: 0,
    img: "assets/img/chicken.PNG",
    alt: "donut made of chicken with crust",
    description: "Smak av krispig kyckling",
    category: ["meat", "all"],
  },
  {
    name: "Pulled Beef",
    id: 7,
    price: 55,
    rating: 4,
    amount: 0,
    sum: 0,
    img: "assets/img/pulled-beef.PNG",
    alt: "donut with pulled beef topping",
    description: "Trådig och rökig",
    category: ["meat", "all"],
  },
  {
    name: "Water Cress",
    id: 8,
    price: 80,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/water-cress.png",
    alt: "green donut made of cress",
    description: "Pepprig och fräsch",
    category: ["plant", "all"],
  },
  {
    name: "Dandelion",
    id: 9,
    price: 95,
    rating: 2,
    amount: 0,
    sum: 0,
    img: "assets/img/dandelion.png",
    alt: "yellow donut made of flowers",
    description: "Smak av maskros",
    category: ["plant", "all"],
  },
  {
    name: "Corn Hole",
    id: 10,
    price: 100,
    rating: 5,
    amount: 0,
    sum: 0,
    img: "assets/img/corn-hole.PNG",
    alt: "a plastic ring with a corn in it",
    description: "Smak av majs och plast",
    category: ["plant", "all"],
  },
  {
    name: "Seaweed",
    id: 11,
    price: 20,
    rating: 1,
    amount: 0,
    sum: 0,
    img: "assets/img/sea-weed.png",
    alt: "donut made of sea weed",
    description: "Stora inlag av umami",
    category: ["plant", "all"],
  },
];
// Deklarerar variabel för temp array för donuts
let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

// Deklarerar en variabel för munk container
const donutContainer = document.querySelector(".donutContainer");

// funktion för att skriva ut munkar i HTML
function renderDonuts() {
  donutContainer.innerHTML = "";

  for (let i = 0; i < filteredDonutsInPriceRange.length; i++) {
    donutContainer.innerHTML += `
        <h2>${filteredDonutsInPriceRange[i].name}</h2>
        <div class="donut">
          <div class="donut-img">
            <img src="${filteredDonutsInPriceRange[i].img}" width="200" height="200" loading="lazy" alt="${filteredDonutsInPriceRange[i].alt}"/>
          </div>
          <div class="donut-info">
             <span>${filteredDonutsInPriceRange[i].description}</span><br/>
             Pris/st: <span class="sum">${filteredDonutsInPriceRange[i].price}</span> kr<br />
              Antal i varukorgen: <span class="amount">${filteredDonutsInPriceRange[i].amount}</span> st<br/>
              Summa: <span class="sum">${filteredDonutsInPriceRange[i].sum}</span> kr<br />
            <button data-operator="minus" data-id="${filteredDonutsInPriceRange[i].id}">-</button>
            <button data-operator="plus" data-id="${filteredDonutsInPriceRange[i].id}">+</button>
          </div>
        </div>
    `;
  }
  createEventListeners();
}

renderDonuts();
