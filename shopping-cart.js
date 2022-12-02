function printItemsInCart() {
  let itemsInCart = document.querySelector(".items-in-cart");
  amount = 0;

  for (let i = 0; i < donuts.length; i++) {
    amount = amount + donuts[i].amount;
  }
  itemsInCart.innerHTML = amount;
}
updateCart();
// funktion för att varukorgen ska uppdateras med aktuell info
function updateCart() {
  printItemsInCart();
  const totalPrice = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < donuts.length; i++) {
    sum = sum + Math.round(donuts[i].sum);
  }

  // kontrollerar om dagens datum är måndag innan kl 10, drar 10% och visar meddelande
  const rebate = new Date();
  if (rebate.getDay() === 1 && rebate.getHours() < 10) {
    sum = sum * 0.9;
    document.querySelector(".rebate").style.display = "block";
  }

  //variabel för totalsumman till bekräftelsen
  totalSum = sum;

  totalPrice.innerHTML = sum + " kr";
  const shoppingCartMenu = document.querySelector(".shopping-cart-object");
  shoppingCartMenu.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      if (donuts[i].name === "Gratis luciamunk") {
        shoppingCartMenu.innerHTML += `
        <div class="cart-info">
          <div class="cart-img">
            <img src="${
              donuts[i].img[0]
            }" width="50" height="50" loading="lazy" alt="${donuts[i].alt}"/>
          </div>
          <div class="cart-item-name">
            ${donuts[i].name}
          </div>
          <div class="cart-item-amount">
            ${donuts[i].amount} st
          </div>
          <div class="cart-item-sum"> 
            ${Math.round(donuts[i].sum)} kr
          </div>
          <div class="remove-cart-item">
          </div>
        </div>
  `;
      } else {
        shoppingCartMenu.innerHTML += `
        <div class="cart-info">
          <div class="cart-img">
            <img src="${
              donuts[i].img[0]
            }" width="50" height="50" loading="lazy" alt="${donuts[i].alt}"/>
          </div>
          <div class="cart-item-name">
            ${donuts[i].name}
          </div>
          <div class="cart-item-amount">
            ${donuts[i].amount} st
            <button data-operator="minus" data-id="${
              donuts[i].id
            }" class="cart-minus-butn">
            -
            </button>
            <button data-operator="plus" data-id="${
              donuts[i].id
            }" class="cart-plus-btn">
            +
            </button>
          </div>
          <div class="cart-item-sum"> 
            ${Math.round(donuts[i].sum)} kr
          </div>
          <div class="remove-cart-item">
            <button data-id="${donuts[i].id}" class="remove-cart-item">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
  `;
      }
    }
  }
  createEventListeners();
}
