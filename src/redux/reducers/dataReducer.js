import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  GET_CART_ITEMS,
  ADD_PRODUCT,
  SET_REMOVE_PRODUCT,
  CHECKOUT,
} from "../types";

const initialState = {
  productsAvailable: [],
  viewProduct: {},
  cartItems: [],
};

function DataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsAvailable: action.payload.products,
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        viewProduct: state.productsAvailable[action.payload],
      };
    default:
      return state;
  }
}

export default DataReducer;
