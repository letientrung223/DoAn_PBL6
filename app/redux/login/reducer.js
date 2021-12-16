import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,LOGOUT_USER
} from "./actionType";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  error: null,
  name: '',
  email: '',
  tokenVN: '',
  loading: false,
};

export const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        loading: true,
        name: "",
        email:"",
        tokenVN: "",
        error:null,
      };
    }
    case LOGIN_USER_SUCCESS: {
      // console.log("tokenVN",action.payload.tokenVN);
      return {
        ...state,
        loading: false,
        email:action.payload.email,
        tokenVN: action.payload.tokenVN,
        name: action.payload.name,
        
        error: null,
        
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case LOGOUT_USER:{
      AsyncStorage.removeItem('@storage_Key');
      return {
      ...state,
      tokenVN:"",
    }
    }
    default:
      return state;
  }
};
