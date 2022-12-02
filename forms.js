const cardRadio = document.querySelector("#cardRadio");
cardRadio.addEventListener("click", cardOr);
const invoiceRadio = document.querySelector("#invoiceRadio");
invoiceRadio.addEventListener("click", cardOr);

const openFormBtn = document.querySelector(".submit-order");
openFormBtn.addEventListener("click", showForm);
const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", hideForm);
const usageChecked = document.querySelector("#usage");
const submitBtn = document.querySelector("#submit");

function showForm() {
  if (totalSum > 800) {
    invoiceRadio.classList.add("hidden");
    document.getElementById("invoiceLabel").classList.add("hidden");
  } else {
    invoiceRadio.classList.remove("hidden");
    document.getElementById("invoiceLabel").classList.remove("hidden");
  }
  document.getElementById("order-form").classList.remove("hidden");
}

function hideForm() {
  document.getElementById("order-form").classList.add("hidden");
}

function cardOr() {
  const cardDetails = document.getElementById("cardDetails");
  const invoiceDetails = document.getElementById("invoiceDetails");
  if (cardRadio.checked) {
    cardDetails.style.display = "block";
    invoiceDetails.style.display = "none";
  }
  if (invoiceRadio.checked) {
    cardDetails.style.display = "none";
    invoiceDetails.style.display = "block";
  }
}

//infoga logik för betala-knappen, när man trycker på betala får man en bekräftelse
document.querySelector("#form").addEventListener("submit", submit);

function submit(e) {
  e?.preventDefault();
  const rebateCodeInput = document.querySelector("#rebateCode");
  const summaryPage = document.getElementById("summaryPage");
  summaryPage.classList.remove("hidden");
  const deliveryTime = getDeliveryTime();
  const freightPrice = getFreightPrice();
  const rebates = getRebates();
  if (rebateCodeInput.value === "a_damn_fine_cup_of_coffee") {
    document.querySelector(
      "#summary-dynamic-content"
    ).innerHTML = `<div class="delivery-info">
    <h1>Grattis!!Dina munkar blev gratis.</h1>
    <p>Din order levereras inom: ${deliveryTime}</p></div>`;
  } else {
    document.querySelector("#summary-dynamic-content").innerHTML = ` 
  <div class="delivery-info">
    <h2>Tack för din beställning!</h2>
    <p>Din order levereras inom: ${deliveryTime}
    <p>Fraktkostnad: ${freightPrice.toFixed(2)} kr</p>
    <p>Summa: ${(totalSum + freightPrice + rebates).toFixed(2)} kr</p>
  </div>
`;
  }
}
function getRebates() {
  const now = new Date();
  const week = getWeekNumber(now)[1]; // [Year, week]
  const day = now.getDay();
  if (week % 2 === 0 && day === 2) {
    return -25;
  }
  return 0;
}

function getDeliveryTime() {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  if (day === 5 && hours >= 11 && hours < 13) {
    return "kl 15:OO";
  }
  if (hours >= 0 && hours < 6) {
    return "45 minuter";
  }
  if (day === 6 || day === 0) {
    return "1 timme och 30 minuter";
  }
  return "30 minuter";
}

function getFreightPrice() {
  let amount = 0;
  for (let i = 0; i < donuts.length; i++) {
    const donut = donuts[i];
    amount = amount + donut.amount;
  }
  if (amount > 15) {
    return 0;
  }
  const freightPrice = 25 + totalSum * 0.1;
  return freightPrice;
}
