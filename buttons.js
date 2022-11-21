// funktion för eventlyssnare på knapparna
createEventListeners();
function createEventListeners() {
  const decreaseButtons = document.querySelectorAll(
    'button[data-operator="minus"]'
  );
  const increaseButtons = document.querySelectorAll(
    'button[data-operator="plus"]'
  );
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", decreaseCount);
    increaseButtons[i].addEventListener("click", increaseCount);
  }
}
// funktion för att addera antal munkar med plusknappen och uppdatera totalsumman
function increaseCount(e) {
  const id = e.currentTarget.dataset.id;
  donuts[id].amount = donuts[id].amount + 1;
  donuts[id].sum = donuts[id].amount * donuts[id].price;

  renderDonuts();
  createEventListeners();
  updateCart();
}

// funktion för att minska antal munkar med minusknappen och uppdatera totalsumman
function decreaseCount(e) {
  const id = e.currentTarget.dataset.id;
  if (donuts[id].amount <= 0) {
    return;
  } else {
    donuts[id].amount = donuts[id].amount - 1;
    donuts[id].sum = donuts[id].amount * donuts[id].price;
    renderDonuts();
    createEventListeners();
    updateCart();
  }
}
