const cardRadio = document.querySelector("#cardRadio");
cardRadio.addEventListener("click", cardOr);
const invoiceRadio = document.querySelector("#invoiceRadio");
invoiceRadio.addEventListener("click", cardOr);
const openFormBtn = document.querySelector(".submit-order");
openFormBtn.addEventListener("click", showForm);
const closeFormBtn = document.querySelector("#close-form");
closeFormBtn.addEventListener("click", hideForm);

function showForm() {
  document.getElementById("order-form").classList.remove("hidden");
}

function hideForm() {
  document.getElementById("order-form").classList.add("hidden");
}

function cardOr() {
  if (cardRadio.checked) {
    console.log("kort");
    document.getElementById("cardDetails").style.display = "flex";
    document.getElementById("cardDetails").style.flexDirection = "column";
  }
  if (invoiceRadio.checked) {
    console.log("faktura");
    document.getElementById("cardDetails").style.display = "none";
  }
}

const usageChecked = document.querySelector("#usage");
const submitBtn = document.querySelector("submit");
usageChecked.addEventListener("click", checkChecked);

const payBtn = document.querySelector(".pay-button");
console.log(payBtn, "klickad");

function checkChecked() {
  if (checkChecked) {
  }
}
