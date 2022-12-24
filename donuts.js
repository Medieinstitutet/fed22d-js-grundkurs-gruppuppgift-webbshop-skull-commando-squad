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
    alt: ["donut with vanilla glaze","donut with vanilla glaze"],
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
    alt: ["donut with bacon crust and glaze", "donut with bacon crust and glaze"],
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
    img: ["assets/img/water-cress.png", "assets/img/water-cress-2.jpg"],
    alt: ["green donut made of cress", "green donut made of cress"],
    description: "Pepprig och fräsch",
    category: ["plant", "all"],
  },
  {
    name: "Dandelion",
    id: 9,
    price: getDonutPrice(95),
    originalPrice: 95,
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
    price: getDonutPrice(100),
    originalPrice: 100,
    rating: 5,
    amount: 0,
    sum: 0,
    img: ["assets/img/corn-hole.PNG", "assets/img/corn-hole-2.jpg"],
    alt: ["a plastic ring with a corn in it", "a plastic ring with a corn in it"],
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
    img: ["assets/img/sea-weed.png", "assets/img/sea-weed-2.jpg"],
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

let rated = donuts.rating;
console.log([donuts.rating]);

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
            <img id="imageOne-${i}" src="${donut.img[0]}" width="200" height="200" loading="lazy" alt="${donut.alt[0]}"/>
            <img id="imageTwo-${i}" src="${donut.img[1]}" width="200" height="200" loading="lazy" class="hidden" alt="${donut.alt[1]}"/><br>
            <div class="donutButtons">
            <button class="prevBtn material-symbols-outlined" id="prevBtn-${i}">arrow_back_ios</button>
            <button class="nextBtn material-symbols-outlined" id="nextBtn-${i}">arrow_forward_ios</button>
            </div>
          </div>
          <div class="donut-info">
            <p>Betyg: ${rating}</p>
             <span>${donut.description}</span><br/>
             Pris/st: <span class="${priceClasses}">${Math.round(donut.price)}</span> kr<br />
              Antal i varukorgen: <span class="amount">${donut.amount}</span> st<br/>
              Summa: <span class="sum">${Math.round(donut.sum)}</span> kr<br />
            <button data-operator="minus" data-id="${donut.id}" aria-label="button for decreasing donut">-</button>
            <button data-operator="plus" data-id="${donut.id}" aria-label="button for increasing donut">+</button>
          </div>
        </div>
    `;
    createEventListeners();
    //Deklarerar knaparna till slidern
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
    });
    nextBtn.forEach((btn) => {
      btn.addEventListener("click", changePic);
    });
  }
}

renderDonuts();
