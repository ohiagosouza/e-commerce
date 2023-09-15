const buyButton = document.querySelector('#buyButton');
const addedToCart = document.querySelector('.toast');

buyButton.addEventListener('click', () => {
  const toast = bootstrap.Toast.getOrCreateInstance(addedToCart);
  toast.show();
});

console.log({ buyButton });
console.log({ addedToCart });
