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

function increaseCount(e) {
  const id = e.currentTarget.dataset.id;
  donuts[id].amount = donuts[id].amount + 1;
  donuts[id].sum = donuts[id].amount * donuts[id].price;

  renderDonuts();
  createEventListeners();
  addDonutsToCart();
}

function decreaseCount(e) {
  const id = e.currentTarget.dataset.id;
  donuts[id].amount = donuts[id].amount;

  console.log(donuts[id]);
  const amountEl = e.currentTarget.parentElement.querySelector(".amount");
  let amount = Number(amountEl.innerText);

  if (amount - 1 < 0) {
    return;
  }

  amountEl.innerHTML = amount - 1;
  updateDonutSum(e.currentTarget.parentElement);
}

function updateDonutSum(donutElement) {
  const donutSinglePrice = donutElement.querySelector(".price").innerHTML;
  const orderedAmount = donutElement.querySelector(".amount").innerHTML;

  const sum = donutSinglePrice * orderedAmount;

  donutElement.querySelector(".sum").innerHTML = sum;
  console.log(sum + " kr");
}
