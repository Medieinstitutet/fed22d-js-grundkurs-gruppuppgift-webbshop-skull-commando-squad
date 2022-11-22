const removeCartBtn = document.querySelectorAll("button .remove");

removeCartBtn.addEventListener("click", removeCartItem);

function removeCartItem(e) {
  const buttonClicked = e.target;
  buttonClicked.parentElement.remove();
}
