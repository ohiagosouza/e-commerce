const shoppingCart = JSON.parse(localStorage.getItem("shoppingCartData"));
const cartContainer = document.querySelector(".products");

if (shoppingCart) {
  shoppingCart.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("cart-item");

    const productImage = document.createElement("img");
    productImage.classList.add("productImage");
    productImage.alt = "Produto";
    productImage.src = product.image;

    const productTitle = document.createElement("p");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    const productQuantity = document.createElement("input");
    productQuantity.classList.add("form-control", "product-quantity");
    productQuantity.type = "number";
    productQuantity.ariaLabel = "quantity";
    productQuantity.value = "1";
    productQuantity.min = "1";
    productQuantity.max = "10";

    const classPrice = document.createElement("p");
    classPrice.classList.add("card-price");
    classPrice.textContent = "R$ ";

    const itemPrice = document.createElement("span");
    itemPrice.textContent = product.price;
    itemPrice.classList.add("item-price");

    const removeProductBtn = document.createElement("button");
    removeProductBtn.classList.add("remove-button", "btn", "btn-primary");
    removeProductBtn.innerHTML = '<img src="./assets/trashIcon.png" alt="Excluir produto" width="20" />';

    classPrice.appendChild(itemPrice);
    productElement.append(productImage, productTitle, productQuantity, classPrice, removeProductBtn);

    cartContainer.appendChild(productElement);
  });
} else {
  const cartInfo = document.querySelector(".cart-info");
  cartInfo.innerHTML = "";

  const productElement = document.createElement("div");
  productElement.classList.add("cart-item", "d-flex");

  const emptyCart = document.createElement("p");
  emptyCart.classList.add("h6", "text-center");
  emptyCart.innerText = "Seu carrinho está vazio, que tal escolher algo? 😉";
  productElement.appendChild(emptyCart);
  cartContainer.appendChild(productElement);
}

// Função atualizar total do carrinho
function updateCartTotal() {
  const removeButtons = cartContainer.querySelectorAll(".remove-button");
  console.log(removeButtons);

  function removeCartItem(index) {
    const cartItems = document.querySelectorAll(".cart-item");

    if (index >= 0) {
      const cartItem = cartItems[index];
      cartItem.parentNode.removeChild(cartItem);

      shoppingCart.splice(index, 1);
      localStorage.setItem("shoppingCartData", JSON.stringify(shoppingCart));
    }
  }
  removeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      removeCartItem(index);
      console.log(shoppingCart);
    });
  });
}
updateCartTotal();
console.log(shoppingCart);
