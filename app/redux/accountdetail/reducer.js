import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
  } from "./actionType";
import {Alert} from "react-native";
const initialState = {

    email:"",
    name:"",
    loading: false,
    error: null,
  };
  
  export const getAccountReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_USER: {
        return {
          ...state,
          loading: true,
          email:"",
          error: null,
          name:"",
        };
      }
      case GET_USER_SUCCESS: {
        //console.log(action.payload.products)
        return {
          ...state,
          loading: false,
          name: action.payload.name,
          email: action.payload.email,
          error: null,
          
        };
      }
      case GET_USER_FAILED: {
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
  export const updateAccountReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case UPDATE_USER: {
        return {
          ...state,
          loading: true,
          email:"",
          error: null,
          name:"",
        };
      }
      case UPDATE_USER_SUCCESS: {
        Alert.alert("Success","Đã Lưu");
        console.log("Update success ",action.payload.name, action.payload.email);
        return {
          ...state,
          loading: false,
          name: action.payload.name,
          email: action.payload.email,
          error: null,
          
        };
      }
      case UPDATE_USER_FAILED: {
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