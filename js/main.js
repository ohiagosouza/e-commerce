const addedToCart = document.querySelector(".toast");
const notification = document.getElementById("notification");
const addToCartButton = document.querySelectorAll(".buyButton");

const shoppingCart = [];

function addToCart(title, price) {
  shoppingCart.push({
    title: title,
    price: price,
  });
}

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

    // Seleciona o título do card
    const title = card.querySelector(".card-title").textContent;

    // Seleciona o preço do card
    const price = card.getElementsByClassName(".card-price");

    //Atualiza a quantidade e produtos no carrinho
    const itemAdded = shoppingCart.length + 1;
    notification.innerText = itemAdded;
    addToCart(title, price);

    // Console log para entender o que está acontecendo no código
    console.log({ title, price }, addToCartButton);
    console.log(shoppingCart);
  });
});
