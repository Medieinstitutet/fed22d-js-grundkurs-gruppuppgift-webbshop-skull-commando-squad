const images = [ {
  name: "Sexy Chocolate",
  price: 15,
  rating: 3,
  amount: 0,
  sum: 0,
  img: "/assets/img/Chocolate-1.png",
  alt: "donut with chocolate glaze",
  category: "goda munkar",
  description: "Smak av choklad",
},
{
  name: "Vanilla Ice",
  price: 20,
  rating: 1,
  amount: 0,
  sum: 0,
  img: "/assets/img/vanilla-ice.png",
  alt: "donut with vanilla glaze",
  category: "goda munkar",
  description: "Smak av vanilj",
},
{
  name: "Strawberry Splash",
  price: 35,
  rating: 5,
  amount: 0,
  sum: 0,
  img: "/assets/img/strawberry.png",
  alt: "donut with strawberry glaze",
  category: "goda munkar",
  description: "Smak av jordgubb",
},
{
  name: "Salted Caramell",
  price: 45,
  rating: 4,
  amount: 0,
  sum: 0,
  img: "/assets/img/salted-caramell.png",
  alt: "donut made of fudge",
  category: "goda munkar",
  description: "Smak av kola",
},
{
  name: "American Breakfast",
  price: 55,
  rating: 5,
  amount: 0,
  sum: 0,
  img: "/assets/img/bacon.PNG",
  alt: "donut with bacon crust and glaze",
  category: "köttmunkar",
  description: "Smak av bacon",
},
{
  name: "Bloody Bastard",
  price: 35,
  rating: 1,
  amount: 0,
  sum: 0,
  img: "/assets/img/rib-eye.PNG",
  alt: "donut with meat filling",
  category: "köttmunkar",
  description: "Smak av entrecote",
},
{
  name: "Crispy Chicken",
  price: 35,
  rating: 3,
  amount: 0,
  sum: 0,
  img: "/assets/img/chicken.PNG",
  alt: "donut made of chicken with crust",
  category: "köttmunkar",
  description: "Smak av krispig kyckling",
},
{
  name: "Pulled Beef",
  price: 45,
  rating: 4,
  amount: 0,
  sum: 0,
  img: "/assets/img/pulled-beef.PNG",
  alt: "donut with pulled beef topping",
  category: "köttmunkar",
  description: "Trådig och rökig",
},
{
  name: "Water Cress",
  price: 60,
  rating: 1,
  amount: 0,
  sum: 0,
  img: "/assets/img/water-cress.png",
  alt: "green donut made of cress",
  category: "växtbaserade munkar",
  description: "Pepprig och fräsch",
},
{
  name: "Dandelion",
  price: 45,
  rating: 2,
  amount: 0,
  sum: 0,
  img: "/assets/img/dandelion.png",
  alt: "yellow donut made of flowers",
  category: "växtbaserade munkar",
  description: "Smak av sommar och blommor",
},
{
  name: "Corn Hole",
  price: 60,
  rating: 5,
  amount: 0,
  sum: 0,
  img: "/assets/img/corn-hole.PNG",
  alt: "a plastic ring with a corn in it",
  category: "växt-baserade munkar",
  description: "Smak av majs och plast",
},
{
  name: "Seaweed",
  price: 25,
  rating: 1,
  amount: 0,
  sum: 0,
  img: "/assets/img/sea-weed.png",
  alt: "donut made of sea weed",
  category: "växt-baserade munkar",
  description: "Stora inlag av umami",
}
];
const imageOne = document.querySelector('#imageOne')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
let currentImageIndex = -1;



function nextClick() {

  
    if (currentImageIndex + 1 > images.length -1) {
        currentImageIndex = 0;
    }else{
         currentImageIndex += 1;
}
    imageOne.setAttribute('src', images[currentImageIndex].img);
}
function prevClick() {
    if (currentImageIndex - 1 < 0) {
        currentImageIndex = images.length - 1;
    }else{
        currentImageIndex -= 1;
    }
    imageOne.setAttribute('src', images[currentImageIndex].img);
}

nextBtn.addEventListener("click", nextClick);
prevBtn.addEventListener("click", prevClick);

nextClick();