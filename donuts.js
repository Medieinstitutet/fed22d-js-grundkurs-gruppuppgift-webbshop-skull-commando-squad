//deklarerar e array med alla munk objekt
const donuts = [
  {
    name: "Sexy Chocolate",
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

// Deklarerar en variabel för munk container
const donutContainer = document.querySelector(".donutContainer");

// funktion för att skriva ut munkar i HTML
function renderDonuts() {
  donutContainer.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
        <h2>${donuts[i].name}</h2>
        <article class="donut">
          <section class="donut-img">
            <img src="${donuts[i].img}" width="200" height="200" loading="lazy" alt="${donuts[i].alt}"/>
          </section>
          <section class="donut-info">
             <span>${donuts[i].description}</span><br/>
             Pris/st: <span class="sum">${donuts[i].price}</span> kr<br />
              Antal i varukorgen: <span class="amount">${donuts[i].amount}</span> st<br/>
              Summa: <span class="sum">${donuts[i].sum}</span> kr<br />
            <button data-operator="minus" data-id="${i}" aria-label="decrease-item-button">-</button>
            <button data-operator="plus" data-id="${i}" arira-label="increase-item-button">+</button>
          </section>
        </article>
    `;
  }
}

renderDonuts();
