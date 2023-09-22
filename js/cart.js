const shoppingBag = JSON.parse(localStorage.getItem("cart-products"));
const cartQuantity = JSON.parse(localStorage.getItem("cart-quantity"));

console.log(shoppingBag, { cartQuantity });
