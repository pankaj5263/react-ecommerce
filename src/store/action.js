// this is action creater function will help to add product.
export const productAdd = (product) => {
  return {
    type: "ADD_PRODUCT",
    product,
  };
};

// this is action creater function will help to edit product.
export const editProduct = (products) => {
  return { type: "EDIT_PRODUCT", products };
};

// this is action creater function will help to show product.
export const showProduct = (products) => {
  return { type: "SHOW_PRODUCT", products };
};

// this is action creater function will help to delete product.
export const deleteProduct = (products) => {
  return {
    type: "DELETE_PRODUCT",
    products,
  };
};

// this is action creater function will help to add product into cart.
export const addCartProduct = (product) => {
  return { type: "Add_INTO_CART", product };
};

// this is action creater function will help to delete product from cart.
export const removeFromCartProduct = (products) => {
  return { type: "DELETE_FROM_CART", products };
};
