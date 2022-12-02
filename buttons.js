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
  const donut = donuts.find((x) => x.id == id);
  const newAmount = donut.amount + 1;
  if (newAmount >= 10) {
    donut.price = getDonutPrice(donut.originalPrice) * 0.9;
  }
  donut.amount = newAmount;
  donut.sum = donut.amount * donut.price;
  renderDonuts();
  updateCart();
}

// funktion för att minska antal munkar med minusknappen och uppdatera totalsumman
function decreaseCount(e) {
  const id = e.currentTarget.dataset.id;
  const donut = donuts.find((x) => x.id == id);
  if (donut.amount <= 0) {
    return;
  } else {
    const newAmount = donut.amount - 1;
    if (newAmount < 10) {
      donut.price = getDonutPrice(donut.originalPrice);
    }
    donut.amount = newAmount;
    donut.sum = donut.amount * donut.price;
    renderDonuts();
    updateCart();
  }
}

//funktion för att ta bort en artikel i varukorgen med hjälp av trash-ikon
function removeCartItem(e) {
  const id = e.currentTarget.dataset.id;
  const donut = donuts.find((x) => x.id == id);
  donut.price = getDonutPrice(donut.originalPrice);
  donut.amount = 0;
  donut.sum = 0;
  renderDonuts();
  updateCart();
}
