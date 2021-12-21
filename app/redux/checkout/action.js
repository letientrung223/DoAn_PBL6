import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "./actionType";

import {fetchUserCart} from "../../redux/cart/action"
import axios from "axios";
import {getCheckOutSession} from "../checkoutsession/action"
export const postCheckOutOrder = (ID_cartItem, shippingAddress, tokenVN) => {
  return async (dispatch) => {
    dispatch(postCheckOut(ID_cartItem, shippingAddress));
    try {

      const data = {
        item: ID_cartItem,
        shippingAddress: shippingAddress,
      };
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/orders/", data, {
          headers: { Authorization: `Bearer ${tokenVN}` },
        })
        .then((response) => {
          //console.log("res check out: ", response);
          const id_order = response.data.data.order._id
          const order = response.data.data.order;
          // console.log("tới get ")
          dispatch(getCheckOutSession(id_order,tokenVN));
          // console.log("res order ", order)
          dispatch(postCheckOutSuccess(id_order,order));
          
          dispatch(fetchUserCart(token));

        })
        .catch((err) => {
          dispatch(postCheckOutFailed(err));
        });
    } catch (error) {
      dispatch(postCheckOutFailed(error));
    }
  };
};

const postCheckOut = () => {
  return {
    type: CREATE_ORDER,
  };
};

const postCheckOutSuccess = (id_order,order) => {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: { id_order,order },
  };
};

const postCheckOutFailed = (error) => {
  return {
    type: CREATE_ORDER_FAILED,
    payload: {
      error,
    },
  };
};
