import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
} from "./actionType";
import  fetchProductList  from "../../services/productService";

export const getProducts = () => {
  return (dispatch) => {
   dispatch(fetchProducts);
    fetchProductList().then((products) =>
      dispatch(fetchProductSuccess(products)).then((error) =>
        dispatch(fetchProductError(error))
      )
    );
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
