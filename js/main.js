const buyButton = document.querySelectorAll(".buyButton");
const addedToCart = document.querySelector(".toast");
const notification = document.getElementById("notification");
let cartItens = "";

buyButton.forEach(buyButton => {
  buyButton.addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;

    const toast = bootstrap.Toast.getOrCreateInstance(addedToCart);
    toast.show();

    cartItens += quantity;

    notification.innerText = cartItens;
  });
});

// console.log({ buyButton });
// console.log({ addedToCart });
// console.log({ quantity });
// console.log({ notification });
