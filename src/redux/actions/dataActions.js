import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  ADD_PRODUCT,
  CHECKOUT,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_ERRORS,
} from "../types";

const apiUrl = `http://cat-store-api.frostdigital.se/api`;

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_UI });
      const resData = await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      dispatch({ type: SET_PRODUCTS, payload: resData });
      dispatch({ type: STOP_LOADING_UI });
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: { message: "Something Went wrong in the Server" },
      });
    }
  };
};

export const getSelectedProduct = (productId) => (dispatch) => {
  try {
    dispatch({ type: SET_CURRENT_PRODUCT, payload: productId });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: { message: "Something Went wrong when get selected product" },
    });
  }
};

export const puttItemsToCart = (pushProduct) => (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT, payload: pushProduct });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: { message: "Something Went wrong when add to cart" },
    });
  }
};

export const checkoutCart = () => (dispatch) => {
  try {
    dispatch({ type: CHECKOUT });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: { message: "Something Went wrong when checking out" },
    });
  }
};
