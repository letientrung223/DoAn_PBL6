import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
} from "./actionType";

const initialState = {

  products: [],
  error: null,
  loading: false,
};

export const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCT: {
      return {
        ...state,
        loading: true,
        products: [],
        error: null,
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      //console.log(action.payload.products)
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        error: null,
        
      };
    }
    case FETCH_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
