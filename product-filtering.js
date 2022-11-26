const categoryFilterRadio = document.querySelectorAll(
  '[name="categoryFilter"]'
);
const priceRangeSlider = document.querySelector("#priceRange");
const currentRangeValue = document.querySelector("#currentRangeValue");

let filteredDonuts = [...donuts];
let filteredDonutsInPriceRange = [...donuts];

/**
 * skriv ut munk i HTML.
 */
/*
function renderDonuts() {
  donutContainer.innerHTML = "";

  filteredDonutsInPriceRange.forEach((donuts) => {
    donutContainer.innerHTML += `
    <h2>${donuts[i].name}</h2>
    <article class="donut">
      <section class="donut-img">
        <img src="${
          donuts[i].img
        }" width="200" height="200" loading="lazy" alt="${donuts[i].alt}"/>
      </section>
      <section class="donut-info">
         <span>${donuts[i].description}</span><br/>
         Pris/st: <span class="sum">${donuts[i].price}</span> kr<br />
          Antal i varukorgen: <span class="amount">${
            donuts[i].amount
          }</span> st<br/>
          Summa: <span class="sum">${donuts[i].sum}</span> kr<br />
        <button data-operator="minus" data-id="${i}" aria-label="decrease-item-button">-</button>
        <button data-operator="plus" data-id="${i}" arira-label="increase-item-button">+</button>
        Price: ${donuts.price} kr <br>
        Categories: ${donuts.category.join(", ")}
      </section>
    </article>
`;
  });
}
*/
function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  /*
  filteredDonutsInPriceRange = filteredDonuts.filter(
    (donuts) => donuts.price <= currentPrice
  );
  renderDonuts();
  */
}

/**
 * uppdatera vilka munkar som syns
 */

// kategorier ['goda munkar', 'kött munkar', 'växt munkar']
function updateCategoryFilter(e) {
  // hämta värdet från radio knapp
  const selectedCategory = e.currentTarget.value;

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
    // kolla om vald ketegori finns med i listan
    if (categoriesInLowerCase.indexOf(selectedCategory) > -1) {
      filteredDonuts.push(donut);
    }
  }
}

priceRangeSlider.addEventListener("input", changePriceRange);

changePriceRange();
