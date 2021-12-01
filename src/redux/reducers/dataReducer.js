import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  ADD_PRODUCT,
  CHECKOUT,
} from "../types";

const initialState = {
  productsAvailable: [],
  viewProduct: {},
  cartItems: [],
  cartItemsKeys: [],
  cartItemCount: 0,
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
    case ADD_PRODUCT:
      return {
        ...state,
        cartItemCount: state.cartItems.length + 1,
        cartItems: [...state.cartItems, action.payload],
        cartItemsKeys: [...state.cartItemsKeys, action.payload.id],
      };
    case CHECKOUT:
      return {
        ...state,
        cartItems: [],
        cartItemsKeys: [],
        cartItemCount: 0,
      };
    default:
      return state;
  }
}

export default DataReducer;
