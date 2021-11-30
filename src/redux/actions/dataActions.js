import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  GET_CART_ITEMS,
  ADD_PRODUCT,
  SET_REMOVE_PRODUCT,
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

      console.log(resData, " resDataresDataresData");

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
      payload: { message: "Something Went wrong in the Server" },
    });
  }
};

// export const getcartItems = () => (dispatch) => {
//   try {
//     dispatch({ type: GET_CART_ITEMS, payload: currentPageNumber });
//   } catch (error) {
//     dispatch({
//       type: SET_ERRORS,
//       payload: { message: "Something Went wrong in the Server" },
//     });

//   }
// };
