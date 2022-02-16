let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
console.log('test update');

export const addToCart = (newProduct) => {
  const existProduct = cart.find((item) => item.id === newProduct.id);
  if (!existProduct) {
    cart.push(newProduct);
  } else {
    existProduct.quantity += +newProduct.quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
