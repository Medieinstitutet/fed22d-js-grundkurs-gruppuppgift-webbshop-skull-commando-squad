//deklarerar e array med alla munk objekt
const donuts = [
  {
    name: "Sexy Chocolate",
    id: 0,
    price: 30,
    rating: 3,
    amount: 0,
    sum: 0,
    img: ["assets/img/chocolate-3.png", "assets/img/Chocolate-1.png"],
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
    img: ["assets/img/vanilla-ice.png", "assets/img/vanilla-2.png"],
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
    img: ["assets/img/strawberry.png", "assets/img/strawberry-2.png"],
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
    img: ["assets/img/salted-caramell.png", "assets/img/salted-caramel-2.png"],
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
    img: ["assets/img/bacon.PNG", "assets/img/bacon-donut-2.jpg"],
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
    img: ["assets/img/rib-eye.PNG", "assets/img/rib-eye.jpeg"],

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
    img: ["assets/img/chicken.PNG", "assets/img/chicken-2.webp"],
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
    img: ["assets/img/pulled-beef.PNG", "assets/img/pulled-beef-2.jpg"],
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
    img: ["assets/img/water-cress.png", "assets/img/water-cress-2.jpg"],
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
    img: ["assets/img/dandelion.png", "assets/img/dandelion-2.jpg"],
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
    img: ["assets/img/corn-hole.PNG", "assets/img/corn-hole-2.jpg"],
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
    img: ["assets/img/sea-weed.png", "assets/img/sea-weed-2.jpg"],
    alt: "donut made of sea weed",
    description: "Stora inlag av umami",
    category: ["plant", "all"],
  },
];
// Deklarerar variabel för temp array för donuts
let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

let totalSum = 0;

// Deklarerar en variabel för munk container
const donutContainer = document.querySelector(".donutContainer");

// Deklarerar variabel för karusellknappar
const prevBtns = document.querySelectorAll("button.prev");
const nextBtns = document.querySelectorAll("button.next");

// funktion för byta bakgrundsbilden på julafton
function christmasImg() {
  let date1 = new Date();
  let date2 = new Date("dec 24 2022");
  if (date1.getDate() === date2.getDate()) {
    document.body.style.backgroundImage =
      "url('assets/img/christmas-gf9f1474a9_1280.png')";
  }
}
christmasImg();

// funktion för att skriva ut munkar i HTML
function renderDonuts() {
  donutContainer.innerHTML = "";

  for (let i = 0; i < filteredDonutsInPriceRange.length; i++) {
    const imgs = filteredDonutsInPriceRange[i].img;
    donutContainer.innerHTML += `
        <h2>${filteredDonutsInPriceRange[i].name}</h2>
        <div class="donut">
          <div class="donut-img">
            <img src="${imgs[1]}" width="200" height="200" loading="lazy" alt="${filteredDonutsInPriceRange[i].alt}"/>
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

prevBtns.forEach((btn) => {
  btn.addEventListener("click", prevImage);
  console.dir(e.currentTarget.id);
});

nextBtns.forEach((btn) => {
  btn.addEventListener("click", nextImage);
  console.dir(e.currentTarget.id);
});
function nextImage(e) {
  console.dir(e.currentTarget.id);
}

function prevImage(e) {
  console.dir(e.currentTarget.id);
}

renderDonuts();
