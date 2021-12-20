import {
    ADD_ITEM_TO_CART,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAILED,
  } from "./actionType";

import { Alert } from "react-native";
  const initialState = {
    error: null,
    id_product: "",
    size:"",
    qty: "",
    loading: false,
    cartItem:"",
  };
  
  export const productReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case ADD_ITEM_TO_CART: {
        return {
          ...state,
          loading: true,
          id_product: "",
          size:"",
          qty: "",
          error:null,
          cartItem:"",
        };
      }
      case ADD_ITEM_TO_CART_SUCCESS: {
        Alert.alert(
            "Add product success"
          )
        return {
          ...state,
          loading: false,
          id_product:action.payload.email,
          size: action.payload.tokenVN,
          qty: action.payload.name, 
          cartItem: action.payload.cartItem,
          error: null,
          
        };
      }
      case ADD_ITEM_TO_CART_FAILED: {
        Alert.alert(
          "Add product fail"
        )
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
  