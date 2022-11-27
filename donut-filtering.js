// deklarerar varibel category filter
const categoryFilterRadio = document.querySelectorAll(
  '[name="categoryFilter"]'
);
// deklarerar variabel för price range slider
const priceRangeSlider = document.querySelector("#priceRange");
const currentRangeValue = document.querySelector("#currentRangeValue");

// Deklarerar variabel för temp array för donuts
let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

priceRangeSlider.addEventListener("input", changePriceRange);

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = filteredDonuts.filter(
    (donuts) => donuts.price <= currentPrice
  );
  console.log(currentPrice);
  renderDonuts();
}

/**
 * uppdatera vilka munkar som syns efter filtrering
 */

// kategorier ['goda munkar', 'kött munkar', 'växt munkar']
function updateCategoryFilter(e) {
  // hämta värdet från radio knapp
  const selectedCategory = e.currentTarget.value;
  console.log(selectedCategory);

  if (selectedCategory === "all") {
    filteredDonuts = [...donuts]; // kopiera urspungs array
  } else {
    filteredDonuts = []; // töm array med filtered donuts

    // loopa igenom alla munkar
  }
  for (let i = 0; i < donuts.length; i++) {
    const donut = donuts[i];

    // gör om alla donuts till lowercase
    const categoriesInLowerCase = [];
    for (let j = 0; j < donut.category.length; j++) {
      categoriesInLowerCase.push(donut.category[j].toLocaleLowerCase());
    }
    // kolla om vald kategori finns med i listan
    if (categoriesInLowerCase.indexOf(selectedCategory) > -1) {
      filteredDonuts.push(donut);
    }
  }
  changePriceRange();
}

for (let i = 0; i < categoryFilterRadio.length; i++) {
  categoryFilterRadio[i].addEventListener("click", updateCategoryFilter);
}

renderDonuts();
