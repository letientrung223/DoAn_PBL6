import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
} from "./actionType";

import axios from "axios";

export const fetchProductList = () => {
  return async (dispatch) => {
    try {

      axios.get("https://shop-pbl6.herokuapp.com/api/v1/products").then(response => {
        console.log(response);
        const products = response.data.data;
        dispatch(fetchProductSuccess(products));
      }).catch(err => {
        dispatch(fetchProductFailed(err));
      })
    } catch (error) {
      dispatch(fetchProductFailed(err));
    }
  };
};

const fetchProducts = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: { products },
  };
};

const fetchProductError = (error) => {
  return {
    type: FETCH_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
