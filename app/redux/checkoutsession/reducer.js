import {
  GET_CHECKOUT_SESSION_SUCCESS,
  GET_CHECKOUT_SESSION_FAILED,
} from "./actionType";

const initialState = {
  error: null,
  loading: false,
  id_payment:"",
  
};

export const checkoutSessionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CHECKOUT_SESSION_SUCCESS: {
      return {
        ...state,
        loading: false,
        error:null,
        id_payment:action.payload.id_payment,
       
      };
    }
    case GET_CHECKOUT_SESSION_FAILED: {
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
