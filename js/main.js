const addedToCart = document.querySelector(".toast");
const notification = document.getElementById("notification");
const addToCartButton = document.querySelectorAll(".buyButton");

export const shoppingCart = [];
let totalCartItens = localStorage.getItem("shoppingCartQuantity");

function addToCart(title, price, image) {
  shoppingCart.push({
    title: title,
    price: price,
    image: image,
    quantity: 1,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  notification.innerText = totalCartItens;
});

addToCartButton.forEach(addToCartButton => {
  addToCartButton.addEventListener("click", event => {
    // Previne a ação padrão do eventListener
    event.preventDefault();

    // Adiciona animação de “Item adicionado ao carrinho”
    const toast = bootstrap.Toast.getOrCreateInstance(addedToCart);
    toast.show();

    // Pega o card mais próximo ao botão que foi clicado, fazendo com que
    // seja possível selecionar o título do card e o valor do card, usando card.querySelector
    const card = addToCartButton.closest(".card");

    const image = card.querySelector(".card-image").getAttribute("src");
    const title = card.querySelector(".card-title").textContent;
    const price = card.querySelector(".item-price").textContent;

    //Atualiza a quantidade de produtos no carrinho
    totalCartItens = shoppingCart.length + 1;
    notification.innerText = totalCartItens;
    addToCart(title, price, image);

    localStorage.setItem("shoppingCartData", JSON.stringify(shoppingCart));
    localStorage.setItem("shoppingCartQuantity", JSON.stringify(totalCartItens));

    // Console log para entender o que está acontecendo no código
    console.log({ title, price, image }, addToCartButton);
  });
});

console.log(shoppingCart);
console.log(totalCartItens);
