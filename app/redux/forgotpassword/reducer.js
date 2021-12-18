import {
  POST_EMAIL,
  POST_EMAIL_SUCCESS,
  POST_EMAIL_FAILED,
} from "./actionType";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from "react-native"

const initialState = {
  error: null,
  email: '',
  loading: false,
};

export const forgotPWReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POST_EMAIL: {
      return {
        ...state,
        loading: true,
        email:"",
        error:null,
      };
    }
    case POST_EMAIL_SUCCESS: {
      // console.log("tokenVN",action.payload.tokenVN);
      return {
        ...state,
        loading: false,
        email:action.payload.email,
        error: null,
        
      };
    }
    case POST_EMAIL_FAILED: {
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
