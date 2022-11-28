// deklarerar varibel category filter
const categoryFilterRadio = document.querySelectorAll(
  '[name="categoryFilter"]'
);
// deklarerar variabel för price range slider
const priceRangeSlider = document.querySelector("#priceRange");
const currentRangeValue = document.querySelector("#currentRangeValue");

priceRangeSlider.addEventListener("input", changePriceRange);

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = filteredDonuts.filter(
    (donuts) => donuts.price <= currentPrice
  );
  renderDonuts();
  console.log(currentPrice);
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

    // loopa igenom alla munkar
  }

  changePriceRange();
  renderDonuts();
}

for (let i = 0; i < categoryFilterRadio.length; i++) {
  categoryFilterRadio[i].addEventListener("click", updateCategoryFilter);
}

renderDonuts();
