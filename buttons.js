// funktion för eventlyssnare på knapparna
createEventListeners();
function createEventListeners() {
  const decreaseButtons = document.querySelectorAll(
    'button[data-operator="minus"]'
  );
  const increaseButtons = document.querySelectorAll(
    'button[data-operator="plus"]'
  );
  const removeCartItemBtns = document.querySelectorAll(".remove-cart-item");

  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", decreaseCount);
    increaseButtons[i].addEventListener("click", increaseCount);
  }

  for (let i = 0; i < removeCartItemBtns.length; i++) {
    removeCartItemBtns[i].addEventListener("click", removeCartItem);
  }
}
// funktion för att addera antal munkar med plusknappen och
function increaseCount(e) {
  const id = e.currentTarget.dataset.id;
  const newAmount = donuts[id].amount + 1;
  if (newAmount >= 10) {
    donuts[id].price = getDonutPrice(donuts[id].originalPrice) * 1.1;
  }
  donuts[id].amount = donuts[id].amount + 1;
  donuts[id].sum = donuts[id].amount * donuts[id].price;

  renderDonuts();
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
    updateCart();
  }
}

//funktion för att ta bort en artikel i varukorgen med hjälp av trash-ikon
function removeCartItem(e) {
  const id = e.currentTarget.dataset.id;
  donuts[id].amount = 0;
  donuts[id].sum = 0;
  renderDonuts();
  updateCart();
}
