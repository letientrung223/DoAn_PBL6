import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILED,
} from "./actionType";
import {Alert} from "react-native"
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
      Alert.alert(
        "Success, please Login",
      )
      //console.log(action.payload.message)
      return {
        ...state,
        loading: false,
        error:null,
        status:action.payload.status,
        message:action.payload.message
        
      };
    }
    case SIGNUP_USER_FAILED: {
      Alert.alert(
        "Please Sign Up Again",
      )
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
