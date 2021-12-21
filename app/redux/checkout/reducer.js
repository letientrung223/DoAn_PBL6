import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "./actionType";

const initialState = {
  error: null,
  loading: false,
  id_order:"",
  order:"",
};
import {Alert} from 'react-native'
export const createOrderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ORDER: {
      return {
        ...state,
        loading: true,
        error:null,
        id_order:"",
        order:"",
      };
    }
    case CREATE_ORDER_SUCCESS: {
     
      Alert.alert('Đặt hàng thành công, tiến hành thanh toán')
      return {
        ...state,
        loading: false,
        error:null,
        id_order:action.payload.id_order,
        order:action.payload.order,
      };
    }
    case CREATE_ORDER_FAILED: {
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
