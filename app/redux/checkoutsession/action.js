import {
   GET_CHECKOUT_SESSION_SUCCESS,
   GET_CHECKOUT_SESSION_FAILED,
} from "./actionType";

import axios from "axios";

export const getCheckOutSession = (id_order,tokenVN) => {
  return async (dispatch) => {
    // dispatch(CheckOutSession());
    // console.log("tới get roi",id_order,tokenVN);
    try {
      axios.get(`https://shop-pbl6.herokuapp.com/api/v1/orders/checkout-session/${id_order}`,
      
      { headers: {"Authorization" : `Bearer ${tokenVN}`} }).then(response => {
        const id_payment = response.data.session.id;
        console.log("response id payment ",id_payment);
         dispatch(CheckOutSessionSuccess(id_payment));
      }).catch(err => {
        dispatch(CheckOutSessionFailed(err));
      })
    } catch (error) {
      dispatch(CheckOutSessionFailed(error));
    }
  };
};

const CheckOutSessionSuccess = (id_payment) => {
  return {
    type: GET_CHECKOUT_SESSION_SUCCESS,
    payload: {id_payment },
  };
};

const CheckOutSessionFailed = (error) => {
  return {
    type: GET_CHECKOUT_SESSION_FAILED,
    payload: {
      error,
    },
  };
};
