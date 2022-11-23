function printItemsInCart() {
  let itemsInCart = document.querySelector(".items-in-cart");
  amount = 0;

  for (let i = 0; i < donuts.length; i++) {
    amount = amount + donuts[i].amount;
  }
  itemsInCart.innerHTML = amount;
}

// funktion för att varukorgen ska uppdateras med aktuell info
function updateCart() {
  const totalPrice = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < donuts.length; i++) {
    sum = sum + donuts[i].sum;
  }
  totalPrice.innerHTML = sum + " kr";
  const shoppingCartMenu = document.querySelector(".shopping-cart-object");
  shoppingCartMenu.innerHTML = "";

  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      shoppingCartMenu.innerHTML += `
     
      <ul class="cart-info">
        <li><img src="${donuts[i].img}" width="50" height="50" loading="lazy" alt="${donuts[i].alt}"/></li>
        <li>${donuts[i].name}</li>
        <li>${donuts[i].amount} st
        <button data-operator="minus" data-id="${i}" class="cart-minus-butn" aria-label="decrease-item-button">-</button>
        <button data-operator="plus" data-id="${i}" class="cart-plus-btn" aria-label="increase-item-button">+</button></li>
        <li> ${donuts[i].sum} kr</li>
        <li><button data-id="${i}" class="remove-cart-item" aria-label="remove-item-button"><i class="fa fa-trash" aria-hidden="true"></i></button></li>
      </ul>
`;
    }
  }
}
