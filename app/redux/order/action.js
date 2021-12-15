import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
} from "./actionType";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export const fetchOrdersList = () => {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);
  return async (dispatch) => {
    dispatch(fetchOrders())
    try {
      axios.get("https://shop-pbl6.herokuapp.com/api/v1/orders/",
      
      { headers: {"Authorization" : `Bearer ${tokenVN}`} }).then(response => {
        //console.log(response);
        const orders = response;
        
       console.log("danh sach ben order", orders);

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
