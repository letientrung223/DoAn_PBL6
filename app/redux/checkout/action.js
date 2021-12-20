import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "./actionType";

import axios from "axios";

export const postCheckOutOrder = (ID_cartItem, shippingAddress, tokenVN) => {
  return async (dispatch) => {
    console.log("Tới đây rồi");

    dispatch(postCheckOut(ID_cartItem, shippingAddress));

    try {
      const headers = {
        Authorization: `Bearer ${tokenVN}`,
      };
      const data = {
        item: ID_cartItem,
        shippingAddress: shippingAddress,
      };
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/orders/", data, {
          headers: { Authorization: `Bearer ${tokenVN}` },
        })
        .then((response) => {
          console.log("res check out: ", response);
          
        })
        .catch((err) => {
          dispatch(postCheckOutFailed(err));
        });
    } catch (error) {
      dispatch(postCheckOutFailed(error));
    }
  };
};

const postCheckOut = (ID_cartItem, shippingAddress) => {
  return {
    type: CREATE_ORDER,
  };
};

const postCheckOutSuccess = (status, message) => {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: { status, message },
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
