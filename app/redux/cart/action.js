import {
  FETCH_USER_CART,
  FETCH_USER_CART_SUCCESS,
  FETCH_USER_CART_FAILED,
} from "./actionType";
import axios from "axios";

export const fetchUserCart = () => {
  return async (dispatch) => {
    dispatch(fetchCart())
    try {
      axios.get("https://shop-pbl6.herokuapp.com/api/v1/cart/").then(response => {
        //console.log(response);
        const cart = response.data.cart.cartItem;
        
       console.log("danh sach ben action", cart);

        dispatch(fetchCartSuccess(cart));
      }).catch(err => {
        dispatch(fetchCartFailed(err));
      })
    } catch (error) {
      dispatch(fetchCartFailed(error));
    }
  };
};

const fetchCart = () => {
  return {
    type: FETCH_USER_CART,
  };
};

const fetchCartSuccess = (products) => {
  return {
    type: FETCH_USER_CART_SUCCESS,
    payload:{products},
  };
};

const fetchCartFailed = (error) => {
  return {
    type: FETCH_USER_CART_FAILED,
    payload: {
      error,
    },
  };
};
