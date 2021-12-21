import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
} from "./actionType";
import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { AsyncStorage } from '@react-native-community/async-storage';

export const fetchOrdersList = (tokenVN) => {
  return async (dispatch) => {
    dispatch(fetchOrders())
    try {
      axios.get("https://shop-pbl6.herokuapp.com/api/v1/orders/",
      
      { headers: {"Authorization" : `Bearer ${tokenVN}`} }).then(response => {
        const orders = response.data.data.order;
        dispatch(fetchOrdersSuccess(orders));
      }).catch(err => {
        dispatch(fetchOrdersFailed(err));
      })
    } catch (error) {
      dispatch(fetchOrdersFailed(error));
    }
  };
};

const fetchOrders = () => {
  return {
    type: FETCH_ORDERS,
  };
};

const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload:{orders},
  };
};

const fetchOrdersFailed = (error) => {
  return {
    type: FETCH_ORDERS_FAILED,
    payload: {
      error,
    },
  };
};
