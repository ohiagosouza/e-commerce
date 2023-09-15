const buyButton = document.querySelectorAll('.buyButton');
const addedToCart = document.querySelector('.toast');

buyButton.forEach(buyButton => {
  buyButton.addEventListener('click', () => {
    const notification = document.getElementById('notification');

    const quantity = document.querySelectorAll('').value;
    console.log({ quantity });

    notification + quantity;
    const toast = bootstrap.Toast.getOrCreateInstance(addedToCart);
    toast.show();

    notification.innerText = quantity;
  });
});

console.log({ buyButton });
console.log({ addedToCart });
console.log({ notification });
