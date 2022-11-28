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
  const sorted = filteredDonuts.sort((a, b) => {
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
  const sorted = filteredDonuts.sort((a, b) => {
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
  filteredDonuts.sort((a, b) => a.rating - b.rating);
  renderDonuts();
}
// Funktion för att sortera munkar efter rating
function sortByRatingEnd() {
  filteredDonuts.sort((a, b) => b.rating - a.rating);
  renderDonuts();
}
// Funktion för att sortera munkar efter pris
function sortByPriceStart() {
  filteredDonuts.sort((a, b) => a.price - b.price);
  renderDonuts();
}
// Funktion för att sortera munkar efter pris
function sortByPriceEnd() {
  filteredDonuts.sort((a, b) => b.price - a.price);
  renderDonuts();
}
