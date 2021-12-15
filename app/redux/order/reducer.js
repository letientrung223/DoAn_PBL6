import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
} from "./actionType";

const initialState = {

  orders: [],
  error: null,
  loading: false,
};

export const orderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ORDERS: {
      return {
        ...state,
        loading: true,
        orders: [],
        error: null,
      };
    }
    case FETCH_ORDERS_SUCCESS: {
      //console.log(action.payload.products)
      return {
        ...state,
        loading: false,
        orders: action.payload.orders,
        error: null,
        
      };
    }
    case FETCH_ORDERS_FAILED: {
      return {
        ...state,
        loading: false,
        orders: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
