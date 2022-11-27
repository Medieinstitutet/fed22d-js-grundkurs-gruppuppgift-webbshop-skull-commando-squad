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

// eventlistener för knappar av namn sortering
sortByNameBtnStart.addEventListener("click", sortByNameStart);
sortByNameBtnEnd.addEventListener("click", sortByNameEnd);

// eventlistener för knappar av pris sortering
sortByPriceBtnStart.addEventListener("click", sortByPriceStart);
sortByPriceBtnEnd.addEventListener("click", sortByPriceEnd);

// Funktion för att sortera munkar efter namn a-z
function sortByNameStart() {
  const sorted = donuts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  renderDonuts();
  createEventListeners();
}

// Funktion för att sortera munkar efter namn z-a
function sortByNameEnd() {
  const sorted = donuts.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }

    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });

  renderDonuts();
  createEventListeners();
}
// Funktion för att sortera munkar efter rating
function sortByRatingStart() {
  donuts.sort((a, b) => a.rating - b.rating);
  renderDonuts();
  createEventListeners();
}
// Funktion för att sortera munkar efter rating
function sortByRatingEnd() {
  donuts.sort((a, b) => b.rating - a.rating);
  renderDonuts();
  createEventListeners();
}
// Funktion för att sortera munkar efter pris
function sortByPriceStart() {
  donuts.sort((a, b) => a.price - b.price);
  renderDonuts();
  createEventListeners();
}
// Funktion för att sortera munkar efter pris
function sortByPriceEnd() {
  donuts.sort((a, b) => b.price - a.price);
  renderDonuts();
  createEventListeners();
}
