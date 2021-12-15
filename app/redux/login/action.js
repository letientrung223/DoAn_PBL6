import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER
} from "./actionType";
//import { AsyncStorage } from 'react-native';
import axios from "axios";
// import { AsyncStorage } from '@react-native-async-storage/async-storage';


export const postCheckLogin = (username, password) => {
  return async (dispatch) => {
    dispatch(loginUser(username, password));
    try {
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/users/login",
        {
          "email":username, 
          "password":password
        })
        .then((response) => {
          console.log("mail", response.data.data.user.email);
          console.log("token",response.data.token) 
          console.log("name",response.data.data.user.name);
          const email = response.data.data.user.email;
          const tokenVN = response.data.token;
          const name = response.data.data.user.name;
          //console.log('tokenVN',tokenVN)
          dispatch(loginUserSuccess(email, tokenVN, name));
        })
        .catch((err) => {
          dispatch(loginUserFailed(err));
        });
    } catch (error) {
      dispatch(loginUserFailed(err));
    }
  };
};

const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
  };
};

const loginUserSuccess = (email,tokenVN,name) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { email,tokenVN,name },
  };
};

const loginUserFailed = (error) => {
  return {
    type: LOGIN_USER_FAILED,
    payload: {
      error,
    },
  };
};
export const postCheckLogout =()=>{
  return async(dispatch)=>{
    dispatch(logoutUser());
  }
}
const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
