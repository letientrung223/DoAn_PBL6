import {
  FETCH_USER_CART,
  FETCH_USER_CART_SUCCESS,
  FETCH_USER_CART_FAILED,
  DELETE_ITEM_FROM_CART
} from "./actionType";
import axios from "axios";



export const fetchUserCart = (tokenVN) => {
  return async (dispatch) => {
    dispatch(fetchCart())
    try {
      axios.get("https://shop-pbl6.herokuapp.com/api/v1/cart/",{ headers: {"Authorization" : `Bearer ${tokenVN}`} } ).then(response => {
        console.log("ben action cart ",response);
        const cart = response.data.data.cart.cartItem;
        
      // console.log("danh sach cart ben action", cart);

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

const fetchCartSuccess = (cart) => {
  return {
    type: FETCH_USER_CART_SUCCESS,
    payload:{cart},
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
export const deleteItem = (id) =>{
  return async (dispatch) => {
    try {
      // axios.delete(URL, payload, header);
      axios.delete("https://shop-pbl6.herokuapp.com/api/v1/cart/",
      {"item":id},
      { headers: {"Authorization" : `Bearer ${tokenVN}`} } ).then(response => {
        console.log("ben action cart delete ",response);
        dispatch(deleteItemFromCart());
      })
    } catch (error) {
      dispatch(fetchCartFailed(error));
    }
  };
};
const deleteItemFromCart = () => {
  return {
    type: DELETE_ITEM_FROM_CART,
  };
};