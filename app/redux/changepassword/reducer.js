import {
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILED
  } from "./actionType";
import {Alert} from "react-native";
const initialState = {

    oldPass:"",
    newPass:"",
    renewPass:"", 
    loading: false,
    error: null,
  };

export const updatePasswordReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case UPDATE_PASSWORD: {
        return {
          ...state,
          loading: true,
          error: null,
          oldPass:"",
          newPass:"",
          renewPass:"", 
        };
      }
      case UPDATE_PASSWORD_SUCCESS: {
        Alert.alert("Success",);// không được
        // console.log("Update success ",action.payload.name, action.payload.email);
        return {
          ...state,
          loading: false,
          name: action.payload.name,
          email: action.payload.email,
          error: null,
          
        };
      }
      case UPDATE_PASSWORD_FAILED: {
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