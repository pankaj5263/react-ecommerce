import { combineReducers } from "redux";

const initialProductState = {
  productList: [],
};
// this allProduct reducer is responsible for add, edit, delete, and show products.
const allProduct = (state = initialProductState, action) => {
  if (action.type === "ADD_PRODUCT") {
    return { productList: [...state.productList, action.product] };
  }
  if (action.type === "DELETE_PRODUCT") {
    return { productList: [...action.products] };
  }
  if (action.type === "EDIT_PRODUCT") {
    return { productList: [...action.products] };
  }
  if (action.type === "SHOW_PRODUCT") {
    return { productList: [...action.products] };
  }

  return state;
};

const initialCartState = {
  cart: [],
};

// this cartProduct is responsible for add and remove products into the cart.
const cartProduct = (state = initialCartState, action) => {
  console.log(action);
  if (action.type === "Add_INTO_CART") {
    return { cart: [...state.cart, action.product] };
  }
  if (action.type === "DELETE_FROM_CART") {
    return { cart: [...action.products] };
  }
  return state;
};

// This is common reducer function which is responsible for product list and cart.
export default combineReducers({
  allProduct,
  cartProduct,
});
