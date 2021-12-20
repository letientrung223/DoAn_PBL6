import {
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILED,
} from "./actionType";

import axios from "axios";
import {fetchUserCart} from "../../redux/cart/action"
export const AddItemToCart = (id_product,qty,size,token) => {
  return async (dispatch) => {
    dispatch(addItem());
    try {
      // console.log("Tới đây rồi")
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/cart/",
        {
          "product":id_product, 
          "size":size,
          "quantity":qty,
        },
        { headers: {"Authorization" : `Bearer ${token}`} }
        )
        .then((response) => {
          // console.log("return res ", response);
          const cartItem = response.data.data.data.cartItem
          // console.log("cartItem",cartItem);
          dispatch(addItemSuccess(id_product,size,qty,cartItem));
          dispatch(fetchUserCart(token));

        })
        .catch((err) => {
          console.log("loi",err)
          dispatch(addItemFailed(err));
        });
    } catch (error) {
      dispatch(addItemFailed(err));
    }
  };
};

const addItem = () => {
  return {
    type:  ADD_ITEM_TO_CART,
  };
};

const addItemSuccess = (id_product,size,qty,cartItem) => {
  return {
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload: { id_product,size,qty,cartItem },
  };
};

const addItemFailed = (error) => {
  return {
    type: ADD_ITEM_TO_CART_FAILED,
    payload: {
      error,
    },
  };
};
