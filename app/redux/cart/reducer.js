import {
  FETCH_USER_CART,
  FETCH_USER_CART_SUCCESS,
  FETCH_USER_CART_FAILED,
} from "./actionType";

const initialState = {

  cart: [],
  error: null,
  loading: false,
};

export const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_CART: {
      return {
        ...state,
        loading: true,
        cart: [],
        error: null,
      };
    }
    case FETCH_USER_CART_SUCCESS: {
      //console.log(action.payload.cart)
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
        error: null,
        
      };
    }
    case FETCH_USER_CART_FAILED: {
      return {
        ...state,
        loading: false,
        cart: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
