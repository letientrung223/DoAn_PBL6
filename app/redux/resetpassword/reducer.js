import {
  PATCH_PW,
  PATCH_PW_SUCCESS,
  PATCH_PW_FAILED,
} from "./actionType";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from "react-native"

const initialState = {
  error: null,
  email: '',
  loading: false,
};

export const resetPWReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PATCH_PW: {
      return {
        ...state,
        loading: true,
        email:"",
        error:null,
      };
    }
    case PATCH_PW_SUCCESS: {
      // console.log("tokenVN",action.payload.tokenVN);
      Alert.alert("Reset Password is Success,let's Login");
      return {
        ...state,
        loading: false,
        email:action.payload.email,
        error: null,
        
      };
    }
    case PATCH_PW_FAILED: {
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
