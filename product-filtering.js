const donutsListing = document.querySelector(".donutContainer");
const categoryFilterRadio = document.querySelectorAll(
  '[name="categoryFilter"]'
);
const priceRangeSlider = document.querySelector("#priceRange");

let filteredProducts = [...donuts];

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
