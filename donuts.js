const donuts = [
  {
    name: "choclate",
    price: 15,
    rating: 3,
    img: "assets/img/Chocolate-1.png",
  },
  {
    name: "vanilla",
    price: 20,
    rating: 1,
    img: "assets/img/vanilla-ice.png",
  },
  {
    name: "strawberry",
    price: 35,
    rating: 5,
    img: "assets/img/strawberry.png",
  },
  {
    name: "fudge",
    price: 45,
    rating: 4,
    img: "assets/img/salted-caramell.png",
  },
  {
    name: "bacon",
    price: 55,
    rating: 5,
    img: "assets/img/bacon.PNG",
  },
  {
    name: "ribeye",
    price: 35,
    rating: 1,
    img: "assets/img/rib-eye.PNG",
  },
  {
    name: "chicken",
    price: 35,
    rating: 3,
    img: "assets/img/chicken.PNG",
  },
  {
    name: "pulledBeef",
    price: 45,
    rating: 4,
    img: "assets/img/pulled-beef.PNG",
  },
  {
    name: "krasse",
    price: 60,
    rating: 1,
    img: "assets/img/water-cress.png",
  },
  {
    name: "maskros",
    price: 45,
    rating: 2,
    img: "assets/img/dandelion.png",
  },
  {
    name: "majs",
    price: 60,
    price: 60,
    rating: 5,
    img: "assets/img/corn-hole.PNG",
  },
  {
    name: "sjögräs",
    price: 25,
    rating: 1,
    img: "assets/img/sea-weed.png",
  },
];

console.log(donuts);

const donutContainer = document.querySelector(".donutContainer");

function renderDonuts() {
  donutContainer.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
        <article class="donut">
          <h2>${donuts[i].name}</h2>
          <img src="${donuts[i].img}" />
          <span class="price">${donuts[i].price} kr</span>
          Antal köpta: <span class="amount">${donuts[i].amount}</span>
          <button class="add" data-id="${i}">-</button>
          <button class="add" data-id="${i}">+</button>
        </article>
    `;
  }
}

renderDonuts();
