import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER
} from "./actionType";
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
// import { AsyncStorage } from '@react-native-community/async-storage';
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
    //console.log("value token ne ",value);
  } catch (e) {
    // saving error
  }
}

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
          //console.log(response);
          const email = response.data.data.user.email;
          const tokenVN = response.data.token;
          const name = response.data.data.user.name;
          storeData(tokenVN);
          dispatch(loginUserSuccess(email, tokenVN, name));
        })
        .catch((err) => {
          console.log("loi",err)
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
