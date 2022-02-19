let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct) => {
  const existProduct = cart.find((item) => item.id === newProduct.id);
  if (!existProduct) {
    cart.push(newProduct);
  } else {
    existProduct.quantity += +newProduct.quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const increaseQuantity = (id, next)=> {
  cart.find(item=> item.id == Number(id)).quantity++;
  
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
}

export const decreaseQuantity = (id, next)=> {
  const currentProduct =  cart.find(item=> item.id === Number(id));
  currentProduct.quantity--;
  if(currentProduct.quantity < 1) {
    const comfirm = window.confirm('Do you want delete this product?');
    if(confirm) {
      cart = cart.filter(item=>item.id !== Number(id));
      next();
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  next();
}

export const deleteProduct = (id, next)=> {
  const confirm = window.confirm("Ban co muon xoa hay khong?");
  if(confirm){
      cart = cart.filter(item => item.id !== Number(id));
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  next();
}
