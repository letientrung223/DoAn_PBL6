import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILED,
} from "./actionType";

const initialState = {
  error: null,
  loading: false,
  status:"",
  message:"",
};

export const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_USER: {
      return {
        ...state,
        loading: true,
        error:null,
        status:"",
        message:""
      };
    }
    case SIGNUP_USER_SUCCESS: {
      //console.log(action.payload.products)
      return {
        ...state,
        loading: false,
        error:null,
        status:action.payload.status,
        message:action.payload.message
        
      };
    }
    case SIGNUP_USER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        message:action.payload.message,
      };
    }
    default:
      return state;
  }
};
