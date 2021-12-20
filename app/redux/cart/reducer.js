import {
  FETCH_USER_CART,
  FETCH_USER_CART_SUCCESS,
  FETCH_USER_CART_FAILED,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  UPDATE_QUANTITY_FAILED,
} from "./actionType";

const initialState = {
  cart: [],
  error: null,
  loading: false,
  id_product: "",
  size: "",
  qty: "",
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
export const updateItemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREASE_QUANTITY: {
      return {
        ...state,
        loading: false,
        error: null,
        id_product: action.payload.id_product,
        size: action.payload.size,
        qty: action.payload.qty + 1,
      };
    }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        loading: false,
        error: null,
        id_product: action.payload.id_product,
        size: action.payload.size,
        qty: action.payload.qty - 1,
      };
    }
    case UPDATE_QUANTITY_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
