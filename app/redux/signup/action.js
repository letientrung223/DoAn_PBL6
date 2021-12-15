import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILED,
} from "./actionType";

import axios from "axios";


export const postCheckLogin = (name,email, password,repassword) => {
  return async (dispatch) => {
    dispatch(signupUser(name,email, password,repassword));
    try {
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/users/signup",
        {
          "name": name,
          "email":username, 
          "password":password,
          "passwordConfirm":repassword,
        })
        .then((response) => {
          //console.log(response);
          const status = response.status;
          const message = response.message;
          
          dispatch(signupUserSuccess(status, message));
        })
        .catch((err) => {
          dispatch( signupUserFailed(err));
        });
    } catch (error) {
      dispatch( signupUserFailed(err));
    }
  };
};

const signupUser = (name,email, password,repassword) => {
  return {
    type: SIGNUP_USER,
  };
};

const signupUserSuccess = (status, message) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: { status, message },
  };
};

const  signupUserFailed = (error) => {
  return {
    type: SIGNUP_USER_FAILED,
    payload: {
      error,
    },
  };
};
